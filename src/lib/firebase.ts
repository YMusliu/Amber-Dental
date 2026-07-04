import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

/**
 * Public Firebase Web config. These NEXT_PUBLIC_* values are inlined into the
 * static export at build time and are safe to ship to the browser — access is
 * gated by Firestore security rules (see firestore.rules), not by secrecy.
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/** True once the build was given a real project id to talk to. */
export const isFirebaseConfigured = Boolean(firebaseConfig.projectId);

let app: FirebaseApp | undefined;
let firestore: Firestore | undefined;

/** Lazily initialises (once) and returns the Firestore instance. */
export function getDb(): Firestore {
  if (!isFirebaseConfigured) {
    throw new Error(
      "Firebase is not configured. Set NEXT_PUBLIC_FIREBASE_* in .env.local (see .env.local.example).",
    );
  }
  if (!app) app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  if (!firestore) firestore = getFirestore(app);
  return firestore;
}

# Contact form email setup (Firebase)

The contact form on the homepage writes a document to the Firestore `mail`
collection. The Firebase **Trigger Email from Firestore** extension watches that
collection and sends each submission to **amberdental.lab@gmail.com** over Gmail
SMTP.

No backend server is involved — the site stays a static export and the Firebase
Web SDK writes to Firestore directly from the browser.

**Project:** `amber-web-f7ca7` (Blaze plan). The web config is already in
`.env.local`, so the code is connected.

**Status: ✅ COMPLETE (verified 2026-07-04).** Firestore is enabled, the
`(default)` database exists (region `eur3`), security rules are deployed, the
Trigger Email extension is installed and configured with a working Gmail app
password, and a test document was delivered end to end
(`delivery.state: SUCCESS`). The contact form is live.

## One-time setup in the `amber-web-f7ca7` Firebase project

### 1. Create the Firestore database  — ✅ DONE
`(default)` database created in region `eur3`, Cloud Firestore API enabled.

### 2. Generate a Gmail App Password  — ✅ DONE
The extension needs an app password to authenticate as the Gmail account.

1. The Google account **amberdental.lab@gmail.com** must have **2-Step
   Verification** enabled (myaccount.google.com → Security).
2. Go to **myaccount.google.com → Security → App passwords**.
3. Create one named e.g. `amber-trigger-email` and copy the 16-character value.

### 3. Install the "Trigger Email from Firestore" extension  — ✅ DONE
Console → [Extensions](https://console.firebase.google.com/project/amber-web-f7ca7/extensions)
→ find **Trigger Email from Firestore** → Install. When prompted, configure:

| Setting | Value |
| --- | --- |
| SMTP connection URI | `smtps://amberdental.lab@gmail.com@smtp.gmail.com:465` |
| SMTP password | the 16-char app password from step 2 |
| Email documents collection | `mail` |
| Default FROM address | `Amber Dental Lab <amberdental.lab@gmail.com>` |
| Default REPLY-TO address | *(leave blank — each message sets its own)* |

> Gmail SMTP sends up to ~500 messages/day — far more than a contact form needs.

### 4. Deploy the security rules  — ✅ DONE
The locked-down [`firestore.rules`](firestore.rules) (public can only **create**
mail documents addressed to the lab — no reads, no sending elsewhere) are
deployed and verified. To redeploy after edits:

```bash
firebase deploy --only firestore:rules --project amber-web-f7ca7
```

### 5. Web config — already done
The `amber-web-f7ca7` web config is already in `.env.local`. Since this is a
static export the values are read at **build time**, so rebuild (or restart
`npm run dev`) after any change.

## Test it

1. `npm run dev`, open the homepage, submit the contact form.
2. Firestore → `mail` collection: a new document appears. The extension adds a
   `delivery` field — `state: SUCCESS` means the email was sent.
3. Check the amberdental.lab@gmail.com inbox.

## Recommended hardening (spam protection)

The form already includes a hidden honeypot field and the rules cap field sizes
and lock the recipient. For stronger bot protection, enable **Firebase App
Check** with reCAPTCHA v3 and require it on Firestore — ask to have this wired
in as a follow-up.

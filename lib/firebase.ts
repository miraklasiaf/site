import admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: 'miraklasiaf-now-sh'
    }),
    databaseURL: 'https://miraklasiaf-now-sh.firebaseio.com'
  })
}

export default admin.database()

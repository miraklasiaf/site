const admin = require('firebase-admin');

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
      client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      project_id: 'miraklasiaf-now-sh'
    }),
    databaseURL: 'https://miraklasiaf-now-sh.firebaseio.com'
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

module.exports = admin.database();

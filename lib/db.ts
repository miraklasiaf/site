import firebase from 'firebase/app'
import 'firebase/database'

const db = () => {
  try {
    firebase.initializeApp({
      databaseURL: 'https://miraklasiaf-now-sh.firebaseio.com'
    })
  } catch (error) {
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading.
     */
    if (!/already exists/u.test(error.message)) {
      // eslint-disable-next-line no-console
      console.error('Firebase initialization error', error.stack)
    }
  }

  return firebase.database().ref('views')
}

export default db

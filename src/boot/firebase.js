// import something here
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/storage'

const { FIREBASE_CONFIG } = process.env

export default async ({ router, Vue }) => {
  const firebaseConfig = JSON.parse(FIREBASE_CONFIG)
  if (!firebaseConfig) {
    console.error('missing firebase config on env variable VUE_FIREBASE_CONFIG')
    return
  }

  const app = firebase.initializeApp(firebaseConfig)

  Vue.prototype.$firebase = app

  router.beforeEach((to, _from, next) => {
    if (to.meta.private) {
      if (!firebase.auth().currentUser) {
        return next('/auth')
      }
    }

    return next()
  })
}

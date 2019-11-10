// import something here
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/storage'

const { VUE_FIREBASE_CONFIG: firebaseConfig } = process.env

export default async ({ router, Vue }) => {
  if (!firebaseConfig) {
    console.error('missing firebase config on env variable VUE_FIREBASE_CONFIG')
    return
  }

  Vue.prototype.$firebase = firebase.initializeApp(firebaseConfig, 'IsaGabChaDeCasaNova')

  router.beforeEach((to, _from, next) => {
    if (to.meta.private) {
      if (!firebase.auth().currentUser) {
        return next('/auth')
      }
    }

    return next()
  })
}

import firebase from 'firebase/app'
import 'firebase/auth'

export const providers = {
  facebook: firebase.auth.FacebookAuthProvider,
  google: firebase.auth.GoogleAuthProvider,
  github: firebase.auth.GithubAuthProvider,
  twitter: firebase.auth.TwitterAuthProvider
}

export const auth = {
  login (email, password) {
    return firebase.auth()
      .signInWithEmailAndPassword(email, password)
  },
  socialLogin (network) {
    if (!providers[network]) {
      throw new Error(`Unknown credentials provider: "${network}".`)
    }

    const provider = new providers[network]()

    return firebase.auth()
      .signInWithPopup(provider)
      .then(result => ({ network, result }))
  },
  register (email, password) {
    return firebase.auth()
      .createUserWithEmailAndPassword(email, password)
  }
}

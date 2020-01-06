import firebase from 'firebase/app'
import 'firebase/firestore'

/*
export function someAction (context) {
}
*/

let alreadySubscribed = false

export async function load ({ commit }) {
  const app = firebase.app()
  const firestore = firebase.firestore(app)
  if (!alreadySubscribed) {
    alreadySubscribed = true
    firestore.collection('lists').onSnapshot(snapshot => {
      const lists = snapshot.docs
      commit('LOAD_LISTS', [...lists])
    })
  }
}

export async function add (_, list) {
  const firestore = firebase.firestore()
  return firestore.collection('lists').add(list)
}

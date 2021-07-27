import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './config'

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth()
        this.db = app.firestore()
    }

    async register(name, email, password){
        const newUser = await this.auth.createUserWithEmailAndPassword(
            email, password
        )

        const newDoc = {
            name: name,
            email: email,
            profileImg: "",
            bio: "",
            created: Date.now(),
            followCount: 0,
            pro: false,
            verified: false,
            followers: [],
            following: [],
            comments: [],
        }
        firebase.db.collection('users').add(newDoc)

        return await newUser.user.updateProfile({
            name: name
        })
    }

    async login(email, password){
        return await this.auth.signInWithEmailAndPassword(email, password)
    }

    async logout(){
        await this.auth.signOut()
    }

    async resetPassword(email){
        await this.auth.sendPasswordResetEmail(email)
    }
}

const firebase = new Firebase()

export default firebase;
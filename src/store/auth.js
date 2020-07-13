import firebase from 'firebase/app'
export default {
    actions:{
        async login({dispatch,commit},{email,password}){
            try{
                let req = await firebase.auth().signInWithEmailAndPassword(email,password);
                return req;
            }catch(e){
        
            }
        },

        async logout(){
            await firebase.auth().signOut();
        }
    }
}
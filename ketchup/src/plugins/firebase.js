import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseconfig';
import { getFirestore,collection,getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  
  //init firebase app 
  const app = initializeApp(firebaseConfig);

  //init services
  const db = getFirestore(app);
  
  //collection ref
  const colRef = collection(db,'member')

  // get collection data
  getDocs(colRef).then((ref)=>{
      let member = []
      ref.docs.forEach((doc)=>{ 
        member.push({...doc.data()})
    })
    console.log(member)
  }).catch((err)=>{
      console.error(err);
  })
 
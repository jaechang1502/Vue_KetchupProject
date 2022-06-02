import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "ketchup-74800.firebaseapp.com",
    projectId: "ketchup-74800",
    storageBucket: "ketchup-74800.appspot.com",
    messagingSenderId: "470402831764",
    appId: "1:470402831764:web:280a744c31db13cea1ab81",
    measurementId: "G-2R4VHQ6C1M"
  };
  
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
 
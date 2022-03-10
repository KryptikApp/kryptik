// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { configFirebase } from "../../env";


// Initialize Firebase
const app = initializeApp(configFirebase);

const firestore = getFirestore(app);



export default firestore;
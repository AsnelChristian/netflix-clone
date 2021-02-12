import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDjVKJS2AgD3tmRTimHPERavzg8XEtWVHA',
  authDomain: 'netflix-clone-f1a62.firebaseapp.com',
  projectId: 'netflix-clone-f1a62',
  storageBucket: 'netflix-clone-f1a62.appspot.com',
  messagingSenderId: '189832880552',
  appId: '1:189832880552:web:75d7e4282cd7776a98bd9d',
  measurementId: 'G-9RFWCKSBB2',
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };

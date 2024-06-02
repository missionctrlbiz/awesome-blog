import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCPZIu_PLhlRLJH4Puhpv80PMkr_R6yXRg",
  authDomain: "flick-4df37.firebaseapp.com",
  projectId: "flick-4df37",
  storageBucket: "flick-4df37.appspot.com",
  messagingSenderId: "655406606002",
  appId: "1:655406606002:web:ed2905ac77b667ba5a8bab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
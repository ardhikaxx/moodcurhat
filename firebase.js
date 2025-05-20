import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue, update, remove } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDpMjhP4n2QAnLHAAaTWRhI_2lq4Vk5c38",
    authDomain: "chat-bot-mentalhealth.firebaseapp.com",
    databaseURL: "https://chat-bot-mentalhealth-default-rtdb.firebaseio.com",
    projectId: "chat-bot-mentalhealth",
    storageBucket: "chat-bot-mentalhealth.firebasestorage.app",
    messagingSenderId: "388188830190",
    appId: "1:388188830190:web:a8670817e049d9d65b76ff",
    measurementId: "G-X9QRGZLGKN"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { app, db, auth, ref, set, push, onValue, update, remove };
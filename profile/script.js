import {
    auth,
    db,
    doc,
    getDoc,
    onAuthStateChanged,
    signOut,
} from '../utils/utils.js';

const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // Successfully signed out
            console.log('User signed out');
            window.location.href = 'login.html'; // Redirect to login page after logout
        })
        .catch((error) => {
            console.error('Error signing out:', error);
        });
});

const userinfo = document.getElementById('user-info');
const user_image = document.getElementById('user_image');
const username = document.getElementById('username');
const email = document.getElementById('user_email');
const user_contact = document.getElementById('user_contact');

// Function to get user info by UID
function getUserInfo(uid) {
    const userRef = doc(db, "users", uid);

    getDoc(userRef)
        .then((data) => {
            console.log(data.id);
            console.log(data.data());

            // Update DOM with user data
            user_image.src = data.data().image || 'default_image_url.jpg'; // Set default image if none is available
            username.innerText = data.data().fullName || 'No Name';
            email.innerText = data.data().email || 'No Email'; // If email is stored in Firestore
            user_contact.innerText = data.data().number || 'No Contact Number';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

// Listen to auth state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, call getUserInfo with the user's UID
        getUserInfo(user.uid);
    } else {
        // No user is signed in, redirect to login page
        window.location.href = 'login.html';
    }
});

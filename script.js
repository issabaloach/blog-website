import {
    app,
    auth,
    db,
    storage,
    onAuthStateChanged,
    signOut,
    doc,
    getDoc,
    getDocs,
    collection,
}
     from "./utils/utils.js";


     const user_image = document.getElementById('user_image');
     const avatar = document.getElementById('avatar');
     const login_link = document.getElementById('login_link')

     onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            login_link.style.display = "none";
            avatar.style.display = "inline-block";
            getUserInfo(uid);
            // console.log(uid);
            // ...
        } else {
            // window.location.href = './authentication/login/login.html';
            login_link.style.display = "inline-block";
            avatar.style.display = "none";
        }
    });
    


function getUserInfo(uid) {

    const userRef = doc(db, "users", uid);

    getDoc(userRef).then((data) => {
        console.log(data.id);
        console.log(data.data());

        user_image.src = data.data().image;
        user_contact.innerText = data.data().number;

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
};

const signout = document.getElementById("logout");

signout.addEventListener("click", () => {
  signOut(auth);
});

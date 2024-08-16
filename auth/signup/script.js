import {
    auth,
    createUserWithEmailAndPassword,
    doc,
    setDoc,
    db,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
  } from "../../utils/utils.js";
  
  const signin_form = document.getElementById("signin_form");
  const submit_btn = document.getElementById("submit_btn");
  
  signin_form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("e=>", e);
  
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const phoneNumber = e.target[2].value;
    const password = e.target[3].value;
    const image = e.target[4].files[0];
  
    const userInfo = {
      fullName,
      email,
      phoneNumber,
      // Remove password from userInfo to avoid storing it in Firestore
      image,
    };
  
    submit_btn.disabled = true;
    submit_btn.innerText = "Loading...";
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
  
        console.log('user=>', user);
        console.log('user=>', user.user.uid);
  
        const userRef = ref(storage, `user/${user.user.uid}/${image.name}`);
  
        uploadBytes(userRef, image).then(() => {
  
          console.log("User image uploaded");
  
          getDownloadURL(userRef).then((url) => {
            console.log("url=>", url);
  
            userInfo.image = url;
  
            const userDbRef = doc(db, "users", user.user.uid);
  
            setDoc(userDbRef, userInfo).then(() => {
              console.log("User added in db");
              window.location.href = "/";
  
              submit_btn.disabled = false;
              submit_btn.innerText = "Submit";
            })
              .catch((error) => {
                alert("Error in adding user to db: " + error.message);
                submit_btn.disabled = false;
                submit_btn.innerText = "Submit";
              });
          })
            .catch((error) => {
              alert("Error in getting image URL: " + error.message);
              submit_btn.disabled = false;
              submit_btn.innerText = "Submit";
            });
  
        })
          .catch((error) => {
            alert("Error uploading image: " + error.message);
            submit_btn.disabled = false;
            submit_btn.innerText = "Submit";
          });
      })
      .catch((error) => {
        alert("Error creating user: " + error.message);
        submit_btn.disabled = false;
        submit_btn.innerText = "Submit";
      });
  });
  
var firebaseConfig = {
    apiKey: "AIzaSyB6O9G_Ns3_-87tkBmJc3G6Zh0zDUrTqX8",
    authDomain: "karnal-sqyk.firebaseapp.com",
    databaseURL: "https://karnal-sqyk-default-rtdb.firebaseio.com",
    projectId: "karnal-sqyk",
    storageBucket: "karnal-sqyk.appspot.com",
    messagingSenderId: "846397054019",
    appId: "1:846397054019:web:dad7f70615d823207008f6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addind user"
    });
}
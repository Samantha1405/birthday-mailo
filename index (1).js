const firebaseConfig = 
{
    apiKey: "AIzaSyDzZxfp_1EiF0GH2ylfvov7jgSb1VVDLsU",
    authDomain: "birthday-f573a.firebaseapp.com",
    databaseURL: "https://birthday-f573a-default-rtdb.firebaseio.com",
    projectId: "birthday-f573a",
    storageBucket: "birthday-f573a.appspot.com",
    messagingSenderId: "648784744717",
    appId: "1:648784744717:web:c02daf08f9d052fc352044",
    measurementId: "G-ZDW3Z1R9VE"
  };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
 //set database variable 
 var database = firebase.database();
 
 for (i = 1; i <= 10; i++) 
{
      var date = new Date().toJSON().slice(5, 10);
      var d = new Date();
      var user_ref = database.ref('users/' + i)
      r = user_ref.on('value', function (snapshot) 
      {
          var data = snapshot.val();
          var ddob = data.dob.slice(5, 10);
          if (date == ddob) 
          {
            document.getElementById("name").innerText=data.Name;
            document.getElementById("note").innerText=data.note;
          }
      });
}
 

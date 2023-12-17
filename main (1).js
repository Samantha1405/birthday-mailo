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

//set data to database
function save() 
{
        var ent = document.getElementById('en').value;
        var Name = document.getElementById('name').value;
        var dob = document.getElementById('dob').value;
        var email = document.getElementById('email').value;
        var note = document.getElementById('note').value;
        database.ref('users/' + ent).set({
                Number: ent,
                Name: Name,
                dob: dob,
                email: email,
                note: note
        });
}

//retrieve data from database
function get() 
{
        //set database variable
        database = firebase.database() 
        document.write("<title>Birthday Alarm</title>")
        document.write("<body id='main'>")
        document.write("<table align=center border=1 id='t'>")
        document.write("<tr>\
                    <th>Entry No</th>\
                    <th>Name</th>\
                    <th>Date of birth</th>\
                    <th>Email</th>\
                    <th>Note</th>\
        ");
        var Table = document.getElementById("t");
        Table.style.width = "60%";
        Table.style.height = "50px";
        Table.style.backgroundColor = "#0f0e17"
        Table.style.color = "white";
        Table.style.fontSize = "20px";
        Table.style.marginTop = "100px";
        for (i = 1; i <= 10; i++) 
        {
            var user_ref = database.ref('users/' + i)
            r = user_ref.on('value', function (snapshot) 
                {
                    var data = snapshot.val();
                    document.write("<tr>\
                        <td style='padding:30px; text-align:center'>"+ data.Number + "</td>\
                        <td style='text-align:center'>"+ data.Name + "</td>\
                        <td style='text-align:center'>"+ data.dob + "</td>\
                        <td style='text-align:center'>"+ data.email + "</td>\
                        <td style='text-align:center'>"+ data.note + "</td>\
                        </tr>\
                    ");
                    // css styling for table tag
                    var Table = document.getElementById("t");
                    Table.style.width = "60%";
                    Table.style.height = "50px";
                    Table.style.backgroundColor = "#0f0e17"
                    Table.style.color = "white";
                    Table.style.fontSize = "20px";
                    Table.style.marginTop = "100px";
                });
            }
        document.write("</body>")
        // css styling for body tag
        var MainB = document.getElementById("main");
        MainB.style.overflowX = "hidden"
        MainB.style.alignItems = "center";
        MainB.style.height = "100vh";
        MainB.style.width = "100%";
        MainB.style.backgroundImage = "radial-gradient(circle, #2ecc71 0%, #000000 100%)";
        MainB.style.backgroundSize = "cover";
        MainB.style.backgroundPosition = "center";
        MainB.style.backgroundRepeat = "no-repeat";
        MainB.style.fontFamily = "";
        MainB.style.color = "#fff";

        //div
        const div = document.createElement("div");
        div.id = "div";
        div.style.display = "flex";
        document.body.appendChild(div);

        //Remove
        //background
        const box = document.createElement("div");
        box.id = "box";
        box.style.width = "25%";
        box.style.height = "300px";
        box.style.backgroundColor = "#0f0e17"
        box.style.color = "white";
        box.style.fontSize = "20px";
        box.style.marginTop = "100px";
        box.style.marginLeft = "450px";
        div.appendChild(box);

        //heading
        const p = document.createElement('p');
        p.innerText = "Delete Entry";
        p.id = "p";
        p.style.textAlign = "center";
        p.style.fontSize = "20px";
        p.style.padding = "30px";
        box.appendChild(p);

        //input name
        const inp = document.createElement('input');
        inp.id = "inp";
        inp.type = "text";
        inp.style.marginTop = "20px";
        inp.style.marginLeft = "100px";
        inp.style.width = "150px"
        inp.style.height = "40px"
        inp.style.fontSize = "20px";
        box.appendChild(inp);

        //reload page
        const a= document.createElement('a');
        a.id = "a";
        a.href = "../html/display.html";
        a.style.textDecoration = "none";
        a.style.color = "white";
        a.style.fontSize = "20px";
        box.appendChild(a); 

        //button
        const b = document.createElement("button");
        b.innerText = "Remove";
        b.id = "b";
        b.style.margin = "40px";
        b.style.width = "100px"
        b.style.height = "60px"
        b.style.backgroundColor = "#0f0e17"
        b.style.color = "white";
        b.style.fontSize = "15px";
        b.onclick = function remove() 
            {
                var r = document.getElementById("inp").value;
                database.ref('users/' + r).remove()
                alert(deleted);
            }
        a.appendChild(b);

        // back button
        //background
        const box1 = document.createElement("div");
        box1.id = "box";
        box1.style.width = "25%";
        box1.style.height = "180px";
        box1.style.backgroundColor = "#0f0e17"
        box1.style.color = "white";
        box1.style.fontSize = "20px";
        box1.style.marginTop = "100px";
        box1.style.marginLeft = "150px";
        div.appendChild(box1);

        //link to main page
        const an = document.createElement('a');
        an.id = "an ";
        an.href = "../html/index.html";
        an.style.textDecoration = "none";
        an.style.color = "white";
        an.style.fontSize = "20px";
        box1.appendChild(an);

        //button
        const b1 = document.createElement("button");
        b1.innerText = "Back";
        b1.id = "b";
        b1.style.margin = "60px";
        b1.style.width = "100px"
        b1.style.height = "60px"
        b1.style.backgroundColor = "#0f0e17"
        b1.style.color = "white";
        b1.style.fontSize = "20px";
        an.appendChild(b1);

}

//to retrieve email and send email using smtpjs
function backgroundCheck() 
{
        for (i = 1; i <= 10; i++) 
        {
            var date = new Date().toJSON().slice(5, 10);
            var d = new Date();
            var h = d.getHours();
            var m = d.getMinutes();
            var user_ref = database.ref('users/' + i)
            r = user_ref.on('value', function (snapshot) 
            {
                var data = snapshot.val();2
                var ddob = data.dob.slice(5, 10);
                iterate:if (date == ddob && h == 10 && m == 48) 
                {
                    var UserEmail = data.email;
                    Email.send({
                        SecureToken : "d654f3c1-86d8-41d1-84e0-a7d7b9f46155",
                        To : UserEmail,
                        From : "projects2125@gmail.com",
                        Subject : "Happy Birthday!!!",
                        Body : "https://lq0j2kiwgvilbbyot7bznw.on.drv.tw/www.Wishes/"
                    });
                break iterate;
                }
            });
        }
}
backgroundCheck()
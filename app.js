var userData=[
    {
        username :'Adhrit',
        password :'Adp_2011$'
    },
    {
        username :'Adhrit1',
        password :'bowledOver'
    },
    {
        username : 'Adhrit2',
        password : "Adh1232"
    }
]

function getInfo(){
    var user=document.getElementById('username').value;
    var pass=document.getElementById('password').value;

    for(i=0; i<userData.length; i++){
        if(user==userData[i].username && pass==userData[i].password){
            alert(user + " is logged in");
            return;
        }
    }
    alert("incorrect username or password");
}
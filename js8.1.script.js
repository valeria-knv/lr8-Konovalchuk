window.onload=function(){
    document.getElementById('nick').innerHTML = localStorage.getItem('nick');
}
function Img(a, b, c, id)
{
    if(id == "K"){
        document.getElementById("img").classList.add("windowK", "backgr");
    }
    else{
        if(id == "M"){
            document.getElementById("img").classList.add("windowM", "backgr");
        }
        else{
            document.getElementById("img").classList.add("windowN", "backgr");
        }
    }
    document.getElementById("img").innerHTML="Strength: " + a + "/5<br>Speed: " + b + "/5<br>Technique: " + c + "/5";
}
function Clear()
{
    document.getElementById("img").classList.remove("windowK", "windowM", "windowN", "backgr");
    document.getElementById("img").innerHTML = "";
}
function Open(str){
    localStorage.setItem('test', str);
    window.location.href=".\\lr8.2.html";
}

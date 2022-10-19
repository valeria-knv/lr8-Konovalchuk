// window.onload = function(){
function ImgK()
{
    document.getElementById("img").classList.add("windowK", "backgr");
    document.getElementById("img").innerHTML="Strength: 4/5<br>Speed: 4/5<br>Technique: 4/5";
}
function ImgM()
{
    document.getElementById("img").classList.add("windowM", "backgr");
    document.getElementById("img").innerHTML="Strength: 5/5<br>Speed: 5/5<br>Technique: 2/5";
}
function ImgN()
{
    document.getElementById("img").classList.add("windowN", "backgr");
    document.getElementById("img").innerHTML="Strength: 4/5<br>Speed: 5/5<br>Technique: 3/5";
}
function Clear()
{
    document.getElementById("img").classList.remove("windowK", "windowM", "windowN", "backgr");
    document.getElementById("img").innerHTML = "";

}
function OpenK(){
    localStorage.setItem('test', ".\\Killua.png");
    window.location.href=".\\lr8.2.html";
}
function OpenM(){
    localStorage.setItem('test', ".\\Midoria.png");
    window.location.href=".\\lr8.2.html";
}
function OpenN(){
    localStorage.setItem('test', ".\\Naruto.png");
    window.location.href=".\\lr8.2.html";
}
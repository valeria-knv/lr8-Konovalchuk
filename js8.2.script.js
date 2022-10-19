function GetRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
window.onload=function(){
    let img = document.createElement('img');
    img.src = localStorage.getItem('test');
    img.classList.add('imgk');
    document.body.prepend(img);
}
function Figth(){
    var countA = 0, countB = 0, a = 0, b = 0;
    while(countA < 3 && countB < 3){
        a = GetRandom(0,10), b = GetRandom(0,10);
        //document.getElementById('fgt').innerHTML += a + ":" + b + '<br>';
        if(a > b)
        {
            countA++;
        }
        else{
            if(a < b){
                countB++;
            }
        }
    }
    if(countA > countB)
    {
        document.getElementById('fgt').innerHTML = "YOU WIN<br>" + countA + ":" + countB + '<br>';
    }
    else{
        document.getElementById('fgt').innerHTML = "YOU LOSE<br>" + countA + ":" + countB + '<br>';
    }





}
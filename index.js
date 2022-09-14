
const button = document.querySelector('button')
button.onclick = () => {
  window.location.reload();
}


var randomnum = Math.floor(Math.random()*6) +1;
var whichimg = document.querySelectorAll("img")[0];
var src1 ="images/dice"+randomnum+".png"
whichimg.setAttribute('src',src1);

var randomnum1 = Math.floor(Math.random()*6) +1;
var whichimg1 = document.querySelectorAll("img")[1];
var src2 ="images/dice"+randomnum1+".png"
whichimg1.setAttribute('src',src2);

if(randomnum > randomnum1)
{
  document.querySelector("h2").innerHTML="Player 1 wins..!"
}
else if(randomnum1 > randomnum)
{
  document.querySelector("h2").innerHTML="Player 2 wins..!"

}
else
{
  document.querySelector("h2").innerHTML="Draw!!!, Please ReRoll..!"

}

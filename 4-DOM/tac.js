
//console.log("Connected");
var restart = document.querySelector("#b");
var cases = document.querySelectorAll("td");

function clearBoard() 
{
    for(let i= 0 ; i <cases.length;i++)
    cases[i].textContent= ''
}
restart.addEventListener("click",clearBoard);

function Play()
{
    if (this.textContent === "")
    this.textContent = 'X'
    else if (this.textContent === "X")
    this.textContent = 'O'
    else 
    this.textContent = '';
}
for(let i= 0 ; i <cases.length;i++)
{
    cases[i].addEventListener('click',Play)
}
    
// document.getElementsByClassName('mainbody')[0].addEventListener('click',(e)=>{
//     let a= e.target.attributes.style.nodeValue
//     console.log(a.split(';')[2]);
//     document.body.style= a.split(';')[2];
// },);\
let flag=true;
let arr=[1,0,1,0,1,0,0,1,0];
let index;
let player1 = document.querySelector('.input1');
let player2 = document.querySelector('.input2');
let p1count = 0, p2count = 0;
document.querySelector('.big').addEventListener("click",function(e) 
{

   index = e.target.id; 
   if(arr[index]==1 || arr[index]==0)
    {e.target.innerText=getVal();
     arr[index]=getVal();
     getWinner();
     flag=!flag; 
   
   }
   console.log(arr);
})

function getVal()
{
   return(flag)?'x':'o';
}

function getWinner()
{
  

   if(
      (arr[0]==arr[1] && arr[1]==arr[2])||
      (arr[3]==arr[4] && arr[4]==arr[5])||
      (arr[6]==arr[7] && arr[7]==arr[8])||
      (arr[0]==arr[3] && arr[3]==arr[6])||
      (arr[1]==arr[4] && arr[4]==arr[7])||
      (arr[2]==arr[5] && arr[5]==arr[8])||
      (arr[0]==arr[4] && arr[4]==arr[8])||
      (arr[2]==arr[4] && arr[4]==arr[6]))
      {
          if(flag){
              alert('winner is X');
              p1count++;
          }
          else{
              alert('winner is 0');
              p2count++;
          }
          document.querySelector('.output1').innerText=p1count;
          document.querySelector('.output2').innerText=p2count;
          arr=[];
   }

   }     


function start()
{
   if(player1.value!='' && player2.value!='')
     {
   document.querySelector('.maindiv').style='display:none;';
   document.querySelector('.maindiv2').style='display:block;';
   document.querySelector('.llabel1').innerText ="Player 1: "+ player1.value ;
   document.querySelector('.llabel2').innerText ="Player 2: "+player2.value;
 
}
}
function reset() {
   for (let i = 0; i <= 8; i++) {
       document.querySelectorAll('.box ')[i].innerHTML= ' ';
       arr = [1, 0, 1, 0, 1, 0, 0, 1, 0];
   }
   flag = true;
}

function restart()
{
   location.reload();
}
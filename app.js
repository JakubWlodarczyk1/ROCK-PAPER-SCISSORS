let userScore=0;
let compScore=0;
let sdd=parseInt(window.prompt("How many wins you want to play?"));
let userScore_span=document.getElementById('user-score');
let compScore_span=document.getElementById('comp-score');
let result_div=document.querySelector('.result>p');
let rock_div=document.getElementById('r');
let paper_div=document.getElementById('p');
let scissor_div=document.getElementById('s');
let info_footer=document.getElementById('info');

function compPick() {
  let choose=['r','p','s'];
  return (choose[Math.floor(Math.random()*3)]);
}

function fullNamePickComp(input){
  switch(input){
    case 'r':
    return 'rock';
    case 'p':
    return 'paper';
    case 's':
    return 'scissor';
  }
}

function fullNamePickUSer(input){
  switch(input){
  case 'r':
  return 'rock';
  case 'p':
  return 'paper';
  case 's':
  return 'scissor';
}}

function play(input){
    const computerChoice=compPick();
    const Userpick= fullNamePickUSer(input);
    const Comppick=fullNamePickComp(computerChoice);
    const smallUserWorld='user'.fontsize(3).sub();
    const smallCompWorld='comp'.fontsize(3).sub();
    if (sdd>userScore && sdd>compScore){
     switch(input+computerChoice){
      case 'rr':
      case 'pp':
      case 'ss':
        result_div.innerHTML=`${Userpick}${smallUserWorld.fontcolor('gray')} draw with ${Comppick}${smallCompWorld.fontcolor('gray')}`;
        document.getElementById(input).classList.add('gray-glow');
        setTimeout(() => {
          document.getElementById(input).classList.remove('gray-glow');
        }, 300);
        break;
      case 'rs':
      case 'sp':
      case 'pr':
        userScore++;
        userScore_span.innerHTML=userScore;
        result_div.innerHTML=`${Userpick}${smallUserWorld.fontcolor('green')} beats ${Comppick}${smallCompWorld.fontcolor('red')}`;
        document.getElementById(input).classList.add("green-glow");
        setTimeout(() => {
          document.getElementById(input).classList.remove('green-glow');
        }, 300);
        break;
      case 'rp':
      case 'sr':
      case 'ps':
        compScore++;
        compScore_span.innerHTML=compScore;
        result_div.innerHTML=`${Userpick}${smallUserWorld.fontcolor('red')} loses with ${Comppick}${smallCompWorld.fontcolor('green')}`;
        document.getElementById(input).classList.add("red-glow");
        setTimeout(() => {
          document.getElementById(input).classList.remove('red-glow');
        }, 300);
    }}
    if (sdd==userScore || sdd==compScore) {
      if(sdd==userScore) {
        info_footer.textContent = 'You won!!';
        info_footer.style.color = 'green';
      } else {
        info_footer.textContent = 'You lost!!';
        info_footer.style.color = 'red';
      }
    }
}

rock_div.addEventListener('click',()=>{
     play('r');
})

paper_div.addEventListener('click',()=>{
    play('p');
})

scissor_div.addEventListener('click',()=>{
     play('s');
})

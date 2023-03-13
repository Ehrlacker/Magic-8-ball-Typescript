export {}
const questions = document.querySelector<HTMLInputElement>('.question');
const answers = document.querySelector('.answer') as HTMLDivElement | null;
const click = document.querySelector<HTMLButtonElement>('.clickMe');

answers?.classList.add('hidden');

click?.addEventListener('click', ()=> {
  answers?.classList.remove('hidden');

  let eightBall = '';

  let randomNumber = Math.floor(Math.random() * 8);

  switch (randomNumber) {
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Reply hazy, try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Do not count on it';
      break;
    case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook is not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
  }
  if(answers){
    answers.innerHTML = eightBall;
  }
  // answers?.innerHTML = eightBall;
  (document.querySelector('.clickMe') as HTMLButtonElement).disabled = true;
  click?.classList.add('hidden');
});

questions?.addEventListener('click', () => {
  if(answers){
    answers.innerHTML = '';
  }
  
  (document.querySelector('.question')as HTMLInputElement).value = '';
  (document.querySelector('.clickMe')as HTMLButtonElement).disabled = false;
  click?.classList.remove('hidden');
});

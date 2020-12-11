const omikuziBox = document.getElementById('main__top');
const randomWord = document.getElementById('omikuzi__word');

omikuziBox.addEventListener('click',() =>{
  
  let result = [
  '大吉',
  '中吉',
  '末吉',
  '吉',
  '凶'
  ];
    
 

    
  
    let random =  result[Math.floor(Math.random() * result.length)];

    randomWord.textContent = random;
  
})
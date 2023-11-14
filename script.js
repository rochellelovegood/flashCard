const flashcards= document.getElementById('flashcards')
const createBox= document.getElementById('create-box')
const question=document.getElementById('question')
const answer=document.getElementById('answer')
let contentArray= localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')):[];

function delFlashCards(){
    localStorage.clear();
    flashcards.innerHTML=" "
    contentArray=[]
}
function showCreateCardBox(){
    createBox.style.display="block"
}
contentArray.forEach(divMaker);
function divMaker(text) {
    var flashcards = document.getElementById("flashcards");
  
    var div = document.createElement("div");
    div.className = "card m-2 w-96 h-52 text-white text-center text-xl bg-primary";
    
    var h1_question = document.createElement("h2");
    h1_question.className = "card-title  text-xl font-bold p-11 justify-center";
    h1_question.innerHTML = text.my_question;
  
    var h2_answer = document.createElement("div");
    h2_answer.className = "hidden p-2 text-lg "; // Use the "hidden" class to hide initially
    h2_answer.innerHTML = text.my_answer;
  
    div.appendChild(h1_question);
    div.appendChild(h2_answer);
  
    div.addEventListener("click", function () {
      // Toggle the "hidden" class to show/hide
      h2_answer.classList.toggle("hidden");
    });
  
    flashcards.appendChild(div);
  }
  
  
  function addFlashcard() {
    const questionValue = question.value.trim();
    const answerValue = answer.value.trim();

    if (questionValue && answerValue) {
      const flashcardInfo = {
        my_question: questionValue,
        my_answer: answerValue,
      };

      contentArray.push(flashcardInfo);
      localStorage.setItem('items', JSON.stringify(contentArray));
      divMaker(contentArray[contentArray.length - 1]);

      question.value = '';
      answer.value = '';
    } else {
      alert('Please provide both a question and an answer.');
    }
  }
function hideCreateBox(){
  createBox.style.display="none"
}
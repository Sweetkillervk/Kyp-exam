const quizData = [
    {
      "question": "It ——- at 9:00 in the evening.",
      "a": "Closes",
      "b": "Close",
      "c": "Closed",
      "d": "Closing",
      "correct": "a"
    },
    {
      "question": "You shouldn’t ——- called him a fool.",
      "a": "Has",
      "b": "Have",
      "c": "Had",
      "d": "Having",
      "correct": "b"
    },
    {
      "question": "They ——- finished the job.",
      "a": "Have",
      "b": "Has",
      "c": "Had",
      "d": "Having",
      "correct": "a"
    },
    {
      "question": "Bad driving ——- many accidents.",
      "a": "Cause",
      "b": "Causes",
      "c": "Caused",
      "d": "Causings",
      "correct": "b"
    },
    {
      "question": "You ——- the wrong dress for the interview.",
      "a": "Chose",
      "b": "Choose",
      "c": "Choosing",
      "d": "Chosen",
      "correct": "a"
    },
    {
      "question": "Where ——- they go yesterday?",
      "a": "Did",
      "b": "Do",
      "c": "Does",
      "d": "Doing",
      "correct": "a"
    },
    {
      "question": "Somebody must ——– take my cellphone.",
      "a": "Has",
      "b": "Have",
      "c": "Had",
      "d": "Having",
      "correct": "b"
    },
    {
      "question": "She —— always wanted to meet him.",
      "a": "Has",
      "b": "Have",
      "c": "Had",
      "d": "Having",
      "correct": "a"
    },
    {
      "question": "Anita —— tennis very well.",
      "a": "Plays",
      "b": "Play",
      "c": "Playing",
      "d": "Played",
      "correct": "a"
    },
    {
      "question": "How much —— it?",
      "a": "Is",
      "b": "Was",
      "c": "Are",
      "d": "Be",
      "correct": "a"
    },
    {
      "question": "My parents —— in a very small flat.",
      "a": "Live",
      "b": "Lives",
      "c": "Lived",
      "d": "Living",
      "correct": "a"
    },
    {
      "question": "She does not want ——- not want to stay at home.",
      "a": "Do",
      "b": "Does",
      "c": "Did",
      "d": "Doing",
      "correct": "b"
    },
    {
      "question": "My friend Anita —— sport.",
      "a": "Loves",
      "b": "Love",
      "c": "Loved",
      "d": "Loving",
      "correct": "a"
    },
    {
      "question": "You —— riding non-stop for hours so you must be very tired.",
      "a": "Have been",
      "b": "Had been",
      "c": "Have",
      "d": "Had",
      "correct": "a"
    },
    {
      "question": "What —— you do every Sunday?",
      "a": "Do",
      "b": "Does",
      "c": "Did",
      "d": "Doing",
      "correct": "a"
    },
    {
      "question": "Good students always ——- their homework.",
      "a": "Do",
      "b": "Does",
      "c": "Did",
      "d": "Doing",
      "correct": "a"
    },
    {
      "question": "The swimming pool —— at 7:00 in the morning.",
      "a": "Opens",
      "b": "Open",
      "c": "Opened",
      "d": "Opening",
      "correct": "a"
    },
    {
      "question": "I never —— coffee.",
      "a": "Drink",
      "b": "Drinks",
      "c": "Drank",
      "d": "Drinking",
      "correct": "a"
    },
    {
      "question": "The Olympic game —— place every four years.",
      "a": "Takes",
      "b": "Take",
      "c": "Took",
      "d": "Taking",
      "correct": "a"
    },
    {
      "question": "I —— hungry.",
      "a": "Am",
      "b": "Is",
      "c": "Are",
      "d": "Be",
      "correct": "a"
    },
    {
      "question": "She has never ——- something like that before.",
      "a": "Done",
      "b": "Do",
      "c": "Does",
      "d": "Doing",
      "correct": "a"
    },
    {
      "question": "They ——- a cat and a dog.",
      "a": "Have",
      "b": "Has",
      "c": "Had",
      "d": "Having",
      "correct": "a"
    },
    {
      "question": "The students ——- standing up the anthem.",
      "a": "Are",
      "b": "Is",
      "c": "Was",
      "d": "Were",
      "correct": "a"
    },
    {
      "question": "I ——– like to watch TV. There is a good film on.",
      "a": "Should",
      "b": "Would",
      "c": "Could",
      "d": "Might",
      "correct": "a"
    },
    {
      "question": "My students ——- a little English.",
      "a": "Speak",
      "b": "Speaks",
      "c": "Speaking",
      "d": "Spoke",
      "correct": "a"
    },
    {
      "question": "He ——– called me twice this morning.",
      "a": "Has",
      "b": "Have",
      "c": "Had",
      "d": "Having",
      "correct": "a"
    },
    {
      "question": "Tell me, ——– you coming to the play?",
      "a": "Are",
      "b": "Is",
      "c": "Was",
      "d": "Were",
      "correct": "a"
    },
    {
      "question": "This museum has got ——- collection of antique objects in the world.",
      "a": "Larger",
      "b": "Largest",
      "c": "Biggest",
      "d": "More",
      "correct": "a"
    },
    {
      "question": "He is ——- I thought.",
      "a": "Youngest",
      "b": "Younger",
      "c": "Most young",
      "d": "More young",
      "correct": "a"
    },
    {
      "question": "My suitcase is ——- than your suitcase.",
      "a": "Larger",
      "b": "Largest",
      "c": "Biggest",
      "d": "More larger",
      "correct": "a"
    },
    {
      "question": "Mr. Sinha ——- Spanish and French.",
      "a": "Teaches",
      "b": "Teach",
      "c": "Teaching",
      "d": "Taught",
      "correct": "a"
    },
    {
      "question": "Which is the correct sentence?",
      "a": "Sarvesh never smiles.",
      "b": "Sarvesh smile never.",
      "c": "Never Sarvesh smile.",
      "d": "Smile never Sarvesh.",
      "correct": "a"
    },
    {
      "question": "Mohan is not such a —— student.",
      "a": "Bad",
      "b": "Worst",
      "c": "Good",
      "d": "Better",
      "correct": "a"
    },
    {
      "question": "——- big building over there is the parliament.",
      "a": "That",
      "b": "This",
      "c": "These",
      "d": "Those",
      "correct": "a"
    },
    {
      "question": "Which is a correct sentence?",
      "a": "She really listens to classical music.",
      "b": "She really listen to classical music.",
      "c": "She listen really to classical music.",
      "d": "She classical music listens really.",
      "correct": "a"
    },
    {
      "question": "I ——- fruit juice very much.",
      "a": "Like",
      "b": "Likes",
      "c": "Liked",
      "d": "Liking",
      "correct": "a"
    },
    {
      "question": "Which is the correct sentence?",
      "a": "I always go jogging in the morning.",
      "b": "I always jog in the morning go.",
      "c": "Go jogging I always in the morning.",
      "d": "I jogging always go in the morning.",
      "correct": "a"
    },
    {
      "question": "Please ——- your homework quickly so we can go play.",
      "a": "Do",
      "b": "Done",
      "c": "Does",
      "d": "Doing",
      "correct": "b"
    },
    {
      "question": "—— night the factory was closed so he came home.",
      "a": "That",
      "b": "This",
      "c": "Those",
      "d": "These",
      "correct": "a"
    },
    {
      "question": "What does ——– notice say?",
      "a": "That",
      "b": "This",
      "c": "These",
      "d": "Those",
      "correct": "a"
    },
    {
      "question": "China is —— India.",
      "a": "Bigger than",
      "b": "Bigger",
      "c": "Bigger then",
      "d": "More bigger than",
      "correct": "a"
    },
    {
      "question": "Here, take ——- folder and put on it the desk over there.",
      "a": "This",
      "b": "That",
      "c": "These",
      "d": "Those",
      "correct": "a"
    },
    {
      "question": "The Taj was ——- than the Holiday Inn.",
      "a": "More expensive",
      "b": "Expensive",
      "c": "Most expensive",
      "d": "Cheaper",
      "correct": "a"
    },
    {
      "question": "Ramji is a ——- gardener than Santosh.",
      "a": "Better",
      "b": "Best",
      "c": "Good",
      "d": "Bestest",
      "correct": "a"
    },
    {
      "question": "They are both nice girls but I think Suman is ——- of the two.",
      "a": "The nicer",
      "b": "The best",
      "c": "The good",
      "d": "More nice",
      "correct": "a"
    },
    {
      "question": "Mr. Shah is the ——- man today because he won the lottery.",
      "a": "Happiest",
      "b": "Happier",
      "c": "Happy",
      "d": "Most happy",
      "correct": "a"
    },
    {
      "question": "Fill in the blank with correct option so that this becomes an order. ——- off your mobiles.",
      "a": "Switch",
      "b": "Turn",
      "c": "Put",
      "d": "Off",
      "correct": "a"
    },
    {
      "question": "She ——– playing tennis.",
      "a": "Likes",
      "b": "Like",
      "c": "Liked",
      "d": "Liking",
      "correct": "a"
    },
    {
      "question": "Don’t ——- late for school.",
      "a": "Be",
      "b": "Are",
      "c": "Is",
      "d": "Beens",
      "correct": "a"
    },
    {
      "question": "They ——– to buy a house but they haven’t got enough money.",
      "a": "Would like",
      "b": "Want",
      "c": "Would",
      "d": "Like",
      "correct": "a"
    },
    {
      "question": "You —– dancing, don’t you?",
      "a": "Like",
      "b": "Likes",
      "c": "Liked",
      "d": "Liking",
      "correct": "a"
    },
    {
      "question": "I —— to eat a pizza tonight.",
      "a": "Should like",
      "b": "Would like",
      "c": "Like",
      "d": "Likes",
      "correct": "b"
    },
    {
      "question": "Mike ——– children very much.",
      "a": "Likes",
      "b": "Like",
      "c": "Liked",
      "d": "Liking",
      "correct": "a"
    },
    {
      "question": "——– upstairs.",
      "a": "Go",
      "b": "Goes",
      "c": "Going",
      "d": "Gone",
      "correct": "a"
    },
    {
      "question": "Don’t ——- the animals in the zoo.",
      "a": "Feed",
      "b": "Feeds",
      "c": "Feeding",
      "d": "Fed",
      "correct": "a"
    },
    {
      "question": "Don’t ——- in this lake.",
      "a": "Swim",
      "b": "Swimming",
      "c": "Swam",
      "d": "Swims",
      "correct": "a"
    },
    {
      "question": "——– the answers quickly.",
      "a": "Write",
      "b": "Writes",
      "c": "Writing",
      "d": "Wrote",
      "correct": "a"
    },
    {
      "question": "Don’t ——- football in the yard.",
      "a": "Play",
      "b": "Plays",
      "c": "Playing",
      "d": "Played",
      "correct": "a"
    },
    {
      "question": "I don’t ———- your tee-shirt, it’s too casual.",
      "a": "Like",
      "b": "Likes",
      "c": "Liked",
      "d": "Liking",
      "correct": "a"
    }
  
];

// DOM Elements
const loginForm = document.getElementById('loginForm');
const quizSection = document.getElementById('quizSection');
const marksheet = document.getElementById('marksheet');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const studentName = document.getElementById('studentName');
const studentEmail = document.getElementById('studentEmail');
const learnerCode = document.getElementById('learnerCode');
const timerElement = document.getElementById('timer');
const resetButton = document.getElementById('resetButton');
const marksheetName = document.getElementById('marksheetName');
const marksheetEmail = document.getElementById('marksheetEmail');
const marksheetCode = document.getElementById('marksheetCode');
const marksheetScore = document.getElementById('marksheetScore');
const studentTableBody = document.getElementById('studentTableBody');

let currentQuiz = 0;
let score = 0;
let shuffledQuizData = [];
let timeLeft = 20;
let timerInterval;

// Shuffle function
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Handle Login and Store Data
function handleLogin() {
  const name = studentName.value.trim();
  const email = studentEmail.value.trim();
  const learnerCodeValue = learnerCode.value.trim();

  if (name && email && learnerCodeValue) {
    // Store user data in sessionStorage
    sessionStorage.setItem('studentName', name);
    sessionStorage.setItem('studentEmail', email);
    sessionStorage.setItem('learnerCode', learnerCodeValue);

    // Hide login and show quiz section
    loginForm.style.display = 'none';
    quizSection.style.display = 'block';

    // Set marksheet fields
    marksheetName.value = name;
    marksheetEmail.value = email;
    marksheetCode.value = learnerCodeValue;

    // Shuffle quiz data and load quiz
    shuffledQuizData = shuffle([...quizData]);
    loadQuiz();
  } else {
    alert("कृपया सभी फ़ील्ड्स भरें।");
  }
}

// Load Quiz Data
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = shuffledQuizData[currentQuiz];
  questionEl.innerText = `Q${currentQuiz + 1}: ${currentQuizData.question}`;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  timeLeft = 20;
  updateTimer();
  startTimer();
}

// Deselect Answers
function deselectAnswers() {
  answerEls.forEach(answerEl => (answerEl.checked = false));
}

// Get Selected Answer
function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Start Timer
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      currentQuiz++;
      if (currentQuiz < shuffledQuizData.length) {
        loadQuiz();
      } else {
        showMarksheet();
      }
    }
  }, 1000);
}

// Update Timer
function updateTimer() {
  timerElement.innerText = `Time: ${timeLeft}s`;
  if (timeLeft <= 5) {
    timerElement.classList.add('warning');
  } else {
    timerElement.classList.remove('warning');
  }
}

// Submit Answer
submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === shuffledQuizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < shuffledQuizData.length) {
      loadQuiz();
    } else {
      showMarksheet();
    }
  } else {
    alert("कृपया उत्तर चुनें।");
  }
});

// Show Marksheet
function showMarksheet() {
  clearInterval(timerInterval);
  quizSection.style.display = 'none';
  marksheet.style.display = 'block';

  // Set score in marksheet
  marksheetScore.value = `आपने ${score}/${shuffledQuizData.length} प्रश्न सही उत्तर दिए।`;

  // Add record to student records table
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${sessionStorage.getItem('studentName')}</td>
    <td>${sessionStorage.getItem('studentEmail')}</td>
    <td>${sessionStorage.getItem('learnerCode')}</td>
    <td>${score}</td>
  `;
  studentTableBody.appendChild(row);
}

// Reset Quiz
function resetQuiz() {
  loginForm.style.display = 'block';
  marksheet.style.display = 'none';
  studentName.value = '';
  studentEmail.value = '';
  learnerCode.value = '';
  score = 0;
  currentQuiz = 0;
  clearInterval(timerInterval);
  timerElement.innerText = 'Time: 20s';
}

// Event Listeners
document.getElementById('loginButton').addEventListener('click', handleLogin);
resetButton.addEventListener('click', resetQuiz);
document.addEventListener('click', (event) => catchSmilClick(event));

function catchSmilClick(event) {
	const elementId = event.target.id
	switch(elementId) {
		case 'smil__button-right':
			goNetxQuestion();
			updateQuestion();
			updateProgressBar();
			break;
		case 'smil__button-wrong':
			goNetxQuestion();
			updateQuestion();
			updateProgressBar();
			break;
		case 'smil__button-unknown':
			goNetxQuestion();
			updateQuestion();
			updateProgressBar();
			break;
		case 'smil__nav-back-button':
			goPreviewsQuestion();
			updateQuestion();
			updateProgressBar();
			break;
	}
}

let questionNumber = 0;
let questions = readQuestionList();
let smillQuestion = document.getElementById('smil__question');
let smillBarFill = document.getElementById('smil__nav-progress-bar-fill');
let smillBarText = document.getElementById('smil__nav-progress-bar-text');
let smillTime = document.getElementById('smil__nav-time');
let startTime = 0;

function readQuestionList() {
	let questionsList = ['Я всегда говорю только правду.',
	                 'Мои дела идут хуже, чем у других.',
	                 'Я не стану рассказывать о себе всё даже близкому человеку.',
	                 'Я вполне здоровый человек.',
	                 'У меня часто бывает грустное настроение.']
	return questionsList;
}

function updateQuestion() {
	let question = questions[questionNumber];
	smillQuestion.innerHTML = question;
}

function goNetxQuestion() {
	if(questionNumber < questions.length - 1) {
		questionNumber++;
	}
}

function goPreviewsQuestion() {
	if(questionNumber > 0) {
		questionNumber--;
	}
}

function updateProgressBar() {
	smillBarText.innerHTML = 'Вопрос ' + (questionNumber + 1) + ' из ' + questions.length;
	let widthBar = ((questionNumber + 1) * 100) /  questions.length;
	console.log(widthBar);
	smillBarFill.style.width = widthBar + '%';
}

function getStartTime() {
	startTime = new Date();
}

function updateTime() {  
	setInterval(() => {
	let currentTime = new Date(); 
	let resultTime = currentTime - startTime;
	let seconds = Math.round(resultTime/1000);
	let minutes = seconds/60;
	let hours = minutes/60;
	let time;
	if (hours > 1) {
		time = hours + ':' + minutes + ':' + seconds;
	} else if(minutes > 1) {
		time = minutes + ':' + seconds;
	} else if(seconds > 9) {
		time = '00:' + seconds;
	} else {
		time = '00:0' + seconds; 
	}
  smillTime.innerHTML = time;}, 1000);
}
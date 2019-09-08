let questionNumber = 0;
let questions = readQuestionList();
let smillQuestion = document.getElementById('smil__question');
let smillBarFill = document.getElementById('smil__nav-progress-bar-fill');
let smillBarText = document.getElementById('smill__question-count');
let smillTime = document.getElementById('smil__nav-time');
let smillWrapper = document.getElementById('test__smil-wrapper');
let smillIntro = document.getElementById('test__smil-intro');
let smillNameField = document.getElementById('smil-intro__start-name');
let startTime = 0;
let smillUser;

document.addEventListener('click', (event) => catchSmilClick(event));

function catchSmilClick(event) {
	const elementId = event.target.id
	switch(elementId) {
		case 'smil-intro__start-button':
			startTest();
			break;
		case 'smil__nav-back-button':
			goPreviewsQuestion();
			updateQuestion();
			updateProgressBar();
			break;
		case 'smil__button-right':
			addAnswer('yes', questionNumber);
			goNetxQuestion();
			updateQuestion();
			updateProgressBar();
			break;
		case 'smil__button-wrong':
			addAnswer('no', questionNumber);
			goNetxQuestion();
			updateQuestion();
			updateProgressBar();
			break;
		case 'smil__button-unknown':
			addAnswer('unknow', questionNumber);
			goNetxQuestion();
			updateQuestion();
			updateProgressBar();
			break;
	}
}

function startTest() {
	smillIntro.style.display = 'none';
	smillWrapper.style.display = 'flex';
	smillUser = new User(smillNameField.value);
	updateQuestion();
  updateProgressBar();
  getStartTime();
  updateTime();
}

function readQuestionList() {
	let questionsList = ['I always tell only the truth.',
	                 'My affairs are worse than others.',
	                 'I will not begin to tell everything about myself to even a loved one.',
	                 'I am a completely healthy person.',
	                 'I often have a sad mood.',
	                 'I do not care if the people around me like me.',
	                 'I strive to succeed in life.',
	                 'My character is too soft.',
	                 'I strive to defend my opinion at all costs.',
	                 'Often I worry about nothing.']
	return questionsList;
}

function addAnswer(answer, number) {
	smillUser.addAnswer(answer, number);
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
	smillBarText.innerHTML = 'Question ' + (questionNumber + 1) + ' from ' + questions.length;
	let widthBar = ((questionNumber + 1) * 100) /  questions.length;
	console.log(widthBar);
	smillBarFill.style.width = widthBar + '%';
}

function getStartTime() {
	startTime = new Date();
}

function updateTime() { 
	let secondsCount = 0;
	let minutesCount = 0;
	let minutes = 0;
	let hours = 0; 
	setInterval(() => {
	let currentTime = new Date(); 
	let resultTime = currentTime - startTime;
	let seconds = Math.round(resultTime/1000);
	if (seconds == 60) {
		minutes++;
		secondsCount++;
	}
	if (minutes == 60) {
		hours++;
		minutesCount++;
	}
	let calculateSeconds = seconds - (secondsCount * 60);
	let calculatedMinutes = minutes - (minutesCount * 60);
	let time;
	if (hours > 0) {
		time = hours + ':' + calculatedMinutes + ':' + calculateSeconds;
	} else if(calculatedMinutes > 0 && calculateSeconds > 9) {
		time = calculatedMinutes + ':' + calculateSeconds;
	} else if (calculatedMinutes > 0) {
		time = calculatedMinutes + ':0' + calculateSeconds;
	} else if(calculateSeconds > 9) {
		time = '00:' + calculateSeconds;
	} else {
		time = '00:0' + calculateSeconds; 
	}
  smillTime.innerHTML = time;}, 1000);
}
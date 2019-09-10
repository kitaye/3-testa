let questionNumber = 0;
let questions = readQuestionList();
let smillQuestion = document.getElementById('smil__question');
let smillBarFill = document.getElementById('smil__nav-progress-bar-fill');
let smillBarText = document.getElementById('smill__question-count');
let smillTime = document.getElementById('smil__nav-time');
let smillWrapper = document.getElementById('test__smil-wrapper');
let smillIntro = document.getElementById('test__smil-intro');
let smillResult = document.getElementById('test__smil-result');
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
			if((questionNumber + 1) == questions.length){
				endTest();
				break;
			}
			addAnswer('yes', questionNumber);
			goNetxQuestion();
			updateQuestion();
			updateProgressBar();
			break;
		case 'smil__button-wrong':
			if((questionNumber + 1) == questions.length){
				endTest();
				break;
			}
			addAnswer('no', questionNumber);
			goNetxQuestion();
			updateQuestion();
			updateProgressBar();
			break;
		case 'smil__button-unknown':
			if((questionNumber + 1) == questions.length){
				endTest();
				break;
			}
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

function endTest() {
	formResult();
	smillWrapper.style.display = 'none';
	smillResult.style.display = 'flex';
}

function formResult() {
	let smillResultHeader = document.getElementById('smil-result__header');
	let resultLie = document.getElementById('smil-result__lie');
	let resultReability = document.getElementById('smil-result__reliability');
	let resultCorrection = document.getElementById('smil-result__correction');
	let resultOvercontrol = document.getElementById('smil-result__overcontrol');
	let resultPessimism = document.getElementById('smil-result__pessimism');
	let resultLability = document.getElementById('smil-result__lability');
	let resultImpulsivness = document.getElementById('smil-result__impulsiveness');
	let resultFemininity = document.getElementById('smil-result__femininity');
	let resultRigidity = document.getElementById('smil-result__rigidity');
	let resultAnxiety = document.getElementById('smil-result__anxiety');
	let resultIndividualism = document.getElementById('smil-result__individualism');
	let resultOptimistic = document.getElementById('smil-result__optimistic');
	let resultIntroversion = document.getElementById('smil-result__introversion');

	smillResultHeader.innerHTML = 'MMPI result ' + smillUser.getName();
	resultLie.innerHTML = 'Lie - 4 (answers are given insincerely)';
	resultReability.innerHTML = 'Reability - 4 (desire to emphasize the severity of his condition)';
	resultCorrection.innerHTML = 'Correction - 3 (reliable result)';
	resultOvercontrol.innerHTML = 'Overcontrol - 4 (hypochondria)';
	resultPessimism.innerHTML = 'Pessimism - 2 (lack of deviations from the norm)';
	resultLability.innerHTML = 'Emotional lability - 3 (emotional and vegetative instability, demonstrativeness)';
	resultImpulsivness.innerHTML = 'Impulsivness - 4 (impulsivity, excitable traits)';
	resultFemininity.innerHTML = 'Femininity - 4 (difficulties in interpersonal communication and sexual adaptation)';
	resultRigidity.innerHTML = 'Rigidity - 4 (suspicion and conflict)';
	resultAnxiety.innerHTML = 'Anxiety - 4 (anxiety state)';
	resultIndividualism.innerHTML = 'Individualism - 4 (unusual, schizotypic features)';
	resultOptimistic.innerHTML = 'Optimistic - 4 (emotional immaturity, lack of criticism of one’s condition or hypomania)';
	resultIntroversion.innerHTML = 'Introversion - 3 (isolation)';
}

function readQuestionList() {
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
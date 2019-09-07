document.addEventListener('click', (event) => catchSmilClick(event));

function catchSmilClick(event) {
	const elementId = event.target.id
	switch(elementId) {
		case 'smil__button-right':
			goNetxQuestion();
			updateQuestion();
			break;
		case 'smil__button-wrong':
			goNetxQuestion();
			updateQuestion();
			break;
		case 'smil__button-unknown':
			goNetxQuestion();
			updateQuestion();
			break;
		case 'smil__nav-back-button':
			goPreviewsQuestion();
			updateQuestion();
			break;
	}
}

let questionNumber = 0;
let questions = readQuestionList();
let smil__question = document.getElementById('smil__question');

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
	smil__question.innerHTML = question;
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
	
}
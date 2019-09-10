let questionNumberMbti = 0;
let smillWrapper = document.getElementById('test__mbti-wrapper');
let smillIntro = document.getElementById('test__mbti-intro');

document.addEventListener('click', (event) => catchMbtiClick(event));

function catchMbtiClick(event) {
	const elementId = event.target.id;
	switch(elementId) {
		case 'mbti-intro__start-button':
			startMbtiTest();
			break;
	}
}

function startMbtiTest() {
	smillIntro.style.display = 'none';
	smillWrapper.style.display = 'flex';
}
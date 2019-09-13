let questionNumberMbti = 0;
let mbtiWrapper = document.getElementById('test__mbti-wrapper');
let mbtiIntro = document.getElementById('test__mbti-intro');

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
	mbtiIntro.style.display = 'none';
	mbtiWrapper.style.display = 'flex';
}
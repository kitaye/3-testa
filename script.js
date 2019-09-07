document.addEventListener('click', (event) => catchMainMenuClick(event));

function catchMainMenuClick(event) {
    const elementId = event.target.id;
    switch(elementId) {
        case 'iq':
            hideMain();
            showTest(document.querySelector('.tests__iq'));
            break;
        case 'ia':
            hideMain();
            showTest(document.querySelector('.tests__ia'));
            break;
        case 'mbti':
            hideMain();
            showTest(document.querySelector('.tests__mbti'));
            break;
        case 'smil':
            hideMain();
            showTest(document.querySelector('.tests__smil'));
            updateQuestion();
            break;
    }
}

function showTest(test){
    test.style.display = 'flex';
}

function hideMain() {
    document.querySelector('main').style.display = 'none';
}
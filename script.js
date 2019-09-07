document.addEventListener('click', (event) => catchClick(event));

function catchClick(event) {
    const elementId = event.target.id;
    console.log(event.target);
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
            break;
    }
}

function showTest(test){
    test.style.display = 'flex';
}

function hideMain() {
    document.querySelector('main').style.display = 'none';
}
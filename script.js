document.addEventListener('click', (event) => catchClick(event));

function catchClick(event) {
    const clickedElement = event.target;
    hideMain();
    switch(clickedElement.innerHTML.trim()) {
        case 'TEST IQ':
            showTest(document.querySelector('.tests__iq'));
            break;
        case 'TEST PAEI (Izchak Adizes)':
            showTest(document.querySelector('.tests__ia'));
            break;
        case 'TEST MBTI':
            showTest(document.querySelector('.tests__mbti'));
            break;
        case 'TEST MMPI(СМИЛ)':
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
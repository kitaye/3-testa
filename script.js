document.addEventListener('click', (event) => catchClick(event));



function catchClick(event) {
    const clickedElement = event.target;
    hideMain();
    switch(clickedElement.innerHTML.trim()) {
        case 'TEST IQ':
            showTest(document.querySelector('.iq_test'));
            break;
        case 'TEST PAEI (Izchak Adizes)':
            showTest(document.querySelector('.ia_test'));
            break;
        case 'TEST MBTI':
            showTest(document.querySelector('.mbti_test'));
            break;
        case 'TEST MMPI(СМИЛ)':
            showTest(document.querySelector('.smil_test'));
            break;
    }

}

function showTest(test){
    test.style.display = "block";
}

function hideMain() {
    let el = document.querySelector('main');

    if(el.style.display !== 'none') {
        el.style.display = 'none';
    }
    else {
        el.style.display = 'block';
    }
}


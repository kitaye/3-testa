//Buttons Tests with description in main block
const btnIQ = document.querySelector(".main.container.iq");
const btnIA = document.querySelector(".main.container.ia");
const btnMBTI = document.querySelector(".main.container.mbti");
const btnSMIL= document.querySelector(".main.container.smil");


//Main block
const main = document.querySelector("main");

//Tests section
const testBodyIQ = document.querySelector(".iq_test");
const testBodyIA = document.querySelector(".ia_test");
const testBodyMBTI = document.querySelector(".test__mbti");
const testBodySMIL = document.querySelector(".test__smil");

console.log(testBodyMBTI);
console.log(testBodySMIL);

showTest(btnIQ, main, testBodyIQ);
showTest(btnIA, main, testBodyIA);
showTest(btnMBTI, main, testBodyMBTI);
showTest(btnSMIL, main, testBodySMIL);


function showTest(button, elementToHide, elementToShow) {

    button.addEventListener("click", function() {
        elementToHide.style.display = "none";
        elementToShow.style.display = "block";
    });
}

//IQ TEST

const buttonIQ = document.querySelector('.btn_iq');
const IqIntro = document.querySelector('.iq_intro');
const IqQuestion1 = document.querySelector('.iq_q1');
const IqQuestion2 = document.querySelector('.iq_q2');

const radioButton1 = document.querySelector('#answer0');
const radioButton2 = document.querySelector('#answer1');


showTest(buttonIQ, IqIntro, IqQuestion1);
showTest(radioButton1, IqQuestion1, IqQuestion2);
showTest(radioButton2, IqQuestion1, IqQuestion2);

//SMIL TEST



// document.addEventListener('click', (event) => catchClick(event));
//
//
//
// function catchClick(event) {
//     const clickedElement = event.target;
//     console.log(clickedElement);
//     hideMain();
//     switch(clickedElement.innerHTML.trim()) {
//         case 'TEST IQ':
//             showTest(document.querySelector(' .iq_test'));
//             break;
//         case 'TEST PAEI (Izchak Adizes)':
//             showTest(document.querySelector('.ia_test'));
//             break;
//         case 'TEST MBTI':
//             showTest(document.querySelector('.mbti_test'));
//             break;
//         case 'TEST MMPI(СМИЛ)':
//             showTest(document.querySelector('.smil_test'));
//             break;
//     }
//
// }
//
//
// function showTest(test){
//     test.style.display = "block";
// }
//
// function hideMain() {
//     let el = document.querySelector('main');
//
//     // if(el.style.display !== 'none') {
//         el.style.display = 'none';
//     // }
//     // else {
//     //     el.style.display = 'block';
//     // }
// }


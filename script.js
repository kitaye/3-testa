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
const testBodyMBTI = document.querySelector(".mbti_test");
const testBodySMIL = document.querySelector(".smil_test");

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







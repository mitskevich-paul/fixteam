let width = window.innerWidth;
let height = window.innerHeight;
let headerText = document.querySelector(".wr-main_header");
let phone = document.querySelector(".wr-main_phone");
setInterval(() => {
    if (phone.classList.contains("phoneConnect")) {
        phone.classList.remove("phoneConnect")
        phone.classList.add("phoneScreen")
        headerText.innerText = "разбит экран?";
    } else if (phone.classList.contains("phoneScreen")) {
        phone.classList.remove("phoneScreen")
        phone.classList.add("phoneBattery")
        headerText.innerText = "быстро разряжается?";
    } else if (phone.classList.contains("phoneBattery")) {
        phone.classList.remove("phoneBattery")
        phone.classList.add("phoneConnect")
        headerText.innerText = "теряет связь?";
    }
}, 2000)

let callBackButton = document.querySelector(".wr-callBackPhoneButton");
let callBackPhone = document.querySelector(".wr-callBackPhone");
callBackButton.addEventListener("click", () => {
    let fucking = callBackButton.firstElementChild;
    fucking.parentNode.removeChild(fucking);

    if (width > 900) {
        callBackPhone.style.cssText = `
        z-index: 666;
        width: 800px;
        height: 320px;
        border-radius: 30px;
        `
        callBackButton.style.cssText = `
        z-index: 665;
        width: 750px;
        height: 315px;
        border-radius: 35px;
        overflow: hidden;
        `
    } else if (width < 900) {
        callBackPhone.style.cssText = `
        z-index: 666;
        height: ${width * 1.3}px;
        width: ${width * 0.8}px;
        border-radius: 30px;
        `
        callBackButton.style.cssText = `
        z-index: 665;
        height: ${width * 1.2}px;
        width: ${width * 0.8}px;
        border-radius: 35px;
        overflow: hidden;
        `
    }

    setTimeout(() => {
        let form = document.createElement('div');
        if (width > 900) {
            form.style.cssText = `
            z-index: 667;
            width: 750px;
            height: 315px;
            border: solid 5px black;
            border-radius: 35px;
            box-sizing: border-box;
            background-color: white;
            transition: 0.5s;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            `
        }  else if (width < 900) {
            form.style.cssText = `
            z-index: 667;
            height: ${width * 1.2}px;
            width: ${width * 0.8}px;
            border: solid 5px black;
            border-radius: 35px;
            box-sizing: border-box;
            background-color: white;
            transition: 0.5s;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            `
        }
        callBackPhone.appendChild(form);
        callBackButton.parentNode.removeChild(callBackButton);

        let firstDiv = document.createElement('div');
        let firstP = document.createElement('p');
        firstP.innerText = "Ваш номер:";
        firstP.classList.add("callBackPhoneText");
        firstDiv.appendChild(firstP);
        form.appendChild(firstDiv);

        let secondDiv = document.createElement('div');
        let secondDivSelect = document.createElement('select');
        let secondDivInput = document.createElement('input');
        form.appendChild(secondDiv);
        secondDivSelect.classList.add('callBackPhoneInput');
        secondDivInput.classList.add('callBackPhoneInput');
        secondDivInput.placeholder = "1112233";
        secondDiv.appendChild(secondDivSelect);
        secondDiv.appendChild(secondDivInput);

        let option25 = document.createElement('option');
        option25.innerText = "+375(25)";
        let option29 = document.createElement('option');
        option29.innerText = "+375(29)";
        let option33 = document.createElement('option');
        option33.innerText = "+375(33)";
        let option44 = document.createElement('option');
        option44.innerText = "+375(44)";
        secondDivSelect.appendChild(option25);
        secondDivSelect.appendChild(option29);
        secondDivSelect.appendChild(option33);
        secondDivSelect.appendChild(option44);
        

        let thirdDiv = document.createElement('div');
        let thirdP = document.createElement('p');
        thirdP.innerText = "Вас зовут:"
        thirdP.classList.add("callBackPhoneText");
        thirdDiv.appendChild(thirdP);
        form.appendChild(thirdDiv);

        let fourthDiv = document.createElement('div');
        let fourthDivInput = document.createElement('input');
        let fourthDivInputTwo = document.createElement('input');
        fourthDivInput.classList.add('callBackPhoneInput');
        fourthDivInputTwo.classList.add('callBackPhoneInput'); 
        form.appendChild(fourthDiv);
        fourthDivInput.placeholder = "Имя";
        fourthDivInputTwo.placeholder = "Фамилия";
        fourthDiv.appendChild(fourthDivInput);
        fourthDiv.appendChild(fourthDivInputTwo);

        let submit = document.createElement('input');
        submit.classList.add('callBackPhoneInput');
        submit.value = "Отправить";
        submit.type = "submit";
        form.appendChild(submit);

        submit.addEventListener("click", () => {
            if (secondDivInput.value === "" || isNaN(secondDivInput.value) || secondDivInput.value.length < 7 || secondDivInput.value.length > 7) {
                secondDivInput.classList.add('invalid');
            } else {
                secondDivInput.classList.remove('invalid');
            }
            if (fourthDivInput.value === "" || isFinite(fourthDivInput.value)) {
                fourthDivInput.classList.add('invalid');
            } else {
                fourthDivInput.classList.remove('invalid');
            }
            if (fourthDivInputTwo.value === "" || isFinite(fourthDivInputTwo.value)) {
                fourthDivInputTwo.classList.add('invalid');
            } else {
                fourthDivInputTwo.classList.remove('invalid');
            }
            if (secondDivInput.classList.contains('invalid') || fourthDivInput.classList.contains('invalid') || fourthDivInputTwo.classList.contains('invalid')) {
                submit.classList.add('invalid');
            } else {
                submit.classList.remove('invalid');
                let formAction = document.createElement('form');
                formAction.action = "./send.php";
                formAction.method = "post";
                formAction.name = "form"
                let yourPhone = document.createElement('input');
                yourPhone.disabled = true;
                yourPhone.name = "user_phone"
                yourPhone.classList.add('callBackPhoneInput');
                yourPhone.value = secondDivSelect.value + secondDivInput.value;

                let submitThisShit = document.createElement('input');
                submitThisShit.type = "submit";
                submitThisShit.value = "отправить";
                submitThisShit.name = "submit";
                submitThisShit.classList = "callBackPhoneInput";

                let yourName = document.createElement('input');
                yourName.disabled = true;
                yourName.name = "user_name";
                yourName.classList.add('callBackPhoneInput');
                yourName.value = fourthDivInputTwo.value + " " + fourthDivInput.value;

                form.parentNode.removeChild(form);
                let formSended = document.createElement('div');
                let formSendedText = document.createElement('p');
                formSendedText.innerText = 'Готово!'
                formSendedText.style.cssText = `
                font-size: 40px;
                `
                if (width > 900) {
                    formSended.style.cssText = `
                    z-index: 667;
                    width: 750px;
                    height: 315px;
                    border: solid 5px black;
                    border-radius: 35px;
                    box-sizing: border-box;
                    background-color: greenyellow;
                    transition: 0.5s;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-direction: column;
                    `
                } else if (width < 900) {
                    formSended.style.cssText = `
                    z-index: 667;
                    height: ${width * 1.2}px;
                    width: ${width * 0.8}px;
                    border: solid 5px black;
                    border-radius: 35px;
                    box-sizing: border-box;
                    background-color: greenyellow;
                    transition: 0.5s;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-direction: column;
                    `
                }
                callBackPhone.appendChild(formSended);
                formSended.appendChild(formSendedText);
                formSended.appendChild(formAction);
                formAction.appendChild(yourPhone);
                formAction.appendChild(yourName);
                formAction.appendChild(submitThisShit);

                // submit.formAction = ''
            }
        })
    }, 500)
})


let buttton = document.querySelector(".control");
let menu = document.querySelector(".menuMainClass");
buttton.addEventListener("click", () => {
    if (menu.classList.contains("menubottom")) {
        menu.classList.remove("menubottom");
        menu.classList.add("menutop");
        buttton.style.transform = "rotate(180deg)";
    } else if (menu.classList.contains("menutop")) {
        menu.classList.remove("menutop");
        menu.classList.add("menubottom");
        buttton.style.transform = "rotate(0deg)";
    }
});


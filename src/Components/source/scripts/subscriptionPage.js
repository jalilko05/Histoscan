
let cardCVC = document.querySelector('#card-cvc');
cardCVC.oninput = function(){
  this.value = this.value.substr(0, 3);
}

let cardMounth = document.querySelector('#card-mounth');
cardMounth.oninput = function(){
  this.value = this.value.substr(0, 6);
}

// card-input-number

let input = document.querySelector("#card-number-primary"),
    numbers = /[0-9]/,
    regExp = /[0-9]{4}/

input.addEventListener("input", (ev) => {
    if (ev.inputType === "insertText" && !numbers.test(ev.data) || input.value.length > 19) {
        input.value = input.value.slice(0, input.value.length - 1)
        return
    }

    let value = input.value
    if (ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4))) {
        input.value = input.value.slice(0, input.value.length - 1)
        return
    }

    if (regExp.test(value.slice(-4)) && value.length < 19) {
        input.value += " "
    }
})

// card-mounth

let inputMounth = document.querySelector("#card-mounth"),
    numbersMounth = /[0-9]/,
    regExpMounth = /[0-9]{2}/

    inputMounth.addEventListener("input", (ev) => {
    if (ev.inputType === "insertText" && !numbersMounth.test(ev.data) || inputMounth.value.length > 5) {
        inputMounth.value = inputMounth.value.slice(0, inputMounth.value.length - 1)
        return
    }

    let value = inputMounth.value
    if (ev.inputType === "deleteContentBackward" && regExpMounth.test(value.slice(-6))) {
        inputMounth.value = inputMounth.value.slice(0, inputMounth.value.length - 1)
        return
    }

    if (regExpMounth.test(value.slice(-2)) && value.length < 5) {
        inputMounth.value += "/"
    }
})

// card-cvc

let inputCVC = document.querySelector("#card-cvc"),
    numbersCVC = /[0-9]/,
    regExpCVC = /[0-9]{2}/

    inputCVC.addEventListener("input", (ev) => {
    if (ev.inputType === "insertText" && !numbersCVC.test(ev.data) || inputCVC.value.length > 3) {
        inputCVC.value = inputCVC.value.slice(0, inputCVC.value.length - 1)
        return
    }

    let value = inputCVC.value
    if (ev.inputType === "deleteContentBackward" && regExpCVC.test(value.slice(-4))) {
        inputCVC.value = inputCVC.value.slice(0, inputCVC.value.length - 1)
        return
    }

    if (regExpCVC.test(value.slice(-2)) && value.length < 3) {
        inputCVC.value += ""
    }
})
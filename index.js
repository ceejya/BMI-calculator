let inputElement01 = document.getElementById('inputElement1')
let inputElement02 = document.getElementById('inputElement2')
let score = document.getElementById('bmiScore')

function bmiCheck() {
    let inputValue = inputElement01.value.trim()
    let inputValue1 = inputElement02.value.trim()

    let calculatedBmi = bmi(+inputValue, +inputValue1)

    if (inputValue == '' || inputValue1 == '') {
        alert('Please fill out input!');

    }
    else if (calculatedBmi >= 30) {
        score.innerHTML = `your BMI is ${Math.ceil(calculatedBmi)}m2, which falls within the obese range`


    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
        score.innerHTML = `your BMI is ${Math.ceil(calculatedBmi)}m2, which falls within the overweight range`

    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        score.innerHTML = `your BMI is ${Math.ceil(calculatedBmi)}m2, which falls within the Normalweight range`

    }
    else {
        score.innerHTML = `your BMI is ${Math.ceil(calculatedBmi)}m2, which falls within the underweight range`

    }
    inputElement01.value = ''
    inputElement02.value = ''

}

function bmi(inputValue, inputValue1) {
    return inputValue / (inputValue1 * inputValue1)

}

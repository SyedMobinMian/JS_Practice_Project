
// ###################################################################
// @@@@@@@@@@@@@@@@@@@@@@@@ 2. BMI Calculator @@@@@@@@@@@@@@@@@@@@@@@@
// ###################################################################

const form = document.querySelector('.bmi-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#bmi-result');
    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please Enter the Valid height ${height}`;
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please Enter the Valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Selector ko safe aur direct rakha hai
        const listItems = document.querySelectorAll('#weight-guide ul li');
        let category = '';

        if (listItems.length > 0) {
            if (bmi < 18.5) {
                category = listItems[0].innerText.split(':')[0];
            } else if (bmi <= 24.9) {
                category = listItems[1].innerText.split(':')[0];
            } else if (bmi <= 29.9) {
                category = listItems[2].innerText.split(':')[0];
            } else {
                category = listItems[3].innerText.split(':')[0];
            }
        }
        // Direct result render
        results.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
    }
});


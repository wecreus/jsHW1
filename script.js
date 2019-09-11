function checkSingleInput() {
    let value = this.value;
    if(value.length > 3){
        if(!this.nextSibling.classList.contains('normalCheckMark')){
            this.nextSibling.className = 'normalCheckMark';
        }
    } else {
        if(this.nextSibling.classList.contains('normalCheckMark')){
            this.nextSibling.classList.remove('normalCheckMark');
        }
    }
}

function checkEmail() {
    let valueIsBiggerThanThree = this.value.length > 3;
    let hasSpecialChar = false;
    for(let i = 0; i < this.value.length; i++){
        if(this.value[i] === "@"){hasSpecialChar = true;}
    }
    if(valueIsBiggerThanThree === true && hasSpecialChar === true){
        if(!this.nextSibling.classList.contains('normalCheckMark')){
            this.nextSibling.className = 'normalCheckMark';
        }
    } else {
        if(this.nextSibling.classList.contains('normalCheckMark')){
            this.nextSibling.classList.remove('normalCheckMark');
        }
    }
}

function checkMultipleInputs(divElementFromArray) {
    function checkIfArrayHasFalse(array) {
        let result = false;
        array.forEach(function(element){
            if(element === false) {
                result = true;
            }
        });
        return result;
    }

    let arrayOfInputs = divElementFromArray.getElementsByTagName('input');
    let arrayOfValidInputs = [];
    for(let i = 0; i < arrayOfInputs.length; i++){
        arrayOfValidInputs.push(false);
    }

    function changeImage(value){
        let storingImg = arrayOfInputs[arrayOfInputs.length - 1].nextSibling;
        if(value === false){
            if(!storingImg.classList.contains('normalCheckMark')){
                storingImg.className = 'normalCheckMark';
            }
        } else {
            if(storingImg.classList.contains('normalCheckMark')){
                storingImg.classList.remove('normalCheckMark');
            }
        }
    }

    for(let i = 0; i < arrayOfInputs.length; i++){
        arrayOfInputs[i].addEventListener('input', function(){
            arrayOfValidInputs[i] = this.value.length > 3;
            changeImage(checkIfArrayHasFalse(arrayOfValidInputs));
            }, false);
    }
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.getElementById('rank').addEventListener('input', checkSingleInput, false);
        document.getElementById('name').addEventListener('input', checkSingleInput, false);
        document.getElementById('surname').addEventListener('input', checkSingleInput, false);
        document.getElementById('street').addEventListener('input', checkSingleInput, false);

        // working with divs that have a couple of inputs
        let arrayOfDivs = document.getElementsByClassName('coupleInputs');
        for(let i = 0; i < arrayOfDivs.length; i++){
            checkMultipleInputs(arrayOfDivs[i]);
        }

        document.getElementById('bd').addEventListener('input', checkSingleInput, false);
        document.getElementById('email2').addEventListener('input', checkEmail, false);


    }
};



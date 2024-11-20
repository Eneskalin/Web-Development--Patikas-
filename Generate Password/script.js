const getrandomLower=()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

const getrandomUpper=()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
const getrandomNumber=()=>{
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

const getrandomSymbol =()=>{
    const symbols='!&*#%$_-'
    return symbols[Math.floor(Math.random()*symbols.length)]
}

const randomFunctions ={getrandomLower,getrandomNumber,getrandomSymbol,getrandomUpper}

const generatePassword = () => {
    const length = parseInt(document.getElementById('passwordLength').value) || 16;
    let generatedPassword = '';
    for (let x = 0; x < length; x++) {
        generatedPassword += Object.values(randomFunctions)[Math.floor(Math.random() * 4)]();
    }
    return generatedPassword;  
}


const spanResult=document.getElementById('result');
const generateButton=document.getElementById('generate');
const clipboard=document.getElementById('clipboard');

generateButton.addEventListener('click',()=>{
    spanResult.innerText=generatePassword();
})

clipboard.addEventListener('click', () => {
    if (spanResult.innerText !== '') {
        navigator.clipboard.writeText(spanResult.innerText)
            .then(() => {
                alert('Password copied to clipboard!');
            })
            .catch(err => {
                alert('Failed to copy: ' + err);
            });
    }
});

console.log(generatePassword());
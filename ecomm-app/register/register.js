// get form element
const form=document.querySelector('.form')

//get other elements
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const password2=document.querySelector('#password2')

//functions
function getFieldName(input){
    return input.id;
}

function showSuccess(input){
    let formControl=input.parentElement;
    formControl.className='form-control success'
}

function showError(input,message){
    let formControl=input.parentElement;
    formControl.className='form-control error'
    const small = formControl.querySelector('small');
    small.textContent=message;
}


function checkRequired(inputArr){
    inputArr.forEach(function(input){
        // check input is empty
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}

function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`Min Length of ${getFieldName(input)} is violated`)
    }
    else if (input.value.length>max){
        showError(input,`Max Length of ${getFieldName(input)} is violated`) 
    }
    else{
        showSuccess(input)
    }
}

function checkComparePasswords(password, password2){

    if(password.value!==password2.value){
        showError(password2,`Passwords do not match`)
    }
    else{
        showSuccess(password2)
    }
}




// add event listener
form.addEventListener('submit',function(event){
    // stop the page reload
    event.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username,4,6);
    checkComparePasswords(password,password2);

})


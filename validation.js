document.addEventListener('DOMContentLoaded',()=>{
    const emailInput=document.getElementById('email');
    const passwordInput=document.getElementById('password');
    const confirmPasswordInput=document.getElementById('confirm-password');

    const email_inputBox=document.getElementById('email-inputBox');
    const password_inputBox=document.getElementById('password-inputBox');
    const confirmPassword_InputBox=document.getElementById('confirm-password-inputBox');

    emailInput.addEventListener("keyup",(event)=>{
        validateEmail(event.target.value);
    })

    passwordInput.addEventListener("keyup",(event)=>{
        validatePassword(event.target.value);
    })

    confirmPasswordInput.addEventListener("keyup",(event)=>{
        validateConfirmPassword(event.target.value);
    })

    const validateEmail=(value)=>{
        const emailattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailPattern.test(value)){
            email_inputBox.style.border="1px solid rgba(0, 0, 0, 0.3)"
        }
        else{
            email_inputBox.style.border="1.5px solid red"
        }
    }

    const validatePassword=(value)=>{
        const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@@#\$%\^&\*])(?=.{8,})/;
        if(passwordPattern.test(value)){
            password_inputBox.style.border="1px solid rgba(0, 0, 0, 0.3)"
        }
        else{
            password_inputBox.style.border="1.5px solid red"
        }
    }

    const validateConfirmPassword=(value)=>{
        if(passwordInput.value===confirmPasswordInput.value){
            console.log("passed");
            confirmPassword_InputBox.style.border="1.5px solid hsla(128, 92.80%, 49.20%, 0.92)"
        }
        else{
            console.log("failed");
            confirmPassword_InputBox.style.border="1.5px solid red"
        }
    }
})
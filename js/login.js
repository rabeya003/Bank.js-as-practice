document.getElementById('btn-submit').addEventListener('click',function(){
    let emailField = document.getElementById('user-email');
    let email=emailField.value;
    const passwordField=document.getElementById('password');
    let password=passwordField.value;
    if(email === 'rabeya@gmail.com' && password === 'rabeya'){
        window.location.href='bank.html';
    }
    else{
        alert('Make sure you enter correct password');
    }
}) 
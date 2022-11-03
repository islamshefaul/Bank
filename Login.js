document.getElementById('btn').addEventListener('click', function(){

    const userEmail = document.getElementById('user-email');
    const Email = userEmail.value;
    
    const suerPassword = document.getElementById('user-password');
    const password = suerPassword.value;
    console.log(Email,password);

    if(Email === 'shefaul@gmail.com' && password === '12345'){
        window.location.href='bank.html';
    }
    else{
        alert('Apnr id blck kora hoica');
    }
})
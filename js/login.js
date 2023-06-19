// add the event handler on submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value; 

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    console.log(email, password);

    if(email === 'a@gmail.com' && password === "12345"){
        console.log("valid user");
    }
    else{
        console.log("Invalid User");
    }
})
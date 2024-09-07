//for bg change on click

const colors = ['#F4EDDB', '#77B9AD', '#F5A62F', '#A13221']; 

function changeBGColor(cardTitle) {
    const cardBody = cardTitle.closest('.card').querySelector('.card-body'); //gets the closes card-body element to the clicked title
    const randomColor = Math.floor(Math.random() * colors.length); //picks a random color from the specified colors
    cardBody.style.backgroundColor = colors[randomColor];
}

//for form validation

function validations() {
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   //regex for validating email format

    let errorMessages = [];
    
    if (name === '') {  
        errorMessages.push('Please enter your name.');
    }

    if (email === '' || !emailFormat.test(email)) {    //check for empty email or proper email format
        errorMessages.push('Please enter a valid email address.');
    }

    if (message === '') {
        errorMessages.push('Please enter a message.');
    }

    if (errorMessages.length > 0) {        
        alert(errorMessages.join('\n'));
        return false; 
    }
    else {
        alert("Message sent!");
        return true; 
    }

}


function projects(){
    window.location.href='projects.html';
}

function resume(){
    window.location.href='resume.html';
}

function contact(){
    window.location.href='contacts.html';
}



// C O  N T A C T S .JS--------------------------------<>---------------

function submit(){
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById('formSubmitMessage').innerHTML = `<div class="successMessage">Your form has successfully submitted with following information.<br/>
                                                                Name: ${name}<br/>
                                                                Subject: ${subject}<br/>
                                                                Phone: ${phone}<br/>
                                                                Email: ${email}<br/>
                                                                Message: ${message}
                                                                </div>`;
}


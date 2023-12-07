const serviceID = 'service_jbsrx8t'
const templateID = 'template_2wx9hct'

function mailSent() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    document.getElementById('formulaire').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.send(serviceID, templateID, params)
            .then(
                res => {
                    console.log(res);
                    showMesSent();
                }
            )
            .catch(
                err => {
                    alert("Il y a eu une erreur, veuillez réessayer.")
                    console.log(err)
                }
            );
    })
}

function showMesSent() {
    document.getElementById("formulaire").style.display = "none";
    document.getElementById('rgpd').style.display = "none";
    document.getElementById("mess-envoye").style.display = "block";
}
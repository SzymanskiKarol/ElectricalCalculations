const scriptURL = 'https://script.google.com/macros/s/AKfycbzLO0tV35j24T9cq3_207tSr-gXMW2kB0Khsyme7X4sI4-q7-9tIU8YDk7TcLQ8JElG/exec'
const form = document.forms['contact-us']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
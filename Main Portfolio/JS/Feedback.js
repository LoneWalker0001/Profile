const scriptURL = 'https://script.google.com/macros/s/AKfycbwa_vULKGFo_ybvRztPvSPZbc4WBsGfe4NDyI62RNmnFbpLsjC3OPujiY4mkK8aoa6K4A/exec'
const form = document.forms['Profile One Feedback']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById("indicate").innerHTML="You have sent feedback"),alert("Thanks for Your feedback")
    .catch(error => console.error('Error!', error.message))
})

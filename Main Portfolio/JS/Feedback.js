const scriptURL = 'https://script.google.com/macros/s/AKfycbwa_vULKGFo_ybvRztPvSPZbc4WBsGfe4NDyI62RNmnFbpLsjC3OPujiY4mkK8aoa6K4A/exec'
const form = document.forms['Profile One Feedback']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Your feedback"), document.getElementById("indicate").innerHTML="Your feedback is saved in our record", const null document.getElementByClass("null404"),null[0].innerHTML="", null[1].innerHTML="",null[2].innerHTML="",
         )
    .catch(error => console.error('Error!', error.message))
})

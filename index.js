const contactButton = document.getElementById('con')
const contactDiv = document.querySelector('.cont')
contactButton.addEventListener('click', ()=>
{
    contactDiv.scrollIntoView({behavior: 'smooth'})
})

const contactAutton = document.getElementById('w2')
const contactSiv = document.querySelector('.abt')
contactAutton.addEventListener('click', ()=>
{
    contactSiv.scrollIntoView({behavior: 'smooth'})
})

const contactCutton = document.getElementById('w3')
const contactFiv = document.querySelector('.ex')
contactCutton.addEventListener('click', ()=>
{
    contactFiv.scrollIntoView({behavior: 'smooth'})
})

const contactDutton = document.getElementById('w4')
const contactJiv = document.querySelector('.skils')
contactDutton.addEventListener('click', ()=>
{
    contactJiv.scrollIntoView({behavior: 'smooth'})
})

const contactEutton = document.getElementById('w5')
const contactKiv = document.querySelector('.ex2')
contactEutton.addEventListener('click', ()=>
{
    contactKiv.scrollIntoView({behavior: 'smooth'})
})

const contactIutton = document.getElementById('w6')
const contactIiv = document.querySelector('.ox')
contactIutton.addEventListener('click', ()=>
{
    contactIiv.scrollIntoView({behavior: 'smooth'})
})


document.getElementById('rew').addEventListener('click', function(event){
    event.preventDefault()
    var name = document.getElementById('te').value
    var email = document.getElementById('te').value
    var message= document.getElementById('tt').value
    
    var formData = 'Name: ' + name + '/nEmail: ' + email + '/nMessage: ' + message
    var link = 'mailto: jeomuchiri25807570@gmail.com from Website?subject=Message from Website&body='+ encodeURIComponent(formData)
    window.open(link, '_self')
    
    
     
})
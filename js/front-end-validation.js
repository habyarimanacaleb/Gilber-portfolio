
const contactFormData = document.getElementById('contact-form-data').addEventListener('submit',function(event){
    event.preventDefault();
let name = document.getElementById('name').value;
let email= document.getElementById('email').value;  
let message= document.getElementById('message').value;  
    try {
        console.log('Form is submitted')
        if(!name ||!email & !message){
            alert('All Field Are Required!!')
        }
        else{
            alert('Thank your for your querry/question!!')
            alert('Your Data Are recorded well.',name)
        }
    } catch (error) {
        alert('There is error in form submission')
    }
})
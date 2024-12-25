
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


///
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('applicationForm');
    
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(this); // Get form data
        // Convert FormData to a plain object
        const data = Object.fromEntries(formData);
        console.log(data);
        // Send POST request to the backend
        fetch('https://g-back-end-zhq1.onrender.com/api/application', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            alert(data.message);  // Show success message
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was an error submitting your application.');
        });
      });
    } else {
      console.error('Form not found');
    }
  });
document.getElementById('applicationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(this); // Get form data

  // Convert FormData to a plain object
  const data = Object.fromEntries(formData);

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
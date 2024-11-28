// Define the Application Assistant services
const applicationAssistantServices = [
  {
      title: "Form Filling Assistance",
      description: "Help clients complete application forms for various purposes, ensuring all details are filled out accurately."
  },
  {
      title: "Document Submission",
      description: "Assist with the submission of applications and required documents, ensuring timely submission according to deadlines."
  },
  {
      title: "Tracking Application Status",
      description: "Track the status of submitted applications and follow up on any necessary updates or changes."
  },
  {
      title: "Creating Application Profiles",
      description: "Create and manage client profiles for multiple applications, ensuring all necessary information is organized."
  },
  {
      title: "Providing Application Advice",
      description: "Provide expert advice on best practices for submitting applications and achieving the best possible results."
  },
  {
      title: "Custom Application Templates",
      description: "Design custom templates for applications to help clients streamline the process and reduce errors."
  }
];
// Get the container where Application Assistant services will be rendered
const assistantServicesContainer = document.querySelector(".assistant-services");

// Loop through the services array and create HTML for each service card
applicationAssistantServices.forEach(service => {
  const serviceCard = document.createElement('div');
  serviceCard.classList.add('service-card', 'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'transition-transform', 'transform', 'hover:scale-105');
  // Add the service content (title and description)
  serviceCard.innerHTML = `
      <h3 class="text-xl font-semibold text-gray-800 mb-4">${service.title}</h3>
      <p class="text-gray-600">${service.description}</p>
  `;
  // Append the service card to the container
  assistantServicesContainer.appendChild(serviceCard);
});
document.getElementById('applicationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
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
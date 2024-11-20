// const form = document.getElementById('applicationForm');
// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const data = {
//     firstName: formData.get('firstName'),
//     lastName: formData.get('lastName'),
//     title: formData.get('title'),
//     surname: formData.get('surname'),
//     otherNames: formData.get('otherNames'),
//     initials: formData.get('initials'),
//     dob: formData.get('dob'),
//     gender: formData.get('gender'),
//     maritalStatus: formData.get('maritalStatus'),
//     disability: formData.get('disability'),
//     phone: formData.get('phone'),
//     email: formData.get('email'),
//     residence: formData.get('residence'),
//     nationality: formData.get('nationality'),
//     fatherName: formData.get('fatherName'),
//     motherName: formData.get('motherName'),
//     guardian: formData.get('guardian'),
//     nextOfKinPhone: formData.get('nextOfKinPhone'),
//     prevSchool: formData.get('prevSchool'),
//     yearOfCompletion: formData.get('yearOfCompletion'),
//     certificate: formData.get('certificate'),
//     previousActivity: formData.get('previousActivity'),
//     indexNumber: formData.get('indexNumber'),
//     nationalID: formData.get('nationalID'),
//     passport: formData.get('passport'),
//     postalAddress: formData.get('postalAddress'),
//     cell: formData.get('cell'),
//     sector: formData.get('sector'),
//     district: formData.get('district')
//   };
  

//   try {
//     const response = await fetch('https://script.google.com/macros/s/AKfycbxcZwaQzwsJd7Cyoqh5wFH561hG2eE3XC9DjsmSnSC6qsC1Tgr2-jQxTLPjsCkISas/exec', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//       mode: 'cors'
//     });

//     if (response.ok) {
//       alert("Form submitted successfully!");
//       form.reset();
//     } else {
//       document.getElementById('errorMessage').style.display = 'block';
//       document.getElementById('errorMessage').textContent = "There was an issue with the submission. Please try again.";
//     }
//   } catch (error) {
//     console.error("Error!", error);
//     document.getElementById('errorMessage').style.display = 'block';
//     document.getElementById('errorMessage').textContent = "There was an error submitting the form. Please try again later.";
//   }
// });

const form = document.getElementById('applicationForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Create a FormData object to gather form data
  const formData = new FormData(form);

  // Convert the FormData object into a JSON object
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data);
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbxcZwaQzwsJd7Cyoqh5wFH561hG2eE3XC9DjsmSnSC6qsC1Tgr2-jQxTLPjsCkISas/exec', // Replace with your Apps Script URL
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        mode: 'cors',
      }
    );

    if (response.ok) {
      const result = await response.json();
      alert(result.message || 'Form submitted successfully!');
      form.reset(); // Reset the form after submission
    } else {
      throw new Error('Failed to submit the form. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting the form. Please try again later.');
  }
});

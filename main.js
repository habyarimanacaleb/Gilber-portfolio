const form = document.getElementById('applicationForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    title: document.getElementById('title').value,
    surname: document.getElementById('surname').value,
    otherNames: document.getElementById('otherNames').value,
    initials: document.getElementById('initials').value,
    dob: document.getElementById('dob').value,
    gender: document.getElementById('gender').value,
    maritalStatus: document.getElementById('maritalStatus').value,
    disability: document.getElementById('disability').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    residence: document.getElementById('residence').value,
    nationality: document.getElementById('nationality').value,
    fatherName: document.getElementById('fatherName').value,
    motherName: document.getElementById('motherName').value,
    guardian: document.getElementById('guardian').value,
    nextOfKinPhone: document.getElementById('nextOfKinPhone').value,
    prevSchool: document.getElementById('prevSchool').value,
    yearOfCompletion: document.getElementById('yearOfCompletion').value,
    certificate: document.getElementById('certificate').value,
    previousActivity: document.getElementById('previousActivity').value,
    indexNumber: document.getElementById('indexNumber').value,
    nationalID: document.getElementById('nationalID').value,
    passport: document.getElementById('passport').value,
    postalAddress: document.getElementById('postalAddress').value,
    cell: document.getElementById('cell').value,
    sector: document.getElementById('sector').value,
    district: document.getElementById('district').value
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbxcZwaQzwsJd7Cyoqh5wFH561hG2eE3XC9DjsmSnSC6qsC1Tgr2-jQxTLPjsCkISas/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      mode: 'cors'
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      document.getElementById('errorMessage').style.display = 'block';
      document.getElementById('errorMessage').textContent = "There was an issue with the submission. Please try again.";
    }
  } catch (error) {
    console.error("Error!", error);
    document.getElementById('errorMessage').style.display = 'block';
    document.getElementById('errorMessage').textContent = "There was an error submitting the form. Please try again later.";
  }
});

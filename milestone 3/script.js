// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = '<h2><b>resume</b></h2>';
    '<h3>PersnoalI Information</h3>';
    '<p><b>name:</b>${name}</p>';
    '<p><b>email:<b/>${email}</p>';
    '<p><b>phone:<b/>${phone}</p>';
    '<h3>Education</h3>';
    '<p>${education}</p>';
    '<h3>Experience</h3>';
    '<p>${Experience}</p>';
    '<h3>Skilss</h3>';
    '<p>${Skills}</p>';
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display Element is missing.');
    }
});

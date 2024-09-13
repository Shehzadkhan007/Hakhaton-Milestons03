// get refrensces to the form and display area
var form = document.getElementById('resume-form');
var resumedispalyElemnt = document.getElementById('resume-display');
// handal form submation
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //colect input valu
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var eduction = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //genrate the resume content dynamically
    var resumeHTML = "\n    <2><b>Resume</b><h2/>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Name:</b>").concat(email, "</p>\n    <p><b>Name:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(eduction, "</p> \n\n    <h3>Education</h3>\n    <p>").concat(experience, "</p> \n\n    <h3>Education</h3>\n    <p>").concat(skills, "</p> \n   ");
    //display the genrated resume
    if (resumedispalyElemnt) {
        resumedispalyElemnt.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is mising');
    }
});

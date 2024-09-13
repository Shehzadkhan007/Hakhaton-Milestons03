// get refrensces to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// handal form submation
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload
    //colect input valu
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const eduction = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //genrate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>email:</b>${email}</p>
    <p><b>phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${eduction}</p> 

    <h3>Experience</h3>
    <p>${experience}</p> 

    <h3>Skills</h3>
    <p>${skills}</p> 
   `;

   
   //display the genrated resume
   if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
   }else {
    console.error('the resume display element is missing.');
   }
});
// get refrences to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement;
const sharealeLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement;
const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement
// handle form submission
form.addEventListener("submit" , ( event: Event) => {
event.preventDefault();

    // collect input value
    const username = (document.getElementById("username") as
HTMLInputElement).value

    const name = (document.getElementById("name") as HTMLInputElement).value
    const fathername = (document.getElementById("fathername") as HTMLInputElement).value
    const address = (document.getElementById("address") as HTMLInputElement).value
    const  email =(document.getElementById("email") as HTMLInputElement).value
    const  mobileno =(document.getElementById("mobileno") as HTMLInputElement).value
    const cnicno = (document.getElementById("cnicno") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    // save from data localstorage with the username as the key
    const resumeData = {
        name,
        fathername,
        address,
        email,
        mobileno,
        cnicno,
        education,
        experience,
        skills,
    };
    localStorage.setItem(username,JSON.stringify(resumeData));

    // generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>PERSONAL INFORMATION</3>
    <p><b>NAME:</b><span contenteditable ="true">${name}</span></p>
    <p><b>FATHERNAME:</b><span contenteditable ="true">${fathername}</span></p>
    <p><b>ADDRESS:</b><span contenteditable ="true">${address}</span></p>
    <p><b>EMAIL:</b><span contenteditable ="true">${email}</span></p>
    <p><b>MOBILE:</b><span contenteditable ="true">${mobileno}</span></p>
    <p><b>CNICNO:</b><span contenteditable ="true">${cnicno}</span></p>

    <h3>Education</h3>
    <p contenteditable ="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable ="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable ="true">${skills}</p>
    `;
    // shumaila
//  display the genereted resume

    resumeDisplayElement.innerHTML = resumeHTML;
 
    // generate a shareable URLwith the username only
    const shareableURL =
    `${window.location.origin}?username=${encodeURIComponent(username)}`; 
    // display the shareable iink
    shareableLinkContainer.style.display = "block";
    sharealeLinkElement.href = shareableURL;
    sharealeLinkElement.textContent =shareableURL;
});
// handle PDF download
downloadPdfButton.addEventListener("click", () => {
    window.print();
});
// prefill the form based on the usernamein the URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username")

if (username) {
    // Autofill form if data is found in localstorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);
        (document.getElementById("username") as HTMLInputElement).value = username;

        (document.getElementById("name") as HTMLInputElement).value = resumeData.name;
        (document.getElementById("fathername") as HTMLInputElement).value = resumeData.fatherrname;
        (document.getElementById("address") as HTMLInputElement).value = resumeData.address;
        (document.getElementById("email") as HTMLInputElement).value = resumeData.email;
        (document.getElementById("mobile") as HTMLInputElement).value = resumeData.mobil;
        (document.getElementById("cnicno") as HTMLInputElement).value = resumeData.cnicno;
        (document.getElementById("education") as HTMLInputElement).value = resumeData.education;
        (document.getElementById("experience") as HTMLInputElement).value = resumeData.experience;
        (document.getElementById("skills") as HTMLInputElement).value = resumeData.skills;
    
    }

}





// get refrences to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var sharealeLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
// handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect input value
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var fathername = document.getElementById("fathername").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var mobileno = document.getElementById("mobileno").value;
    var cnicno = document.getElementById("cnicno").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // save from data localstorage with the username as the key
    var resumeData = {
        name: name,
        fathername: fathername,
        address: address,
        email: email,
        mobileno: mobileno,
        cnicno: cnicno,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>PERSONAL INFORMATION</3>\n    <p><b>NAME:</b><span contenteditable =\"true\">".concat(name, "</span></p>\n    <p><b>FATHERNAME:</b><span contenteditable =\"true\">").concat(fathername, "</span></p>\n    <p><b>ADDRESS:</b><span contenteditable =\"true\">").concat(address, "</span></p>\n    <p><b>EMAIL:</b><span contenteditable =\"true\">").concat(email, "</span></p>\n    <p><b>MOBILE:</b><span contenteditable =\"true\">").concat(mobileno, "</span></p>\n    <p><b>CNICNO:</b><span contenteditable =\"true\">").concat(cnicno, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable =\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable =\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable =\"true\">").concat(skills, "</p>\n    ");
    // shumaila
    //  display the genereted resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // generate a shareable URLwith the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // display the shareable iink
    shareableLinkContainer.style.display = "block";
    sharealeLinkElement.href = shareableURL;
    sharealeLinkElement.textContent = shareableURL;
});
// handle PDF download
downloadPdfButton.addEventListener("click", function () {
    window.print();
});
// prefill the form based on the usernamein the URL
var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get("username");
if (username) {
    // Autofill form if data is found in localstorage
    var savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
        var resumeData = JSON.parse(savedResumeData);
        document.getElementById("username").value = username;
        document.getElementById("name").value = resumeData.name;
        document.getElementById("fathername").value = resumeData.fatherrname;
        document.getElementById("address").value = resumeData.address;
        document.getElementById("email").value = resumeData.email;
        document.getElementById("mobile").value = resumeData.mobil;
        document.getElementById("cnicno").value = resumeData.cnicno;
        document.getElementById("education").value = resumeData.education;
        document.getElementById("experience").value = resumeData.experience;
        document.getElementById("skills").value = resumeData.skills;
    }
}

// Select form and preview container
var form = document.getElementById("resumeForm");
var resumeContent = document.getElementById("resumeContent");
// Function to generate the resume
var generateResume = function (data) {
    resumeContent.innerHTML = "\n        <h3>".concat(data.name, "</h3>\n        <p>Email: ").concat(data.email, "</p>\n        <p>Phone: ").concat(data.phone, "</p>\n        <hr />\n        <p>").concat(data.education, "</p>\n        <h4>Experience</h4>\n        <p>").concat(data.experience, "</p>\n        <h4>Skills</h4>\n        <p>").concat(data.skills, "</p>\n    ");
};
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Gather form data
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        education: formData.get("education"),
        experience: formData.get("experience"),
        skills: formData.get("skills"),
    };
    // Generate the resume
    generateResume(resumeData);
});

// Define the ResumeData interface
interface ResumeData {
    name: string;
    email: string;
    phone: string; 
    education: string;
    experience: string;
    skills: string;
}

// Select form and preview container
const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;

// Function to generate the resume
const generateResume = (data: ResumeData) => {
    resumeContent.innerHTML = `
        <h3>${data.name}</h3>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <hr />
        <p>${data.education}</p>
        <h4>Experience</h4>
        <p>${data.experience}</p>
        <h4>Skills</h4>
        <p>${data.skills}</p>
    `;
};

// Handle form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Gather form data
    const formData = new FormData(form);
    const resumeData: ResumeData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        education: formData.get("education") as string,
        experience: formData.get("experience") as string,
        skills: formData.get("skills") as string,
    };

    // Generate the resume
    generateResume(resumeData);
});

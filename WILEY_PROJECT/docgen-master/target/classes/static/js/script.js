
// JavaScript code to update the preview section with filled content
const previewContainer = document.getElementById('preview_content');






/*



// Function to update the preview
function updatePreview() {
    // Get all the input values
    const email = document.getElementById('emailField').value;
    const phoneNumber = document.getElementById('phoneNumberField').value;
    const name = document.getElementById('nameField').value;
    const linkedin = document.getElementById('linkedinField').value;
    const summary = document.getElementById('summaryField').value;
    const languages = document.getElementById('languagesField').value;
    const technologies = document.getElementById('technologiesField').value;
    const education = document.getElementById('educationField').value;
    const educationStartMonth = document.getElementById('educationStartMonthField').value;
    const educationStartYear = document.getElementById('educationStart').value;
    const educationEndMonth = document.getElementById('educationEndMonthField').value;
    const educationEndYear = document.getElementById('educationEndYearField').value;
    const softwareEngineer = document.getElementById('softwareEngineerField').value;
    const internship = document.getElementById('internshipField').value;
    const finalYearProject = document.getElementById('finalYearProjectField').value;
    const personalProject = document.getElementById('personalProjectField').value;
    const achievements = document.getElementById('achievementsField').value;





}


*/



// Function to update the preview
function updatePreview() {
    // Get all the input values
    const email = document.getElementById('emailField').value;
    const phoneNumber = document.getElementById('phoneNumberField').value;
    const name = document.getElementById('nameField').value;
    const linkedin = document.getElementById('linkedinField').value;
    const summary = document.getElementById('summaryField').value;
    const languages = document.getElementById('languagesField').value;
    const technologies = document.getElementById('technologiesField').value;
    const educationStartMonth = document.getElementById('educationStartMonthField').value;
    const educationStartYear = document.getElementById('educationStart').value;
    const secondaryEducation = document.getElementById('secondaryEducation').value;
    const educationEndMonth = document.getElementById('educationEndMonthField').value;
    const educationEndYear = document.getElementById('educationEndYearField').value;
    const education = document.getElementById('educationField').value;
    const softwareEngineer = document.getElementById('softwareEngineerField').value;
    const internship = document.getElementById('internshipField').value;
    const finalYearProject = document.getElementById('finalYearProjectField').value;
    const personalProject = document.getElementById('personalProjectField').value;
    const achievements = document.getElementById('achievementsField').value;

    // Create a string representing the filled content
    const filledContent = `
        <div style="padding: 20px; margin-top: 40px; font-family: Verdana; font-size: 11px;">
            <p><span style="color: #115C36; font-family: Verdana;">Email Address:</span> <span style="color: #000;">${email}</span></p>
            <p><span style="color: #115C36; font-family: Verdana;">Mobile No:</span> <span style="color: #000;">${phoneNumber}</span></p>
            <p><span style="color: #000; font-size: 16px; font-family: 'Open Sans ExtraBold', sans-serif;"><strong>${name}</strong></span></p>
            <p style="color: #115C36; font-weight: bold;">Incoming Wiley Edge Alumni</p>
            <hr style="border-top: 2px solid #115C36; width: 20px; margin-top: 5px; margin-bottom: 5px;">
            <p><span style="color: #000;">${linkedin}</span></p>
            <p><strong style="font-size: 16px; font-family: 'Open Sans ExtraBold', sans-serif; color: #115C36;">PERSONAL SUMMARY</strong></p>
            <p><span style="color: #000;">${summary}</span></p>
            <p><strong style="font-size: 16px; font-family: 'Open Sans ExtraBold', sans-serif; color: #115C36;">SKILLS</strong></p>
            <p><span style="color: #115C36;">Languages:</span> <span style="color: #000;">${languages}</span></p>
            <p><span style="color: #115C36;">Technologies Tools:</span> <span style="color: #000;">${technologies}</span></p>
            <p><strong style="font-size: 16px; font-family: 'Open Sans ExtraBold', sans-serif; color: #115C36;">EDUCATION</strong></p>
            <p><span style="color: #115C36;">${educationStartMonth} - ${educationStartYear} - ${educationEndMonth}-${educationEndYear} - ${education}</span></p>
            <p><span style="color: #115C36;">${secondaryEducation}</span></p>

            <p><strong style="font-size: 16px; font-family: 'Open Sans ExtraBold', sans-serif; color: #115C36;">EXPERIENCE</strong></p>
            <p><span style="color: #115C36;">Software Engineer</span><span style="color: #000;"> – ${softwareEngineer}</span></p>
            <p><span style="color: #115C36;">Internship</span><span style="color: #000;">  – ${internship}</span></p>
            <p><span style="color: #115C36;">Final year Project</span><span style="color: #000;"> - ${finalYearProject}</span></p>
            <p><span style="color: #115C36;">Personal Project</span><span style="color: #000;"> - ${personalProject}</span></p>
            <p><strong style="font-size: 16px; font-family: 'Open Sans ExtraBold', sans-serif; color: #115C36;">ADDITIONAL INFORMATION</strong></p>
            <p><strong style="font-size: 16px; font-family: 'Open Sans ExtraBold', sans-serif; color: #115C36;">Achievements:</strong> <span style="color: #000;">${achievements}</span></p>
        </div>
    `;

    // Update the content of the preview container with the filled content
    previewContainer.innerHTML = filledContent;
}

















const currentYear = new Date().getFullYear(); // Corrected the method call to getFullYear()

// Function to populate year options
function populateYearOptions(selectElement, startYear, endYear) {
    for (let year = startYear; year <= endYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.text = year;
        selectElement.add(option);
    }
}

// Call populateYearOptions to fill year options for education start and end
populateYearOptions(document.getElementById('educationStart'), currentYear - 50, currentYear); // Adjusted start year if needed
populateYearOptions(document.getElementById('educationEndYearField'), currentYear - 50, currentYear); // Adjusted start year if needed


// Listen for input events on the input fields and update the preview accordingly
const inputFields = document.querySelectorAll('.form-control');
inputFields.forEach(input => {
    input.addEventListener('input', updatePreview);
});

// Call updatePreview initially to fill the preview section with default values
updatePreview();

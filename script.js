document.getElementById("startButton").addEventListener("click", function(event) {
    event.preventDefault();
    Start();
});

function Start() {
    let context = document.getElementById("promptInput").value;
    let aboutCheck = document.getElementById("option1");
    let about = "";
    if (aboutCheck.checked) {
        about = "About Section:\nDevelop a dynamic \"About Me\" section by seamlessly combining Tailwind CSS classes and Bootstrap's grid system. Craft a concise narrative outlining your journey as a web developer. Integrate a circular profile picture aligned to one side of the text. Employ responsive classes to ensure flawless adaptation to varying screen dimensions.\n";
    }
    let contactCheck = document.getElementById("option2");
    let contact = "";
    if (contactCheck.checked) {
        contact = "Contact Section:\nBuild a user-friendly contact form featuring fields for name, email, subject, and message. Leverage Tailwind CSS to style the form components, lending a modern aesthetic. Enhance the visual appeal using FontAwesome icons. Additionally, include icon linking to profile on Instagram.\n";
    }

    let aosCheck = document.getElementById("option3");
    let aos = "";
    if (aosCheck.checked) {
        aos = "Enhanced Animations with AOS:\nElevate the user experience with the \"Animate On Scroll\" (AOS) library. Employ this library to animate elements as they come into view, providing a visually engaging and interactive experience.\n";
    }
    
    let prompt = `
Prompt:

Develop code for a modern and visually captivating website using HTML, CSS, and JavaScript, harnessing the power of the Bootstrap and Tailwind CSS frameworks for seamless responsiveness.

Context:
"${context}"

Requirements:

    Header Section:
    Design a stylish header featuring your name at the center. Integrate a responsive navigation menu that transforms into a hamburger icon on smaller screens. The menu should include seamless links to "Home," "Portfolio," "About," and "Contact."

${aos}

    Home Section:
    Craft a visually arresting full-screen background image showcasing an enchanting landscape. Overlay a subtle yet effective dark layer on the image to enhance legibility. Incorporate a contemporary font and styling for a centrally positioned quote related to web development.
    
    ${about}

    Portfolio Section:
    Create an elegant and sophisticated gallery grid by utilizing Bootstrap's card components. Display your top-notch creations, on each project for a modal-based, larger view. Employ a sleek hover effect that slightly magnifies the card while casting a subtle shadow.

    ${contact}
`;

    console.log(prompt);
    document.getElementById("output").innerHTML = prompt;
}
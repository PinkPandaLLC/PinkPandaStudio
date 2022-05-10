// import bootstrap from "bootstrap";

// alert('linked);





const contactbtn = document.getElementById('toggleContactButton');

contactbtn.addEventListener('click', () => {
    const form = document.getElementById('contactUsForm');

    if (form.style.display === 'none') {
        // displays the form
        form.style.display = 'block';
    } else {
        // Hides the form
        form.style.display = 'none';
    }
});
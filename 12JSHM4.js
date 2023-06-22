const buttonRef = document.querySelector(".fourAnswerButtonJS");

buttonRef.addEventListener("click", helloWorld);

const helloWorld = callback => {
    alert("Hello World!");

    callback(helloWorld);
}
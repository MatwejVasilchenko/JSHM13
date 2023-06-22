const buttonRef = document.querySelector(".fifeAnswerButtonJS");



buttonRef.addEventListener("click", clicksButton);

const clicksButton = () => {
    let clicks = 0;
    clicks += 1;
    console.log(clicks);
    return clicks;
}
const buttonColor = document.querySelector("#colorButt");
let originalColor = document.body.style.background;

buttonColor.addEventListener("click", () => {
    if(document.body.style.background === originalColor){
        const bluCol = 'rgb(0, 0, 255)';
        document.body.style.background = bluCol;
    }else{
        document.body.style.background = originalColor;
    }
})

// change text size back to normal for smaller button
const buttonAlert = document.querySelector('#Smaller');

buttonAlert.addEventListener("click" ,() => {
    alert("Hello, fella! Fix text size to default!");
    textSize.style.fontSize = defaultTextSize
})

function printAlert() {
    alert("Hello, world!");
}

// alert for fancy radio button
function alertMessage1() {
    alert("Alert Fancy Stuff incomming!!!!");
}

// alert for boring radio button
function alertMessage2() {
    alert("Alert Boring Stuff incomming!!!!");
}

// uppercase all text and add Moo to end of all sentences.
function Mooafy(){
    textSize.style.textTransform = "uppercase";
    const mooText = textSize.value.split(".").join("-Moo. ");
    textSize.value = mooText;
}

// get id of text
const textSize = document.querySelector('#textSize');
// for changing text back to normal size
let defaultTextSize = textSize.style.fontSize

// change text size for Bigger button
function fontSize(){
    //const textSize = document.querySelector('#textSize');
    textSize.style.fontSize = "24px";
}

// change text styling to fancy
function styleChange() {
    //const textStyle = document.querySelector('#textSize');
    textSize.style.color = "blue";
    textSize.style.fontWeight = "bold";
    textSize.style.textDecoration = "underline";

}

// change text styling to normal
function styledefault() {
    //const textStyle = document.querySelector('#textSize');
    textSize.style.color = "black";
    textSize.style.fontWeight = "normal";
    textSize.style.textDecoration = "none";
}

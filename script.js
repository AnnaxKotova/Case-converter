let story = document.querySelector("textarea");

let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let properCase = document.getElementById("proper-case");
let sentenceCase = document.getElementById("sentence-case");

upperCase.addEventListener("click", function () {
    story.value = story.value.toUpperCase();
});

lowerCase.addEventListener("click", function () {
    story.value = story.value.toLowerCase();
});

properCase.addEventListener("click", function () {
    //pour évider l'a
    story.value = story.value.toLowerCase();

    let arrStory = story.value.split(" ");

    for (let i=0; i < arrStory.length; i++){
        arrStory[i] = arrStory[i].charAt(0).toUpperCase() + arrStory[i].substring(1);

    }
    story.value = arrStory.join(' ');

});

sentenceCase.addEventListener("click", function () {
    story.value = story.value.toLowerCase();
    let arrStory = story.value.split(". ");
    console.log(arrStory);
    for (let i=0; i < arrStory.length; i++){
        arrStory[i] = arrStory[i].charAt(0).toUpperCase() + arrStory[i].substring(1);

    }
    story.value = arrStory.join('. ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}



let save = document.getElementById("save-text-file");

save.addEventListener("click", function () {


    // Start file download.
    download("text.txt", story.value);
});
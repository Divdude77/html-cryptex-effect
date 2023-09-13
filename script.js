const text = "This is so cool!"

const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%)+:,./";
let minElement = null;
let maxElement = null;

function initialize() {
    const sentence = document.querySelector("#sentence");
    let random1 = document.createElement("div");
    random1.classList.add("letter");
    let a = 
    random1.innerHTML = '<span style="color: darkgray">' + characters[Math.floor((Math.random() * 73))] + '</span>';
    sentence.appendChild(random1);
    for (char of text) {
        let letter = document.createElement("div");
        letter.classList.add("letter");
        letter.innerHTML = (char !== " ") ? char : '&nbsp;';
        sentence.appendChild(letter);
    }
    let random2 = document.createElement("div");
    random2.classList.add("letter");
    random2.innerHTML = '<span style="color: darkgray">' + characters[Math.floor((Math.random() * 73))] + '</span>';
    sentence.appendChild(random2);
    initializeRandoms();   
}

function initializeRandoms() {
    const sentence = document.querySelector("#sentence");

    let minVal = innerHeight;
    let maxVal = 0;
    Math.floor((Math.random() * innerHeight))
    for (letter of sentence.children) {
        let margin = Math.floor((Math.random() * innerHeight));
        letter.style.marginTop = margin + "px";   
        if (margin < minVal) {
            minVal = margin;
            minElement = letter;
        }
        else if (margin > maxVal) {
            maxVal = margin;
            maxElement = letter;
        }
        letter.style.setProperty("--random-content", "'" + generateRandomContent(50) + "'");
    }

    setInterval(() => {
            if (maxElement.getBoundingClientRect().y - minElement.getBoundingClientRect().y <= 30) {
                document.querySelector('html').style.setProperty("--color", 'black');
            }
    
            else {
                document.querySelector('html').style.setProperty("--color", 'darkgrey');
            }
    }, 100);
}

function generateRandomContent(n) {
    var s = '';
    for (i = 0; i < n; i++) {
        s += characters[Math.floor((Math.random() * 77))];
    }
    return s;
}

window.onload = initialize;

function printResult(result, number_of_words)
{
    let finalResult = result + "/" + number_of_words;
    let score_loc = document.querySelector(".score span");
    score_loc.innerHTML = `${finalResult}`;
    // console.log("Your score is : " + result + "/" + number_of_words)
}

function start_game()
{
    initAddEventListenerPopup();
    let i = 0;
    let score = 0;
    let gameList = words_list;
    let playerInput = document.getElementById("writingInput");
    let buttonSubmit = document.getElementById("submitButton");

    let shareButton = document.querySelector("form");

    shareButton.addEventListener("submit", (event) => {
        event.preventDefault();
        manageForm(score);
    })

    showWords(gameList[i]);


    buttonSubmit.addEventListener("click", () => {
        console.log(playerInput.value);
        if (playerInput.value === gameList[i]) {
            score++;
        }
        i++;
        if (i > gameList.length - 1) {
            showWords("The game is over");
            buttonSubmit.disabled = true;
            printResult(score, gameList.length);
        }
        else
            showWords(gameList[i])
        playerInput.value = "";
        printResult(score, i);
    });

    let selectionSource = document.querySelectorAll(".selectionSource input");
    for (let j = 0; j < selectionSource.length; j++) {
        console.log(selectionSource[j]);
        selectionSource[j].addEventListener("change", (event) => {
            console.log(event.target.value);
            if (event.target.value === "1") {
                gameList = words_list;
            } else {
                gameList = sentences_list;
            }
            if (i <= gameList.length - 1) {
                showWords(gameList[i]);
            }
        })
    }
    printResult(score, i);
}

function showWords(words)
{
    let wordZone = document.querySelector(".propZone")
    wordZone.innerHTML = words;
}

function showEmail(name, email, score) {
    let mailto = `mailto:${email}?subject=QwertzType score sharing&body=Hi, I'm ${name} and i made this score ${score} on QwertzType website !`
    location.href = mailto
}

function validateName(name) {
    let regex = new RegExp("[a-zA-Z]{2}")
    if (!regex.test(name)) {
        throw new Error(`Bad name, at least 2 characters needed`)
    }
}

function validateEmail(email) {
    let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!regex.test(email)) {
        throw new Error(`Bad email, try with your actual email`)
    }
}

function manageForm(score) {

    try {
        let shareName = document.getElementById("name").value;
        let shareEmail = document.getElementById("email").value;
        validateName(shareName)
        validateEmail(shareEmail)
        errorMessage("");
        showEmail(shareName, shareEmail, score);
    } catch (e) {
        console.log("Error : " + e.message);
        errorMessage(e.message);
    }
}

function errorMessage(message) {
    let error = document.getElementById("errorMessage");

    if (!error) {
        let popup = document.querySelector(".popup");
        error = document.createElement("span");
        error.id = "errorMessage";
        popup.append(error);
    }

    error.innerText = message
}
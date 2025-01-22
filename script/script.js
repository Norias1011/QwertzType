
function printResult(result, number_of_words)
{
    let finalResult = result + "/" + number_of_words;
    let score_loc = document.querySelector(".score span");
    score_loc.innerHTML = `${finalResult}`;
    // console.log("Your score is : " + result + "/" + number_of_words)
}

function start_game()
{
    let i = 0;
    let score = 0;
    let gameList = words_list;
    let playerInput = document.getElementById("writingInput");
    let buttonSubmit = document.getElementById("submitButton");

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
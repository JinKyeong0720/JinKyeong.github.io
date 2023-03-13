const root = document.querySelector("#root");

const map = document.createElement("div");
map.setAttribute("id", "map");
const mark = [];
let win = 0;
let turn = 0;
let gameCnt = 0;

for (let i = 0; i < 10; i++) {
    const markIn = [];
    mark.push(markIn);
    const ul = document.createElement("ul");

    for (let j = 0; j < 10; j++) {
        markIn.push(0);
        const li = document.createElement("li");

        li.addEventListener("click", e => {
            if (mark[i][j] == 0 && win == 0) {
                gameCnt++;
                mark[i][j] = turn;
                localStorage.setItem(mark, mark[i][j]);
                localStorage.setItem(gameCnt, gameCnt);

                if (turn === 1) {
                    const black = "https://em-content.zobj.net/thumbs/120/facebook/65/medium-black-circle_26ab.png";
                    li.setAttribute("style", `background-image : url(${black})`);

                } else if (turn === 2) {
                    const white = "https://em-content.zobj.net/thumbs/120/facebook/65/medium-white-circle_26aa.png";
                    li.setAttribute("style", `background-image : url(${white})`);
                }
                checkWin();
            }
        });

        ul.append(li);
    }
    map.append(ul);
}
root.append(map);


function checkWin() {
    for (let i = 0; i < 10; i++) { // 가로
        let count = 0;
        for (let j = 0; j < 10; j++) {
            if (mark[i][j] === turn) {
                count++;
            }
        }

        if (count === 5) {
            win = turn;
        }
    }

    for (let i = 0; i < 10; i++) { // 세로
        let count = 0;
        for (let j = 0; j < 10; j++) {
            if (mark[j][i] === turn) {
                count++;
            }

            if (count === 5) {
                win = turn;
            }
        }
        count = 0;
    }


    for (let i = 0; i < 10 - 4; i++) { // 대각선
        for (let j = 0; j < 10 - 4; j++) {
            if (mark[i][j] === turn) {
                let count = 0;
                for (let k = 0; k < 5; k++) {
                    if (mark[i + k][j + k] === turn)
                        count++;
                }
                
                if (count === 5) {
                    win = turn;
                }
            }
        }
    }


    count = 0;
    for (let i = 4; i < 10 - 4; i++) { // 역대각선
        for (let j = 0; j < 10 - 4; j++) {
            if (mark[i][j] === turn) {
                count = 0;
                for (let k = 0; k < 5; k++) {
                    if (mark[i - k][j + k] === turn)
                        count++;
                }
                
                if (count === 5) {
                    win = turn;
                }
            }
        }
    }

    if (win != 0) {
        alert(`p${win} 승리!`);
    }

    if (gameCnt === 100 && win === 0) {
        alert("비김!");
    }

    turn = turn === 1 ? 2 : 1;
}

function reset() {
    turn = 1;
    win = 0;
    location.reload();
}
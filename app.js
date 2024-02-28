let Boxes= document.querySelectorAll('.Box');
let resetBtn= document.querySelector('#reset');

let turn=0;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
Boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        if (turn === 0) {
            Box.innerText = 'o';
            turn = 1;
        } else if (turn === 1) {
            Box.innerText = 'x';
            turn = 0;
        }
    Box.disabled=true;

    checkWinner();
    });
});

function checkWinner() {
    for (let i = 0; i < winPattern.length; i++) {
        const [a, b, c] = winPattern[i];
        const boxA = Boxes[a].innerText;
        const boxB = Boxes[b].innerText;
        const boxC = Boxes[c].innerText;
        if (boxA && boxA === boxB && boxA === boxC && boxB === boxC) {
            alert(`Player ${boxA} wins!`);
            return turn;
        }
    }
    return turn;
}



resetBtn.addEventListener('click', () => {
    Boxes.forEach((Box) => {
        Box.innerText = ' ';
        turn = 1;
    });
});
let boxes = document.querySelectorAll(".box");
console.log(boxes);
let result = document.getElementById(".result");

let currentPlayerSymbol = "X";

let winCombos = [
[boxes[0], boxes[1], boxes[2]],
[boxes[3], boxes[4], boxes[5]],
[boxes[6], boxes[7], boxes[8]],
[boxes[0], boxes[3], boxes[6]],
[boxes[1], boxes[4], boxes[7]],
[boxes[2], boxes[5], boxes[8]],
[boxes[2], boxes[4], boxes[6]],
[boxes[0], boxes[4], boxes[8]]
] 

boxes.forEach(function(box) {
    box.addEventListener("click", boxClicked);
});

function boxClicked(x) {
    if (x.target.innerHTML== " ")
    {
        x.target.textContent = currentPlayerSymbol;
        winCheck();
        if (currentPlayerSymbol == "X"){ 
            currentPlayerSymbol = "O" ;           
        }
        else if (currentPlayerSymbol == "O"){
            currentPlayerSymbol ="X";
        }
    }
}

let blankPattern = (" ");

function resetBoard(rButt) {
    pattern = blankPattern();
    colorPattern();
}

function winCheck() {
    for(var i = 0; i < winCombos.length; i++){
        counter = 0
        let winPos = winCombos[i].length; 
        for(var j = 0; j < winPos; j++) {
            let winBox = winCombos[i][j].textContent;
            if (winBox == currentPlayerSymbol) {
                counter++
                if(counter == 3){
                    alert(currentPlayerSymbol + " wins!")
                }
                }
            }
         }
    }
    function reset (){
        for (i=0 ; 1 < box.length ; i ++){
            document.getElementsByClassName("input").addEventListener("click").value =""
        }}
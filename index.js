const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "W     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "S       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

// black player piece
let playerDiv = document.getElementById("player")

for (iRow = 0; iRow < map.length; iRow++) {
    let rowDiv = document.createElement("div")
    rowDiv.classList.add("row")
    rowDiv.id = "row-" + iRow
    document.getElementById("container").appendChild(rowDiv)

    let mapRow = map[iRow]
    console.log('Map Row at position ' + iRow + ' is: ' + mapRow)
    for (iCell = 0; iCell < mapRow.length; iCell++) {

        let cellDiv = document.createElement("div")
        cellDiv.classList.add("cell")
        cellDiv.id = "cell-" + iCell

        rowDiv.appendChild(cellDiv)

        let character = mapRow[iCell]
        console.log('Character at position ' + iCell + ' is: "' + character + '"')

        // set initial player position
        if (character == "S") {
            playerDiv.style.left = (22 * iCell) + "px"
            playerDiv.style.top = (22 * iRow) + "px"
        }
        // make barrier color grey
        else if (character == "W") {
            cellDiv.classList.add("barrier")

        }

    }
}

// scroll through maze
document.addEventListener("keydown", function (event) {
    console.log(event.key)
    let pixelsFromTop = Number(playerDiv.style.top.split("px")[0])
    let pixelsFromLeft = Number(playerDiv.style.left.split("px")[0])
    console.log("px from top", pixelsFromTop)
    console.log("px from left", pixelsFromLeft)

    if (event.key == "ArrowUp") {
        playerDiv.style.top = (pixelsFromTop - 22) + "px"
    }

    if (event.key == "ArrowLeft") {
        playerDiv.style.left = (pixelsFromLeft - 22) + "px"
    }

    if (event.key == "ArrowDown") {
        playerDiv.style.top = (pixelsFromTop + 22) + "px"
    }

    if (event.key == "ArrowRight") {
        playerDiv.style.left = (pixelsFromLeft + 22) + "px"
    }

    //  make barriers active
//      if (playerDiv.barrier)

    //winning alert 
        
        if (playerDiv.offsetTop == 176 && playerDiv.offsetLeft == 440){
        window.alert ("Great Job!"); 
} 

})


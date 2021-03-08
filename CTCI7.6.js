class Piece {
    constructor(id, pattern, slots){
        this.id = id
        this.pattern = pattern 
        this.slots = slots
    }
    fitsWIth(piece){
        const solutions = []

        if (solutions.indexOf(piece.id) != -1) {
            this.slots -= 1, 
            piece.slots -= 1
            return 
        }
    }
}

const byType = { horse: []}

for (const piece of puzzle ) {

    if (byType[pattern] !== null){
        byType[pattern].push(piece)
    }
}

for (const [pattern, pieces] in Object.entries(byType)) {
    while (pieces.length !== 0) {
        for (const piece of pieces){

            

            if (piece.slots === 0) {
                delete piece
            } 
        }
    }
}




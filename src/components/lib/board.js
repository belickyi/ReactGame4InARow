class Board {
    constructor() {
        this.grid = [
            [1,-1,-1,1,1,1,-1],
            [0,1,-1,-1,-1,1,0],
            [0,0,0,0,0,1,0],
            [0,0,0,0,0,1,0],
            [0,0,0,1,0,0,0],
            [1,0,0,0,0,0,1]
        ];

        this.clickedCell = 0;

        this.nextPlaer;

    };

    addCell(){};


}
export default Board;
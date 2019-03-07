

class GameModel {

    static instance: GameModel = null;


    constructor() {
        this.init();
    }

    init() {

    }


    public static getInstance(): GameModel {
        if (this.instance === null) {
            this.instance = new GameModel();
        }
        return this.instance;
    }
}
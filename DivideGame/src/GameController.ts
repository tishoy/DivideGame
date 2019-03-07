

class GameController {

    static instance: GameController = null;

    private data: GameModel;

    constructor() {
        this.init();
    }

    init() {
        this.data = GameModel.getInstance();
    }


    public static getInstance(): GameController {
        if (this.instance === null) {
            this.instance = new GameController();
        }
        return this.instance;
    }
}
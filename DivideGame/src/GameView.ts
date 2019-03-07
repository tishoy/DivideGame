

class GameView extends egret.DisplayObjectContainer {

    static instance: GameView = null;


    constructor() {
        super();
        this.init();
    }

    init() {
        fairygui.UIPackage.addPackage("GameView");
    }


    public static getInstance(): GameView {
        if (this.instance === null) {
            this.instance = new GameView();
        }
        return this.instance;
    }
}
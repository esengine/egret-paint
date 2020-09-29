var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var Settings = config.Settings;
    var GameView = (function () {
        function GameView() {
            this.drawCache = new Map();
            this.penSize = new egret.Point(60, 60);
            this.ui = Game.UI_View_Main.createInstance();
            this.animal = Game.UI_com_animal.createInstance();
            this.onInit();
        }
        Object.defineProperty(GameView.prototype, "currentPen", {
            get: function () {
                return this.ui.m_pen.selectedIndex;
            },
            enumerable: true,
            configurable: true
        });
        ;
        GameView.prototype.onInit = function () {
            // 颜色区
            this.ui.m_lst_color.setVirtual();
            this.ui.m_lst_color.itemRenderer = this.lstColorItemRender;
            this.ui.m_lst_color.callbackThisObj = this;
            this.ui.m_lst_color.numItems = Settings.colorList.length;
            // canvas区
            this.animal.x = (this.ui.m_lst_canvas.width - this.animal.width) / 2;
            this.animal.y = (this.ui.m_lst_canvas.height - this.animal.height) / 2;
            this.ui.m_lst_canvas.addChild(this.animal);
            this.registerDrawEvent(this.animal.m_beard);
            this.registerDrawEvent(this.animal.m_circle);
            this.registerDrawEvent(this.animal.m_earIn);
            this.registerDrawEvent(this.animal.m_eye1);
            this.registerDrawEvent(this.animal.m_eye2);
            this.registerDrawEvent(this.animal.m_eye3);
            this.registerDrawEvent(this.animal.m_earse);
            this.registerDrawEvent(this.animal.m_eyebrow);
            this.registerDrawEvent(this.animal.m_wang);
            this.ui.m_lst_canvas.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.canvasBeginTouch, this);
            this.ui.m_lst_canvas.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.canvasMoveTouch, this);
            this.ui.m_lst_canvas.addEventListener(egret.TouchEvent.TOUCH_END, this.canvasEndTouch, this);
        };
        /**
         * lstColor 列表渲染
         * @param index
         * @param item
         */
        GameView.prototype.lstColorItemRender = function (index, item) {
            item.m_color.color = Settings.colorList[index];
            item.data = index;
            item.addClickListener(this.itemOnClick, this);
        };
        GameView.prototype.itemOnClick = function (evt) {
            Settings.currentColor = evt.currentTarget.data;
        };
        GameView.prototype.registerDrawEvent = function (obj) {
            obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginTouch, this);
            obj.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveTouch, this);
            obj.addEventListener(egret.TouchEvent.TOUCH_END, this.endTouch, this);
            obj.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.endTouch, this);
            obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.endTouch, this);
        };
        GameView.prototype.beginTouch = function (evt) {
            // 保证每次只选择一个组件
            if (this.touchComponent)
                return;
            this.touchComponent = evt.currentTarget;
        };
        GameView.prototype.moveTouch = function (evt) {
        };
        GameView.prototype.canvasBeginTouch = function (evt) {
            if (this.penComponent)
                return;
            this.penComponent = Settings.penList[this.currentPen].createInstance();
            this.penComponent.m_pen.color = Settings.colorList[Settings.currentColor];
            this.penComponent.width = this.penSize.x;
            this.penComponent.height = this.penSize.y;
            this.ui.m_lst_canvas.addChild(this.penComponent);
            var result = this.ui.m_lst_canvas.globalToLocal(evt.stageX, evt.stageY);
            this.penComponent.x = result.x;
            this.penComponent.y = result.y;
        };
        GameView.prototype.canvasMoveTouch = function (evt) {
            if (!this.penComponent)
                return;
            var result = this.ui.m_lst_canvas.globalToLocal(evt.stageX, evt.stageY);
            this.penComponent.x = result.x;
            this.penComponent.y = result.y;
            if (!this.touchComponent)
                return;
            var penToTouchPoint = this.touchComponent.globalToLocal(this.penComponent.x, this.penComponent.y);
            var touchComponentRect = new egret.Rectangle(0, 0, this.touchComponent.width, this.touchComponent.height);
            var penComponentRect = new egret.Rectangle(penToTouchPoint.x, penToTouchPoint.y, this.penComponent.width, this.penComponent.height);
            // 性能优化 如果不在绘图区域内则停止绘图
            if (!penComponentRect.intersects(touchComponentRect))
                return;
            var cache = this.drawCache.get(this.touchComponent);
            if (!cache)
                cache = [];
            // 剔除已经绘制过的区域
            if (cache.indexOf("" + Math.floor(penToTouchPoint.x) + Math.floor(penToTouchPoint.y)) != -1) {
                return;
            }
            cache.push("" + Math.floor(penToTouchPoint.x) + Math.floor(penToTouchPoint.y));
            this.drawCache.set(this.touchComponent, cache);
            // 开始添加绘图
            var newPenComponent = Settings.penList[this.currentPen].createInstance();
            newPenComponent.width = this.penSize.x;
            newPenComponent.height = this.penSize.y;
            newPenComponent.name = "newPen";
            newPenComponent.setPivot(0, 0);
            newPenComponent.x = Math.floor(penToTouchPoint.x) + newPenComponent.width / 2;
            newPenComponent.y = Math.floor(penToTouchPoint.y) + newPenComponent.height / 2;
            newPenComponent.m_pen.color = Settings.colorList[Settings.currentColor];
            this.touchComponent.addChild(newPenComponent);
        };
        GameView.prototype.canvasEndTouch = function (evt) {
            if (this.penComponent && this.penComponent.parent) {
                this.penComponent.parent.removeChild(this.penComponent);
                this.penComponent.dispose();
                this.penComponent = null;
            }
        };
        GameView.prototype.endTouch = function (evt) {
            this.touchComponent = null;
        };
        return GameView;
    }());
    game.GameView = GameView;
    __reflect(GameView.prototype, "game.GameView");
})(game || (game = {}));
//# sourceMappingURL=GameView.js.map
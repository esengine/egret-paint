module game {
    import Settings = config.Settings;

    export class GameView {
        public ui: Game.UI_View_Main;
        /** 当前所触摸的组件 */
        private touchComponent: fairygui.GComponent;
        /** 画笔组件 */
        private penComponent;
        private drawCache: Map<fairygui.GComponent, string[]> = new Map<fairygui.GComponent, string[]>();
        private get currentPen(): number {
            return this.ui.m_pen.selectedIndex;
        };
        private penSize: egret.Point = new egret.Point(60, 60);
        private readonly animal: Game.UI_com_animal;

        constructor() {
            this.ui = Game.UI_View_Main.createInstance();
            this.animal = Game.UI_com_animal.createInstance();
            this.onInit();
        }

        private onInit(){
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
        }

        /**
         * lstColor 列表渲染
         * @param index
         * @param item
         */
        private lstColorItemRender(index: number, item: Game.UI_com_color){
            item.m_color.color = Settings.colorList[index];
            item.data = index;
            item.addClickListener(this.itemOnClick, this);
        }

        private itemOnClick(evt: egret.Event){
            Settings.currentColor = evt.currentTarget.data;
        }

        private registerDrawEvent(obj: fairygui.GComponent){
            obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginTouch, this);
            obj.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveTouch, this);
            obj.addEventListener(egret.TouchEvent.TOUCH_END, this.endTouch, this);
            obj.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.endTouch, this);
            obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.endTouch, this);
        }

        private beginTouch(evt: egret.TouchEvent){
            // 保证每次只选择一个组件
            if (this.touchComponent) return;
            this.touchComponent = evt.currentTarget;
        }

        private moveTouch(evt: egret.TouchEvent){
        }

        private canvasBeginTouch(evt: egret.TouchEvent){
            if (this.penComponent) return;
            this.penComponent = Settings.penList[this.currentPen].createInstance();
            this.penComponent.m_pen.color = Settings.colorList[Settings.currentColor];
            this.penComponent.width = this.penSize.x;
            this.penComponent.height = this.penSize.y;
            this.ui.m_lst_canvas.addChild(this.penComponent);
            let result = this.ui.m_lst_canvas.globalToLocal(evt.stageX, evt.stageY);
            this.penComponent.x = result.x;
            this.penComponent.y = result.y;
        }

        private canvasMoveTouch(evt: egret.TouchEvent){
            if (!this.penComponent) return;

            let result = this.ui.m_lst_canvas.globalToLocal(evt.stageX, evt.stageY);
            this.penComponent.x = result.x;
            this.penComponent.y = result.y;

            if (!this.touchComponent) return;
            let penToTouchPoint = this.touchComponent.globalToLocal(this.penComponent.x, this.penComponent.y);
            let touchComponentRect = new egret.Rectangle(0, 0, this.touchComponent.width, this.touchComponent.height);
            let penComponentRect = new egret.Rectangle(penToTouchPoint.x, penToTouchPoint.y, this.penComponent.width, this.penComponent.height);
            // 性能优化 如果不在绘图区域内则停止绘图
            if (!penComponentRect.intersects(touchComponentRect)) return;
            let cache = this.drawCache.get(this.touchComponent);
            if (!cache) cache = [];
            // 剔除已经绘制过的区域
            if (cache.indexOf(`${Math.floor(penToTouchPoint.x)}${Math.floor(penToTouchPoint.y)}`) != -1){
                return;
            }
            cache.push(`${Math.floor(penToTouchPoint.x)}${Math.floor(penToTouchPoint.y)}`);
            this.drawCache.set(this.touchComponent, cache);

            // 开始添加绘图
            let newPenComponent = Settings.penList[this.currentPen].createInstance();
            newPenComponent.width = this.penSize.x;
            newPenComponent.height = this.penSize.y;
            newPenComponent.name = "newPen";
            newPenComponent.setPivot(0, 0);
            newPenComponent.x = Math.floor(penToTouchPoint.x) + newPenComponent.width / 2;
            newPenComponent.y = Math.floor(penToTouchPoint.y) + newPenComponent.height / 2;
            newPenComponent.m_pen.color = Settings.colorList[Settings.currentColor];
            this.touchComponent.addChild(newPenComponent);
        }

        private canvasEndTouch(evt: egret.TouchEvent){
            if (this.penComponent && this.penComponent.parent) {
                this.penComponent.parent.removeChild(this.penComponent);
                this.penComponent.dispose();
                this.penComponent = null;
            }
        }

        private endTouch(evt: egret.Event){
            this.touchComponent = null;
        }
    }
}
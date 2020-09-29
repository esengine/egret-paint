/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Game;
(function (Game) {
    var UI_View_Main = (function (_super) {
        __extends(UI_View_Main, _super);
        function UI_View_Main() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UI_View_Main.createInstance = function () {
            return (fairygui.UIPackage.createObject("Game", "View_Main"));
        };
        UI_View_Main.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_pen = this.getControllerAt(0);
            this.m_pen_crayon = (this.getChildAt(1));
            this.m_lst_color = (this.getChildAt(7));
            this.m_lst_canvas = (this.getChildAt(8));
        };
        UI_View_Main.URL = "ui://kp94r4lfl8l11a";
        return UI_View_Main;
    }(fairygui.GComponent));
    Game.UI_View_Main = UI_View_Main;
    __reflect(UI_View_Main.prototype, "Game.UI_View_Main");
})(Game || (Game = {}));
//# sourceMappingURL=UI_View_Main.js.map
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
    var UI_com_color = (function (_super) {
        __extends(UI_com_color, _super);
        function UI_com_color() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UI_com_color.createInstance = function () {
            return (fairygui.UIPackage.createObject("Game", "com_color"));
        };
        UI_com_color.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_color = (this.getChildAt(0));
        };
        UI_com_color.URL = "ui://kp94r4lfl8l11q";
        return UI_com_color;
    }(fairygui.GComponent));
    Game.UI_com_color = UI_com_color;
    __reflect(UI_com_color.prototype, "Game.UI_com_color");
})(Game || (Game = {}));
//# sourceMappingURL=UI_com_color.js.map
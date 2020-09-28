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
    var UI_com_animal = (function (_super) {
        __extends(UI_com_animal, _super);
        function UI_com_animal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UI_com_animal.createInstance = function () {
            return (fairygui.UIPackage.createObject("Game", "com_animal"));
        };
        UI_com_animal.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_beard = (this.getChildAt(2));
            this.m_earIn = (this.getChildAt(3));
            this.m_earse = (this.getChildAt(4));
            this.m_eye1 = (this.getChildAt(5));
            this.m_eye2 = (this.getChildAt(6));
            this.m_eye3 = (this.getChildAt(7));
            this.m_eyebrow = (this.getChildAt(8));
            this.m_circle = (this.getChildAt(9));
            this.m_wang = (this.getChildAt(10));
        };
        UI_com_animal.URL = "ui://kp94r4lfl8l11g";
        return UI_com_animal;
    }(fairygui.GComponent));
    Game.UI_com_animal = UI_com_animal;
    __reflect(UI_com_animal.prototype, "Game.UI_com_animal");
})(Game || (Game = {}));
//# sourceMappingURL=UI_com_animal.js.map
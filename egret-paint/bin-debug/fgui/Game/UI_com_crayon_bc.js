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
    var UI_com_crayon_bc = (function (_super) {
        __extends(UI_com_crayon_bc, _super);
        function UI_com_crayon_bc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UI_com_crayon_bc.createInstance = function () {
            return (fairygui.UIPackage.createObject("Game", "com_crayon_bc"));
        };
        UI_com_crayon_bc.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_pen = (this.getChildAt(0));
        };
        UI_com_crayon_bc.URL = "ui://kp94r4lfl8l11r";
        return UI_com_crayon_bc;
    }(fairygui.GComponent));
    Game.UI_com_crayon_bc = UI_com_crayon_bc;
    __reflect(UI_com_crayon_bc.prototype, "Game.UI_com_crayon_bc");
})(Game || (Game = {}));
//# sourceMappingURL=UI_com_crayon_bc.js.map
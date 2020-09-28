/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Game;
(function (Game) {
    var GameBinder = (function () {
        function GameBinder() {
        }
        GameBinder.bindAll = function () {
            fairygui.UIObjectFactory.setPackageItemExtension(Game.UI_View_Main.URL, Game.UI_View_Main);
            fairygui.UIObjectFactory.setPackageItemExtension(Game.UI_com_animal.URL, Game.UI_com_animal);
            fairygui.UIObjectFactory.setPackageItemExtension(Game.UI_com_color.URL, Game.UI_com_color);
            fairygui.UIObjectFactory.setPackageItemExtension(Game.UI_com_crayon_bc.URL, Game.UI_com_crayon_bc);
        };
        return GameBinder;
    }());
    Game.GameBinder = GameBinder;
    __reflect(GameBinder.prototype, "Game.GameBinder");
})(Game || (Game = {}));
//# sourceMappingURL=GameBinder.js.map
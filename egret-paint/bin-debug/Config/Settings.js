var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var config;
(function (config) {
    var Settings = (function () {
        function Settings() {
        }
        /** 当前使用颜色 */
        Settings.currentColor = 0;
        /** 颜色选择列表 */
        Settings.colorList = [0xdb0000, 0xff0000, 0xd3013f, 0xe5817c, 0xe56897,
            0xff9ddb, 0xff66cc, 0xe40076, 0xaa1b79, 0x811c77, 0x4f1b6d, 0x281771, 0x0078ba, 0x0094df,
            0x00deff, 0x02ffcc, 0x00ff72, 0x68ba2f, 0x029141, 0x016a30, 0x013719, 0x000000, 0x999999,
            0xffc088, 0xffffff, 0xffff99, 0xffff00, 0xf5b804, 0xff8400, 0xb05206, 0x743604, 0x980000];
        /** 可使用笔列表 */
        Settings.penList = [Game.UI_com_crayon_bc, Game.UI_com_color_bc];
        return Settings;
    }());
    config.Settings = Settings;
    __reflect(Settings.prototype, "config.Settings");
})(config || (config = {}));
//# sourceMappingURL=Settings.js.map
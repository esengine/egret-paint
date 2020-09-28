var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    var LoadUtils = (function () {
        function LoadUtils() {
        }
        /**
         * 加载资源
         * @param name 资源名
         * @param success 成功回调
         * @param fail 失败回调
         */
        LoadUtils.load = function (name, success, fail) {
            var existPkg = fairygui.UIPackage.getByName(name);
            if (existPkg) {
                if (success)
                    success();
                return;
            }
            RES.loadGroup(name).then(function () {
                fairygui.UIPackage.addPackage(name);
                var binder = Game[name + "Binder"];
                if (binder) {
                    binder.bindAll();
                }
                if (success)
                    success();
            }, function (err) {
                console.error("加载资源失败", err);
                if (fail)
                    fail();
            });
        };
        return LoadUtils;
    }());
    utils.LoadUtils = LoadUtils;
    __reflect(LoadUtils.prototype, "utils.LoadUtils");
})(utils || (utils = {}));
//# sourceMappingURL=LoadUtils.js.map
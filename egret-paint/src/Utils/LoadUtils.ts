module utils {
    export class LoadUtils {
        /**
         * 加载资源
         * @param name 资源名
         * @param success 成功回调
         * @param fail 失败回调
         */
        public static load(name: string, success?: Function, fail?: Function) {
            let existPkg = fairygui.UIPackage.getByName(name);
            if (existPkg){
                if (success) success();
                return;
            }

            RES.loadGroup(name).then(()=>{
                fairygui.UIPackage.addPackage(name);
                let binder = Game[`${name}Binder`];
                if (binder){
                    binder.bindAll();
                }

                if (success) success();
            }, err =>{
                console.error("加载资源失败", err);
                if (fail) fail();
            });
        }
    }
}
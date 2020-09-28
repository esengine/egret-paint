/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Game {

	export class UI_com_crayon_bc extends fairygui.GComponent {
		public m_pen:fairygui.GImage;
		public static URL:string = "ui://kp94r4lfl8l11r";

		public static createInstance():UI_com_crayon_bc {
			return <UI_com_crayon_bc>(fairygui.UIPackage.createObject("Game", "com_crayon_bc"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.m_pen = <fairygui.GImage>(this.getChildAt(0));
		}
	}
}
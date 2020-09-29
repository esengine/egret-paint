/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Game {

	export class UI_com_color_bc extends fairygui.GComponent {
		public m_pen:fairygui.GImage;
		public static URL:string = "ui://kp94r4lfntpc1t";

		public static createInstance():UI_com_color_bc {
			return <UI_com_color_bc>(fairygui.UIPackage.createObject("Game", "com_color_bc"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.m_pen = <fairygui.GImage>(this.getChildAt(0));
		}
	}
}
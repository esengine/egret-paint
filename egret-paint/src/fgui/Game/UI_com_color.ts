/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Game {

	export class UI_com_color extends fairygui.GComponent {
		public m_color:fairygui.GGraph;
		public static URL:string = "ui://kp94r4lfl8l11q";

		public static createInstance():UI_com_color {
			return <UI_com_color>(fairygui.UIPackage.createObject("Game", "com_color"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.m_color = <fairygui.GGraph>(this.getChildAt(0));
		}
	}
}
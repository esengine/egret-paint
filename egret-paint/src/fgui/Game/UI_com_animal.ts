/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Game {

	export class UI_com_animal extends fairygui.GComponent {
		public m_beard:fairygui.GComponent;
		public m_earIn:fairygui.GComponent;
		public m_earse:fairygui.GComponent;
		public m_eye1:fairygui.GComponent;
		public m_eye2:fairygui.GComponent;
		public m_eye3:fairygui.GComponent;
		public m_eyebrow:fairygui.GComponent;
		public m_circle:fairygui.GComponent;
		public m_wang:fairygui.GComponent;
		public static URL:string = "ui://kp94r4lfl8l11g";

		public static createInstance():UI_com_animal {
			return <UI_com_animal>(fairygui.UIPackage.createObject("Game", "com_animal"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.m_beard = <fairygui.GComponent>(this.getChildAt(2));
			this.m_earIn = <fairygui.GComponent>(this.getChildAt(3));
			this.m_earse = <fairygui.GComponent>(this.getChildAt(4));
			this.m_eye1 = <fairygui.GComponent>(this.getChildAt(5));
			this.m_eye2 = <fairygui.GComponent>(this.getChildAt(6));
			this.m_eye3 = <fairygui.GComponent>(this.getChildAt(7));
			this.m_eyebrow = <fairygui.GComponent>(this.getChildAt(8));
			this.m_circle = <fairygui.GComponent>(this.getChildAt(9));
			this.m_wang = <fairygui.GComponent>(this.getChildAt(10));
		}
	}
}
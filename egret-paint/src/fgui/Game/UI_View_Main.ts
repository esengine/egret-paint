/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Game {

	export class UI_View_Main extends fairygui.GComponent {
		public m_pen:fairygui.Controller;
		public m_pen_crayon:fairygui.GButton;
		public m_lst_color:fairygui.GList;
		public m_lst_canvas:fairygui.GComponent;
		public static URL:string = "ui://kp94r4lfl8l11a";

		public static createInstance():UI_View_Main {
			return <UI_View_Main>(fairygui.UIPackage.createObject("Game", "View_Main"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.m_pen = this.getControllerAt(0);
			this.m_pen_crayon = <fairygui.GButton>(this.getChildAt(1));
			this.m_lst_color = <fairygui.GList>(this.getChildAt(7));
			this.m_lst_canvas = <fairygui.GComponent>(this.getChildAt(8));
		}
	}
}
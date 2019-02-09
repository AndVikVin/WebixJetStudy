import {JetView} from "webix-jet";

class LangButton extends JetView{
	config(){
		return{
			view:"segmented", id:"langButton", value:"en", multiview:true,
			options:[
				{id:"en", value:"English"},
				{id:"ru", value:"Russian"},				
			],
			// When clicked view of a segment button didn't change.
			click:() => this.toggleLanguage()
		};
	}
	toggleLanguage(){
		const langs = this.app.getService("locale");
		const value = this.getRoot().getValue();
		langs.setLang(value);
	}
	init(){
	}
}

export default LangButton;

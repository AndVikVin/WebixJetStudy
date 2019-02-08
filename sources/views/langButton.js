import {JetView, plugins} from "webix-jet";

class LangButton extends JetView{
	config(){
		return{
			view:"segmented", id:"langButton", value:"en", multiview:true,
			options:[
				{id:"en", value:"English"},
				{id:"ru", value:"Russian"},				
			],
			click:() => this.toggleLanguage()
		};
	}
	toggleLanguage(){
		const langs = this.app.getService("locale");
		const value = this.getRoot().getValue();
		langs.setLang(value);
		console.log(value)
	}
	init(){
	}
}

export default LangButton;

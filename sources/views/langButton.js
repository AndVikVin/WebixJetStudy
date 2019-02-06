import {JetView} from "webix-jet";

class LangButton extends JetView{
	config(){
		return{
			view:"segmented", id:"langButton", value:"en", multiview:true,
			options:[
				{id:"en", value:"En"},
				{id:"ru", value:"Ru"},				
			]
		};
	}
}

export default LangButton;

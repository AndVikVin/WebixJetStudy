import {JetView} from "webix-jet";

class Top extends JetView{
	config(){
		const menu = {
			view:"menu", id:"top:menu", 
			css:"app_menu",
			width:180, layout:"y", select:true,
			template:"<span class='webix_icon #icon#'></span> #value# ",
			data:[
				{ value:"Contacts", id:"ContactsPage", icon:"wxi-user" },
				{ value:"Data", id:"data",  icon:"wxi-pencil" },
				{ value:"Settings subviews", id:"settings",  icon:"wxi-alert" }				
			],
			on:{
				onAfterSelect:(id)=>{
					this.app.show("/top/" + id);
				}
			}
		};
		return {
			cols:[
				menu,
				{$subview:true}
			]
		};
	}
}

export default Top;

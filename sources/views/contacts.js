import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";
import "../styles/myCss.css";

class Contacts extends JetView{
	config(){
		const usersList = {
			rows:[
				{
					view:"list",
					select:true, template:"#Name# #Email# <span class='webix_icon wxi-close delBut'></span>",
					onClick:{
						"wxi-close":function(e,id){
							this.data.remove(id);
							return false;
						}
					} 
				},
				{view:"button",value:"Add", type:"form", inputWidth:180, align:"right", click:()=>{
					const list = this.getRoot().queryView("list");
					this.app.callEvent("onAddContact",[list]);
				}}
			]

		};
		return usersList;
	}
	init(view,url){
		url[0].params.id = 1;
		view.queryView("list").parse(contacts);
	}
}

export default Contacts;

import {JetView} from "webix-jet";
import ContactForm from "./ContactForm";
import {contactsColl} from "../models/contacts";
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
					},
					on:{
						onAfterSelect:function(id){
							this.$scope.setParam("id",id,true);
						}
					} 
				},
				{view:"button",value:"Add", type:"form", inputWidth:180, align:"right", click:()=>{
					contactsColl.add({Name: "name", Email:"email"});
				}}
			]
		};
		return {
			cols:[
				usersList,
				ContactForm
			]
			
		};
	}
	init(view){
		view.queryView("list").parse(contactsColl);
		
	}
	urlChange(view){
		const list = view.queryView("list");
		let id = this.getParam("id");

		id = id || list.getFirstId();
		if(id && list.exists(id))
			list.select(id);
	}
}

export default Contacts;

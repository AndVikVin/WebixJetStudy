import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";

class Contacts extends JetView{
	config(){
		const usersList = {
			view:"list", id:"usersList",
			select:true, template:"#Name# #Email#", 
		};
		const usersForm = {
			view:"form",	width:300,
			id:"usersForm",
			elements:[
				{view:"text", label:"User name", name:"Name"},
				{view:"text", label:"Email", name:"Email"}
			]
		};
		return {
			cols:[
				usersList,
				usersForm
			]
		};
	}
	init(view){
		view.queryView("list").parse(contacts);
	}
}

export default Contacts;

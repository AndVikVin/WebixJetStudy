import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";

class Contacts extends JetView{
	config(){
		const usersList = {
			view:"list", id:"usersList",
			select:true, template:"#Name# #Email#", 
			data:contacts,
			fillspace:true
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
	// init(view){
	// 	console.log(view);
	// }
}

export default Contacts;

import {JetView} from "webix-jet";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";
import {contactsColl} from "../models/contacts"
import { format } from "url";

class ContactForm extends JetView{
	config(){
		return{
			view:"form",	width:300,
			elements:[
				{view:"text", label:"User name", name:"Name"},
				{view:"text", label:"Email", name:"Email"},
				{
					view:"combo",
					label:"Country",
					suggest: {
						data:countries,
						body:{
							template:"#Name#"
						}
					}
				},
				{
					view:"combo",
					label:"Status",
					suggest: {
						data:statuses,
						body:{
							template:"#Name#"
						}
					}
				},
				{
					view:"button",
					value:"Save",
					type:"form",
					inputWidth:180,
					click:()=>{
						const id = this.getParam("id");
						const newValues = this.getRoot().getValues();
						contactsColl.updateItem(id,newValues)
					}
				}
			]
		};
	}
	urlChange(view){
		const id = view.$scope.getParam("id");
		const values = contactsColl.getItem(id)
		view.setValues(values);
	}
}

export default ContactForm;

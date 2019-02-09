import {JetView} from "webix-jet";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";
import {contactsColl} from "../models/contacts";

class ContactForm extends JetView{
	config(){
		const _ = this.app.getService("locale")._;
		return{
			view:"form",	width:300,
			elements:[
				{view:"text", label:_("User name"), name:"Name"},
				{view:"text", label:_("Email"), name:"Email"},
				{
					view:"combo",
					label:_("Country"),
					name:"Country",
					suggest: {
						data:countries,
						body:{
							template:"#Name#"
						}
					}
				},
				{
					view:"combo",
					label:_("Status"),
					name:"Status",
					suggest: {
						data:statuses,
						body:{
							template:"#Name#"
						}
					}
				},
				{
					view:"button",
					value:_("Save"),
					type:"form",
					inputWidth:180,
					click:()=>{
						const id = this.getParam("id");
						const newValues = this.getRoot().getValues();
						contactsColl.updateItem(id,newValues);
					}
				}
			]
		};
	}
	urlChange(view){
		const id = view.$scope.getParam("id");
		const values = contactsColl.getItem(id);
		if(values){view.setValues({
			Name:values.Name,
			Email:values.Email,
			Country:countries[values.Country-1],
			Status:statuses[values.Status]
		});}
	}
}

export default ContactForm;

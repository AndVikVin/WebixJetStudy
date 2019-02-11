import {JetView} from "webix-jet";
// import {countries} from "../models/countries";
// import {statuses} from "../models/statuses";
// import {contactsColl} from "../models/contacts";
import {countriesColl} from "../models/countries";
import {statusesColl} from "../models/statuses";
import {contactsCollServ} from "../models/contacts";

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
						data:/*countries*/ countriesColl,
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
						data:/*statuses*/ statusesColl,
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
						//const id = this.getParam("id");
						const newValues = this.getRoot().getValues();
						// contactsColl.updateItem(id,newValues);
						contactsCollServ.updateItem(newValues.id, newValues);
					}
				}
			]
		};
	}
	urlChange(view){
		webix.promise.all([
			contactsCollServ.waitData,
			countriesColl.waitData,
			statusesColl.waitData]
		).then((response)=>{
			const contacts = response[0];
			const countries = response[1];
			const statuses = response[2];
			console.log(response)
			const id = view.$scope.getParam("id");
			const values = contactsCollServ.getItem(id);
			if(values){
				view.setValues(values);
			}
			// const combos = view.queryView("combo","all");
			// combos[0].data = countriesColl;
			// combos[1].data = statusesColl;
		});
		// contactsCollServ.waitData.then(()=>{
		// 	const id = view.$scope.getParam("id");
		// 	const values = contactsCollServ.getItem(id);
		// 	if(values){view.setValues({
		// 	Name:values.Name,
		// 	Email:values.Email,
		// 	Country:countriesColl[values.Country-1],
		// 	Status:statusesColl[values.Status]
		// 	});}
		// });
		
		// const id = view.$scope.getParam("id");
		// const values = contactsColl.getItem(id);
		// if(values){view.setValues({
		// 	Name:values.Name,
		// 	Email:values.Email,
		// 	Country:countries[values.Country-1],
		// 	Status:statuses[values.Status]
		// });}
	}
}

export default ContactForm;

import {JetView} from "webix-jet";
import Combo from "./combo";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";

class ContactForm extends JetView{
	config(){
		return{
			view:"form",	width:300,
			elements:[
				{view:"text", label:"User name", name:"Name"},
				{view:"text", label:"Email", name:"Email"},
				{$subview:new Combo(this.app,"",countries,"Country")},
				{$subview:new Combo(this.app,"",statuses,"Status")}
			]
		};
	}
	init(){
		let idReserve = 3;
		this.on(this.app,"onAddContact",(item)=>{
			const values = this.getRoot().getValues();
			values.id = idReserve;
			idReserve += 1;
			item.add(values);
		});
	}
}

export default ContactForm;

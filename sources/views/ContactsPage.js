import {JetView} from "webix-jet";

class ContactsPage extends JetView{
	config(){
		return {
			cols:[
				{$subview:"contacts", name:"contacts"},
				{$subview:"ContactForm", name:"contactForm"}
			]
		};	
	}
	// Can't made url change
	// urlChange(){
	// 	let id = this.getSubView("contacts")._url[0].params.id;
	// 	const list = this.getSubView("contacts").getRoot().queryView("list");
	// 	list.select(id);
	// }
	// ready(){
	// 	const list = this.getSubView("contacts").getRoot().queryView("list");
	// 	const form = this.getSubView("contactForm").getRoot();
	// 	form.bind(list);
	// 	const values = list.getSelectedItem();
	// 	form.setValues(values);
	// }
}

export default ContactsPage;

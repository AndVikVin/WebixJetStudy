import {JetView} from "webix-jet";
import {countries} from "../models/countries";

class CountriesTable extends JetView{
	config(){
		return{
			view:"datatable", id:"CountriesTable",
			select:true, scroll:false,
			autoConfig:true,
			data:countries
		};
	}
}

export default CountriesTable;


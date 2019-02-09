import {JetView} from "webix-jet";
import DataTable from "./DataTable";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";

export default class DataView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;
		const multiview = {
			view:"multiview",
			cells:[	
				{id:"CountriesTable", $subview:new DataTable(this.app,"",countries)},
				{id:"StatusTable", $subview:new DataTable(this.app,"",statuses)}
			]
		};

		const tabbar = {
			view:"tabbar",
			multiview:true,
			value:"CountriesTable",
			options:[
				{id:"CountriesTable",value:_("Countries")},
				{id:"StatusTable", value:_("Statuses")}
			]
		};
		return { rows:[
			tabbar,
			multiview
		] };
	}
}

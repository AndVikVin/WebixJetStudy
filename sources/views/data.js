import {JetView} from "webix-jet";
import CountriesTable from "./countriesTable";
import StatusTable from "./statusTable";

export default class DataView extends JetView{
	config(){
		const multiview = {
			value:"multiview",
			id:"multiview",
			cells:[	
				CountriesTable,
				StatusTable
			]
		};

		const tabbar = {
			view:"tabbar",
			id:"dataTab",
			multiview:true,
			value:"CountriesTable",
			options:[
				{id:"CountriesTable",value:"Countries"},
				{id:"StatusTable", value:"Statuses"}
			]
		};

		const toolbar = {
			view:"toolbar",
			id:"dataToolbar",
			elements:[
				{},
				{view:"button", type:"form", value:"Add", width:80, align:"right"},
				{view:"button", type:"form", value:"Delete", width:80, align:"right"}
			]
		};

		return { rows:[
			tabbar,
			multiview,
			toolbar
		] };
	}
}

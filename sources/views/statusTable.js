import {JetView} from "webix-jet";
import {statuses} from "../models/statuses";

class StatusTable extends JetView{
	config(){
		return{
			view:"datatable", id:"StatusTable",
			select:true, scroll:false,
			autoConfig:true,
			data:statuses
		};
	}
}

export default StatusTable;

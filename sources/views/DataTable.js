import {JetView} from "webix-jet";

class DataTable extends JetView{
	constructor(app,name,data){
		super(app,name);
		this._CSdata = data;
	}
	config(){
		const toolbar = {
			view:"toolbar",
			elements:[
				{},
				{view:"button", type:"form", value:"Add", width:80, align:"right"},
				{view:"button", type:"form", value:"Delete", width:80, align:"right"}
			]
		};
		const dataTable = {
			view:"datatable",
			select:true, scroll:false,
			autoConfig:true
		};

		return{
			rows:[
				dataTable,
				toolbar
			]
			
		};
	}
	init(view){
		view.queryView("datatable").parse(this._CSdata);
	}
}

export default DataTable;


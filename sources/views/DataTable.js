import {JetView} from "webix-jet";

class DataTable extends JetView{
	constructor(app,name,data){
		super(app,name);
		this._CSdata = data;
	}
	config(){
		const _ = this.app.getService("locale")._;
		const toolbar = {
			view:"toolbar",
			elements:[
				{},
				{view:"button", type:"form", value:_("Add"), width:120, align:"right", click:()=>{
					this._CSdata.add({});
				}},
				{view:"button", type:"form", value:_("Delete"), width:120, align:"right"}
			]
		};
		const dataTable = {
			view:"datatable",
			select:true, scroll:false,
			editable:true,
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


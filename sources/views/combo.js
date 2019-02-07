import {JetView} from "webix-jet";


class Combo extends JetView{
	constructor(app,name,data, label){
		super(app,name);
		this._cdata = data;
		this._clabel = label;
	}
	config(){
		return{
			view:"combo",
			label:this._clabel,
			suggest: {
				data:this._cdata,
				body:{
					template:"#Name#"
				}
			}
		};
	}
//Have tried to parse, catch error:(
}

export default Combo;

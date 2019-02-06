import {JetView} from "webix-jet";
import LangButton from "./langButton";

class Settings extends JetView{
	config(){
		return	{
			rows:[
				LangButton
			]
		};
	}
}

export default Settings;

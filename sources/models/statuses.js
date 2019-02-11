export const statuses = [
	{"id":1,"Name":"Busy","Icon":"cogs"},
	{"id":2,"Name":"Open","Icon":"user"}
];

export const statusesColl = new webix.DataCollection({
	url:"http://localhost:8096/api/v1/statuses/",
	save:"rest->http://localhost:8096/api/v1/statuses/"
});

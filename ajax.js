var MEMBERSHIP_TYPE = "2/";
var MEMBERSHIP_ID   = "4611686018441896324/";
var CHARACTER_ID    = "2305843009259865633/";

var BASEAJAX = {
	url: "https://www.bungie.net/Platform/Destiny/",
	method: "GET",
	data: {},
	beforeSend: function(xhr){
		xhr.setRequestHeader('X-API-Key', "6bc6d0c9e58a45958f7671e186a080b0");
	},
	success: function(res){
		console.log(res);
	},
	error: function(res){
		console.error(res);
	}
};

var stats = BASEAJAX;
stats.url += "Stats/ActivityHistory/"+MEMBERSHIP_TYPE+MEMBERSHIP_ID+CHARACTER_ID;
stats.data = {
	"lc":"en",
	"fmt":true,
	"lcin":true",
	"mode":5,
	"count":20,
	"page":0,
	"definitions":true
};

$.ajax(stats);
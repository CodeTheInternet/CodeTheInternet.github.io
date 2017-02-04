var BASEAJAX = {
	url: "https://www.bungie.net/Platform/Destiny/",
	method: "GET",
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

$.ajax(BASEAJAX);
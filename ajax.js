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

var stats = BASEAJAX;
stats.url += "2/4611686018441896324/2305843009259865633";

$.ajax({
	url: "https://www.bungie.net/Platform/Destiny/2/4611686018441896324/2305843009259865633",
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
});
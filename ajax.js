var BASEURL         = "https://www.bungie.net/Platform/Destiny/";
var MEMBERSHIP_TYPE = "2/";
var MEMBERSHIP_ID   = "4611686018441896324/";
var CHARACTER_ID    = "2305843009259865633/";

function handleResponse(res){
	if (res.ErrorCode) {
		var err = res.ErrorCode+": "+res.Message;
		console.error(err);
		$('#status').attr('class','error').text(err);
	} else {
		console.log(res);
		$('#status').attr('class','success').text(res.responseText);
	}	
}

$.ajax({
	url: BASEURL+"Stats/ActivityHistory/"+MEMBERSHIP_TYPE+MEMBERSHIP_ID+CHARACTER_ID,
	method: "GET",
	data: {
		"lc":"en",
		"fmt":true,
		"lcin":true,
		"mode":5,
		"count":20,
		"page":0,
		"definitions":true
	},
	beforeSend: function(xhr){
		xhr.setRequestHeader('X-API-Key', "6bc6d0c9e58a45958f7671e186a080b0");
	},
	success: function(res){
		handleResponse(res);
	},
	error: function(res){
		console.error(res);
	}
});
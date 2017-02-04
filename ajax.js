// http://destinydevs.github.io/BungieNetPlatform/docs/Enums
var ACTIVITY_MODES  = ["None","Story","Strike","Raid","AllPvP","Patrol","AllPvE","PvPIntroduction","ThreeVsThree","Control","Lockdown","Team","FreeForAll","TrialsOfOsiris","Doubles","Nightfall","Heroic","AllStrikes","IronBanner","AllArena","Arena","ArenaChallenge","Elimination","Rift","AllMayhem","MayhemClash","MayhemRumble","ZoneControl","Racing","ArenaElderChallenge","Supremacy","PrivateMatchesAll","SupremacyRumble","SupremacyClash","SupremacyInferno","SupremacyMayhem"];

var APIKEY          = "6bc6d0c9e58a45958f7671e186a080b0";
var BASEURL         = "https://www.bungie.net/Platform/Destiny/";
var MEMBERSHIP_TYPE = "2/";
var MEMBERSHIP_ID   = "4611686018441896324/";
var CHARACTER_ID    = "2305843009259865633/";

var ACTIVITY_ID = "6148095442"; // or 4163254808

Handlebars.registerHelper("activityModes",function(mode){
	return ACTIVITY_MODES[mode];
});

Handlebars.registerHelper("formatDate",function(d){
	var thisDate = new Date(d);
	return thisDate.toDateString();
});

function handleResponse(res){
	var msg = res.ErrorCode+": "+res.Message;
	if (res.ErrorCode !== 1) {
		console.error(res);
		$('#status').attr('class','error');
	} else {
		console.log(res);
		$('#status').attr('class','success');
	}
	$('#status').text(msg);
}

$.ajax({
	// url: BASEURL+"Stats/ActivityHistory/"+MEMBERSHIP_TYPE+MEMBERSHIP_ID+CHARACTER_ID,
	// url: BASEURL+"Stats/AggregateActivityStats/"+MEMBERSHIP_TYPE+MEMBERSHIP_ID+CHARACTER_ID,
	// url: BASEURL+"Stats/UniqueWeapons/"+MEMBERSHIP_TYPE+MEMBERSHIP_ID+CHARACTER_ID,
	url: BASEURL+"Stats/PostGameCarnageReport/"+ACTIVITY_ID,
	beforeSend: function(xhr){ xhr.setRequestHeader('X-API-Key', APIKEY); },
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
	
	success: function(res){
		handleResponse(res);
		var data = res.Response.data;
		// console.info("First activity:");
		// console.info(data.activities[0]);
		var tmpl = Handlebars.compile( $('#tmpl_Crucible').html() );
		// $('#response').html( tmpl(data) );
	},
	error: function(res){
		console.error(res);
	}
});
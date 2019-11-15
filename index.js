
// Unique tthing name
var dweetThingName = "dweetInternetSpeed_938045";

var dweetClient = require("node-dweetio");
var speedTest = require('speedtest-net');

var dweetio = new dweetClient();
var test = speedTest({maxTime: 5000});

test.on('data', data => {
    
    //console.dir(data.speeds);

    dweetio.dweet_for(dweetThingName, data.speeds, function(res){
        //console.log(thing);
        var url = "https://dweet.io/get/dweets/for/"+dweetThingName;
        console.log("\n");
        console.log(url);
    });

});

test.on('error', err => {
    console.error(err);
});


var net = require('net');


var client = new net.Socket();
client.connect(3000, '192.168.137.1', function() {
	console.log('Connected To Server');
	setInterval(function(){
		let time = new Date()
		let hour =  time.getHours()
		let min = time.getMinutes()
		let sec = time.getSeconds()
		let clock = `${hour}:${min}:${sec}`
		client.write(`Hi, Server,I am Client`+`\n`+`Current Time : ${clock} \n`);
	}, 1000)

});

// client.on('data', function(data) {
// 	console.log('Received: ' + data);
// 	client.destroy(); // kill client after server's response
// });

client.on('close', function() {
	console.log('Connection closed');
});
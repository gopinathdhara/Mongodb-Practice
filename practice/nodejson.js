const fs = require('fs');

fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    let user = JSON.parse(data);
	for (var i = 0; i < user.length; i++){
		var obj = user[i];
		console.log("User name: "+obj.name);
		var vehicle=obj.vehicle;
		for (var j = 0; j < vehicle.length; j++){
			if(vehicle[j].car)
			{
				console.log("Car name: "+vehicle[j].car.name);	
				console.log("Car price: "+vehicle[j].car.price);	
				console.log("Car company: "+vehicle[j].car.comapny);
			}else{
				console.log("Bike name: "+vehicle[j].bike.name);	
				console.log("Bike price: "+vehicle[j].bike.price);	
				console.log("Bike company: "+vehicle[j].bike.comapny);	
			}
		}
	}
});

console.log('This is after the read call');

"use strict";
console.log("Winter is Coming!");

let express = require('express');
let app = new express();

/*
app.get('/',(req,res)=>{
	res.status(200)
		.send("Valar dohaeris");		
})
*/
app.use(express.static(`./app`));
app.get('/api',(req,res)=>{
	res.status(200)
		.json({
			things:[{
				name:"House Stark",
				member:"Eddard Stark"
			},{
				name:"House Tully",
				member:"Brynden Tully"
			},{
				name:"House Lannister",
				member:"Jaime Lannister"
			}]
		});
})

app.listen(7777,()=>{
	console.log("The audience is listening");
})


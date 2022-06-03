const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
		'X-RapidAPI-Key': '1d69d7893amsh788b07db274a5a5p1be532jsn3c7b30139e1d'
	}
};
const getProperty = async() => {
		
	const response = await fetch('https://us-real-estate.p.rapidapi.com/for-sale?offset=0&limit=10&state_code=CA&city=Oakland&sort=newest', options)
	const data = await response.json();
	let props = Object.entries(data.data.results)
	console.log(props)

	// class MakeProperty{
	// 	// constructor(pic,price,beds,baths){
	// 	// 	this.propPic = pic
	// 	// 	this.propPrice = price
	// 	// 	this.propBeds = beds
	// 	// 	this.propBaths = baths

	// 	// 	// this.populatePic = function(){
	// 	// 	// 	document.querySelectorAll('#propPic').src = `${pic}`
	// 	// 	// // }
	// 	// 	// this.populatePrice = function(){
	// 	// 	// 	document.querySelectorAll('#propPrice').innerText = `${price}`
	// 	// 	// }
	// 	// 	// this.populateBeds = function(){
	// 	// 	// 	document.querySelectorAll('#propBeds').innerText = `${beds}`
	// 	// 	// }
	// 	// 	// this.populateBaths = function(){
	// 	// 	// 	document.querySelectorAll('#propBaths').innerText = `${baths}`
	// 	// 	// }
			
			
		// }
	// Address

	// PROP 1 ADDRESS
	let p1Line = props[1][1].location.address.line
	console.log(p1Line)
	let p1City = props[1][1].location.address.city
	let p1State = props[1][1].location.address.state_code
	let p1Postal = props[1][1].location.address.postal_code
	document.querySelector("#propOneAdd").innerText = `${p1Line}`;
	document.querySelector("#propOneLoc").innerText = `${p1City}, ${p1State} ${p1Postal}`

	// PROP 2 ADDRESS
	let p2Line = props[0][1].location.address.line
	console.log(p2Line)
	let p2City = props[2][1].location.address.city
	let p2State = props[2][1].location.address.state_code
	let p2Postal = props[2][1].location.address.postal_code
	document.querySelector("#propTwoAdd").innerText = `${p2Line}`;
	document.querySelector("#propTwoLoc").innerText = `${p2City}, ${p2State} ${p2Postal}`

	// PROP 3 ADDRESS
	let p3Line = props[2][1].location.address.line
	console.log(p3Line)
	let p3City = props[2][1].location.address.city
	let p3State = props[2][1].location.address.state_code
	let p3Postal = props[2][1].location.address.postal_code
	document.querySelector("#propThreeAdd").innerText = `${p3Line}`;
	document.querySelector("#propThreeLoc").innerText = `${p3City}, ${p3State} ${p3Postal}`

	// PROP 4 ADDRESS
	let p4Line = props[4][1].location.address.line
	console.log(p4Line)
	let p4City = props[4][1].location.address.city
	let p4State = props[4][1].location.address.state_code
	let p4Postal = props[4][1].location.address.postal_code
	document.querySelector("#propFourAdd").innerText = `${p4Line}`;
	document.querySelector("#propFourLoc").innerText = `${p4City}, ${p4State} ${p4Postal}`

	// PROP 5 ADDRESS
	let p5Line = props[5][1].location.address.line
	console.log(p5Line)
	let p5City = props[5][1].location.address.city
	let p5State = props[5][1].location.address.state_code
	let p5Postal = props[5][1].location.address.postal_code
	document.querySelector("#propFiveAdd").innerText = `${p5Line}`;
	document.querySelector("#propFiveLoc").innerText = `${p5City}, ${p5State} ${p5Postal}`

	// PROP 6 ADDRESS
	let p6Line = props[6][1].location.address.line
	console.log(p5Line)
	let p6City = props[6][1].location.address.city
	let p6State = props[6][1].location.address.state_code
	let p6Postal = props[6][1].location.address.postal_code
	document.querySelector("#propSixAdd").innerText = `${p1Line}`;
	document.querySelector("#propSixLoc").innerText = `${p1City}, ${p1State} ${p1Postal}`

	// PROPERTY IMAGES!!!

	let prop1Pic = props[1][1].primary_photo.href;
	console.log(prop1Pic);
	document.querySelector("#propOnePic").src = `${prop1Pic}`;

	let prop2Pic = props[0][1].primary_photo.href;
	console.log(prop1Pic);
	document.querySelector("#propTwoPic").src = `${prop2Pic}`;

	let prop3Pic = props[3][1].primary_photo.href;
	console.log(prop1Pic);
	document.querySelector("#propThreePic").src = `${prop3Pic}`;

	let prop4Pic = props[4][1].primary_photo.href;
	console.log(prop1Pic);
	document.querySelector("#propFourPic").src = `${prop4Pic}`;

	let prop5Pic = props[5][1].primary_photo.href;
	console.log(prop1Pic);
	document.querySelector("#propFivePic").src = `${prop5Pic}`;

	let prop6Pic = props[6][1].primary_photo.href;
	console.log(prop1Pic);
	document.querySelector("#propSixPic").src = `${prop6Pic}`;
	
	// PROPERTY PRICE!!


	let prop1Price = props[1][1].list_price;
	prop1Price = prop1Price.toLocaleString('en-US');
	console.log(prop1Price);
	document.querySelector('#propOnePrice').innerHTML = `$${prop1Price}`;

	let prop2Price = props[0][1].list_price;
	prop2Price = prop2Price.toLocaleString('en-US');
	console.log(prop2Price);
	document.querySelector('#propTwoPrice').innerText = `$${prop2Price}`;

	let prop3Price = props[3][1].list_price;
	prop3Price = prop3Price.toLocaleString('en-US');
	console.log(prop3Price);
	document.querySelector('#propThreePrice').innerText = `$${prop3Price}`;

	let prop4Price = props[4][1].list_price;
	prop4Price = prop4Price.toLocaleString('en-US');
	console.log(prop4Price);
	document.querySelector('#propFourPrice').innerText = `$${prop4Price}`;

	let prop5Price = props[5][1].list_price;
	prop5Price = prop5Price.toLocaleString('en-US');
	console.log(prop5Price);
	document.querySelector('#propFivePrice').innerText = `$${prop5Price}`;

	let prop6Price = props[6][1].list_price;
	prop6Price = prop6Price.toLocaleString('en-US');
	console.log(prop6Price);
	document.querySelector('#propSixPrice').innerText = `$${prop6Price}`;

	// PROPERTY BEDS!!

	let prop1Beds = props[2][1].description.beds;
	console.log(prop1Beds)
	document.querySelector('#propOneBeds').innerText = `${prop1Beds}`;

	let prop2Beds = props[0][1].description.beds;
	console.log(prop2Beds)
	document.querySelector('#propTwoBeds').innerText = `${prop2Beds}`;

	let prop3Beds = props[3][1].description.beds;
	console.log(prop3Beds)
	document.querySelector('#propThreeBeds').innerText = `${prop3Beds}`;

	let prop4Beds = props[4][1].description.beds;
	console.log(prop4Beds)
	document.querySelector('#propFourBeds').innerText = `${prop4Beds}`;

	let prop5Beds = props[5][1].description.beds;
	console.log(prop5Beds)
	document.querySelector('#propFiveBeds').innerText = `${prop5Beds}`;

	let prop6Beds = props[6][1].description.beds;
	console.log(prop6Beds)
	document.querySelector('#propSixBeds').innerText = `${prop6Beds}`;

	// PROPERTY BATHS!!!

	let prop1Baths = props[2][1].description.baths
	console.log(prop1Baths)
	document.querySelector('#propOneBaths').innerText = `${prop1Baths}`

	let prop2Baths = props[0][1].description.baths
	console.log(prop2Baths)
	document.querySelector('#propTwoBaths').innerText = `${prop2Baths}`
	
	let prop3Baths = props[3][1].description.baths
	console.log(prop3Baths)
	document.querySelector('#propThreeBaths').innerText = `${prop3Baths}`

	let prop4Baths = props[4][1].description.baths
	console.log(prop4Baths)
	document.querySelector('#propFourBaths').innerText = `${prop4Baths}`

	let prop5Baths = props[5][1].description.baths
	console.log(prop5Baths)
	document.querySelector('#propFiveBaths').innerText = `${prop5Baths}`

	let prop6Baths = props[6][1].description.baths
	console.log(prop6Baths)
	document.querySelector('#propSixBaths').innerText = `${prop6Baths}`
	 




	// let price = document.querySelectorAll('#propPrice')
	// price.forEach((price,prop) =>{
	// 	props.forEach(((props, prop)=>{
	// 		price.innerText = (props[prop][1].list_price)
	// 	}))
	// })
	// props.forEach((props) => {
	// 	let beds = document.querySelectorAll('#propBeds')
	// 	beds.forEach((beds)=> {
	// 		beds.innerText = props[1].description.beds
	// 	})

	// 	let pic = document.querySelectorAll('#propPic')
	// 	pic.forEach(function(pic, index){
	// 	pic.src = props[1].primary_photo
	// 	})

	// 	let baths = document.querySelectorAll('#propBaths')
	// 	baths.forEach((baths, index)=> {
	// 	baths.innerText = props[1].description.baths
	// 	})
	// 	let price = document.querySelectorAll('#propPrice')
	// 	price.forEach((price, index)=> {
	// 	price.innerText = props[1].list_price
	// 	})
	// })
	
	
	
			// beds.innerText = props[i][1].description.beds
			// baths.innerText = props[1][1].description.baths
			// beds.innerText = props[1][1].description.beds
			// price.innerText = props[1][1].description.list_price
}
	




	// 	// propPics.forEach(propPics => {
	// 	// 	document.querySelectorAll('#propPic').src = element[1].primary_photo.href 
	// 	// })
	// 	// console.log(element[1].primary_photo.href)
	// })
	

	
	// document.querySelector('#propPic').src = `${image}`
	// document.querySelector('#propPrice').innerText = `${price}`
	// document.querySelector('#propBaths').innerText = `${baths}`
	// document.querySelector('#propBeds').innerText = `${beds}`
	// let image = data.data.results[0].primary_photo.href
	// let price = data.data.results[0].list_price
	// let baths = data.data.results[0].description.baths
	// let beds = data.data.results[0].description.beds
	// return data.data.results;
	// console.log(price)
	// console.log(baths)
	// console.log(beds)
getProperty()
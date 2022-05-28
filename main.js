const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
		'X-RapidAPI-Key': '1d69d7893amsh788b07db274a5a5p1be532jsn3c7b30139e1d'
	}
};
const getProperty = async() => {
		
	const response = await fetch('https://us-real-estate.p.rapidapi.com/for-sale?offset=0&limit=10&state_code=MI&city=Detroit&sort=newest', options)
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

	// PROPERTY IMAGES!!!

	let prop1Pic = props[1][1].primary_photo.href;
	console.log(prop1Pic);
	document.querySelector("#propOnePic").src = `${prop1Pic}`;

	let prop2Pic = props[2][1].primary_photo.href;
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
	console.log(prop1Price);
	document.querySelector('#propOnePrice').innerHTML = `${prop1Price}`;

	let prop2Price = props[2][1].list_price;
	console.log(prop2Price);
	document.querySelector('#propTwoPrice').innerText = `${prop2Price}`;

	let prop3Price = props[3][1].list_price;
	console.log(prop3Price);
	document.querySelector('#propThreePrice').innerText = `${prop3Price}`;

	let prop4Price = props[4][1].list_price;
	console.log(prop4Price);
	document.querySelector('#propFourPrice').innerText = `${prop4Price}`;

	let prop5Price = props[5][1].list_price;
	console.log(prop5Price);
	document.querySelector('#propFivePrice').innerText = `${prop5Price}`;

	let prop6Price = props[6][1].list_price;
	console.log(prop6Price);
	document.querySelector('#propSixPrice').innerText = `${prop6Price}`;

	// PROPERTY BEDS!!

	let prop1Beds = props[1][1].description.beds;
	console.log(prop1Beds)
	document.querySelector('#propOneBeds').innerText = `${prop1Beds}`;

	let prop2Beds = props[2][1].description.beds;
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

	let prop1Baths = props[1][1].description.baths
	console.log(prop1Baths)
	document.querySelector('#propOneBaths').innerText = `${prop1Baths}`

	let prop2Baths = props[2][1].description.baths
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
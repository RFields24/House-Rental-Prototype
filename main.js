const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
		'X-RapidAPI-Key': '1d69d7893amsh788b07db274a5a5p1be532jsn3c7b30139e1d'
	}
};
const getProperty = async() => {
		
	// const response = await fetch('https://us-real-estate.p.rapidapi.com/for-sale?offset=0&limit=6&state_code=MI&city=Detroit&sort=newest', options)
	// const data = await response.json();
	// let props = Object.entries(data.data.results)
	// console.log(props)

	let price = document.querySelectorAll('#propPrice')
	price.forEach((price,prop) =>{
		props.forEach(((props, prop)=>{
			price.innerText = (props[prop][1].list_price)
		}))
	})
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
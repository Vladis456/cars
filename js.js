const url = 'http://localhost:3000/cars'

const getData = (url) => {
	fetch(url)
	.then(response => response.json())
	.then(data => console.log(data))
}

getData(url)
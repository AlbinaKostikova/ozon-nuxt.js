const postData = () => {
  return fetch('https://localhost:3000/goods' , {
    method: 'POST',
    body: JSON.stringify({
		id: 23,
		title: "Игра Onrush (PS4 Sony)",
		price: 1794,
		sale: true,
		img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
		category: "Игры и софт"
	}),
    headers: {
      'Content-type': 'application/json; chrset=UTF-8',
    }
  })
  .then(res => res.json())
}
export default postData
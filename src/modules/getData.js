const getData = () => {
  return fetch('https://localhost:3000/goods')
    .then((response) => {
      return response.json()
    })
}
export default getData
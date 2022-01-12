async function getCards() {
  let response = await fetch('https://jsonplaceholder.typicode.com/photos')
  let cards = await response.json()
  cards = cards.splice(0, 11)

  let list = document.querySelector('.cards')
 
  let key
  for (key in cards) {
    list.innerHTML += `
      <div class="card-date">
        <h3 class="card-name">${cards[key].title}</h3>
        <img src="${cards[key].url}" width="400">
      </div>
    `
  }

}

getCards()

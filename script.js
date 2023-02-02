let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name
  this.author = author
  this.pages = `${pages} pages.`
  this.read = read
  this.switchRead = function() {
    if (this.read === true) {
      this.read = false
    } else {
      this.read = true
    }
  }
}

function addBookToLibrary() {
  const name = document.querySelector('#name').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value
  const read = document.querySelector('#yes').checked
  const book = new Book(name, author, pages, read)

  myLibrary.unshift(book)
}

function addCard() {
  const gridContainer = document.querySelector('.grid-container')
  const divs = gridContainer.querySelectorAll('div')

  for (let i = 0; i < divs.length; i++) {
    divs[i].remove()
  }

  for (let book in myLibrary) {
    const card = document.createElement('div')
    const name = document.createElement('div')
    const author = document.createElement('div')
    const pages = document.createElement('div')
    const buttonDiv = document.createElement('div')
    const readButton = document.createElement('button')
    const tick = document.createElement('div')
    const tack = document.createElement('div')
    const removeButton = document.createElement('button')
    const removeIcon = document.createElement('div')

    card.classList.add('card')
    name.classList.add('name')
    author.classList.add('author')
    pages.classList.add('pages')
    readButton.classList.add('read-button')
    tack.classList.add('tack')
    removeButton.classList.add('remove-button')
    removeIcon.classList.add('remove-icon')

    name.textContent = myLibrary[book].name
    author.textContent = myLibrary[book].author
    pages.textContent = myLibrary[book].pages

    document.querySelector('.grid-container').appendChild(card)
    card.appendChild(name)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(buttonDiv)
    buttonDiv.appendChild(readButton)
    readButton.appendChild(tick)
    tick.appendChild(tack)
    buttonDiv.appendChild(removeButton)
    removeButton.appendChild(removeIcon)

    if (myLibrary[book].read === true) {
      tick.classList.add('tick-true')
    } else {
      tick.classList.add('tick-false')
    }

    readButton.addEventListener('click', () => {
      if (myLibrary[book].read === true) {
        tick.classList.remove('tick-true')
        tick.classList.add('tick-false')
        myLibrary[book].read = false
      } else {
        tick.classList.remove('tick-false')
        tick.classList.add('tick-true')
        myLibrary[book].read = true
      }
    })

    removeButton.addEventListener('click', () => {
      myLibrary.splice(book, 1)
      addCard()
    })
  }
}

function displayForm() {
    const shadow = document.createElement('div')

    shadow.classList.add('shadow')
    document.querySelector('.page-container').appendChild(shadow)
    shadow.innerHTML = 				
    `<div class="form">
      <form action="">
            <div class="form-div">
                <label for="name">Name</label>
                <input id="name" type="text">
            </div>
            <div class="form-div">
                <label for="author">Author</label>
                <input id="author" type="text">
            </div>
            <div class="form-div">
                <label for="pages">Number of pages</label>
                <input id="pages" type="number">
            </div>
            <div class="form-read">
                <legend>Read:</legend>
                <input type="checkbox" name="read" id="yes">
            </div>
        <div class="form-div">
            <button id="submit" type="button">ADD</button>
        </div>
      </form>
    </div>`

    document.querySelector('#submit').addEventListener('click', () => {
      addBookToLibrary()
      document.querySelector('.shadow').remove()
      addCard()
    })
}

addCard()

document.querySelector('.add-card').addEventListener('click', () => {
  displayForm()
})
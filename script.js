let myLibrary = [];

function Book(name, author, pages) {
  this.name = name
  this.author = author
  this.pages = `${pages} pages.`
  this.read = ""
}

function addBookToLibrary() {
  // do stuff here
}

function displayForm() {
    const shadow = document.createElement('div')

    shadow.classList.add('shadow')
    document.querySelector('.page-container').appendChild(shadow)
    shadow.innerHTML = 				
    `<div class="form">
      <form action="">
        <fieldset class="infos">
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
        </fieldset>
        <fieldset class="read">
            <div class="form-read">
                <legend>Read:</legend>
                <input type="checkbox" name="read" id="yes">
            </div>
        </fieldset>
        <div class="form-div">
            <button id="submit" type="#">ADD</button>
        </div>
      </form>
    </div>`
}

displayForm()
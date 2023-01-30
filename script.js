const addButton = document.querySelector('.add-book')

const myLibrary = []

function newBook(name, author, pages, read) {
    this.name
    this.author
    this.pages
    this.read
}

addButton.addEventListener('click', () => {
    const shadow = document.createElement('div')
    
    document.querySelector('.add-book').classList.add('unclickable')
    shadow.classList.add('shadow')
    document.querySelector('.page-container').appendChild(shadow)
    shadow.innerHTML = `<div class="form">
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
                                        <input id="pages" type="text">
                                    </div>
                                </fieldset>
                                <fieldset class="read">
                                    <div class="form-div">
                                        <legend>Did you read it yet?</legend>
                                        <div>
                                            <label for="yes">Yes</label>
                                            <input type="radio" name="read" id="yes">
                                            <label for="no">No</label>
                                            <input type="radio" name="read" id="no">
                                        </div>
                                    </div>
                                </fieldset>
                                <div class="form-div">
                                    <button type="submit">ADD</button>
                                </div>
                            </form>
                        </div>`      
})
const addButton = document.querySelector('.add-book')
const myLibrary = []

function newBook(name, author, pages) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = readResult() 
    
    function readResult() {
        if (document.getElementById('yes').checked) {
            return 'yes'
        } else if (document.getElementById('no').checked) {
            return 'no'
        }
    }
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
                                        <input id="pages" type="number">
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
                                    <button id="submit" type="#">ADD</button>
                                </div>
                            </form>
                        </div>`   
                        
    document.getElementById('submit').addEventListener('click', () => {
        const name = document.getElementById('name').value
        const author = document.getElementById('author').value
        const pages = document.getElementById('pages').value
        const obj = new newBook(name, author, pages)

        if (name !== "" && author !== "" && pages !== "" && (document.getElementById('yes').checked || document.getElementById('no').checked)) {
            myLibrary.unshift(obj)
            shadow.innerHTML = ""
            shadow.classList.remove('shadow')
        } else {
            alert('Please, fill all reauired fields. <3')
        }
    })

    
})





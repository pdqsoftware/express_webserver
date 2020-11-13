console.log('Client side javascript file is loaded!')

// fetch is asynchronous
// fetch('http://puzzle.mead.io/puzzle')
//     .then((response) => {
//         response.json()
//         .then((data) => {
//             console.log(`data: ${data}`)
//             console.log(data)
//         })
//     })


// This is the event listener for the form submission, executed when 'Search' is pressed on the 
// index.html form
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    // console.log(`Location matched: ${location}`)

    if (location) {
        messageOne.textContent = 'Fetching...'
        messageTwo.textContent = ''

        // fetch('http://localhost:3000/weather?location=' + location)
        fetch('/weather?location=' + location)
        .then((response) => {
            response.json()
            .then((data) => {
                if (data.error) {
                    // console.log(`Error: ${data.error}`)
                    messageOne.textContent = data.error
                } else {
                    // console.log(data.location)
                    // console.log(data.forecast)
                    messageOne.textContent = data.location 
                    messageTwo.textContent = data.forecast
                }
            })
        })

    } else {
        console.log('You must enter a location!')
        messageOne.textContent = 'You must enter a location!'
    }

    
})
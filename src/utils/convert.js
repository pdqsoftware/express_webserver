const convertToCelcius = (farenheit) => {
    // console.log(farenheit)
    return  parseFloat(((farenheit - 32) * 5 / 9).toFixed(1))
}

module.exports = convertToCelcius
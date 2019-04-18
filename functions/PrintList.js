const  {LoadData} = require("./utils")

const printList = () => {
    const data = LoadData() 
    return( data )
}
module.exports = printList
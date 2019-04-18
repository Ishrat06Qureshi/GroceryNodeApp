const  {LoadData , ItemAlreadyExist } = require("./utils") 

const priceOf = ( item ) => {
  const Data = LoadData() 
   if (ItemAlreadyExist(Data , item)){
        const Entry = Data.find((entry) => entry.item === item)
        console.log(Entry)
        return (Entry.Price)
      }
    else{
      console.log(`${item} does not found `)
    }

}
module.exports = priceOf
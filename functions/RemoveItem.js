const  {LoadData , SaveDataToDatabase , ItemAlreadyExist} = require("./utils") 

const remove = ( item ) => {
  const Data = LoadData() 
  if(ItemAlreadyExist(Data , item)){
  const updated=Data.filter((entry) => entry.item !== item)
  SaveDataToDatabase(updated)}
  else{
    console.log("no such data found")
  }
}
module.exports = remove
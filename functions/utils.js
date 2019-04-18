const fs = require("fs")

const LoadData = () =>{
try{
 const data = fs.readFileSync("data.txt")
 const parsedData = JSON.parse(data)
 return ( parsedData )
}
catch{
   return []
 }
}
const ItemAlreadyExist = ( data , checkitem ) =>{
  const AlreadyExistItem = data.find( ( entry ) => ( entry.item === checkitem) )
  return AlreadyExistItem
}

const SaveDataToDatabase = ( data ) =>{
const stringfyData = JSON.stringify(data)
fs.writeFileSync("data.txt" , stringfyData)
}
module.exports = {
    LoadData,
    SaveDataToDatabase,
    ItemAlreadyExist
}
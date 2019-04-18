const { LoadData ,SaveDataToDatabase , ItemAlreadyExist} = require("./utils")
const addItem = ( item , newPrice ) => {

  const data= LoadData()
   var  newData={}
  const statusOfItem = ItemAlreadyExist( data , item )
   if (statusOfItem)
   {
      newData=UpdateData(data , item , newPrice)
      SaveDataToDatabase(newData)
   }
  else{
    
    newData.item = item
    newData.Price =newPrice
    const tempData = [...data , newData]
    SaveDataToDatabase( tempData )
    //  console.log("updated data ",UpdateData(data , item , newPrice))
    return false
}


 

}
 


 const UpdateData = ( data , item , newPrice) =>{
   const updatedData = data.map(( entry ) => {
     if( entry.item === item) {
       return ({
         item:entry.item,
         Price : Number( entry.Price) + Number(newPrice)
       })
    
     }
     else{
       return entry
     }
   })
   return updatedData
 }
module.exports=addItem
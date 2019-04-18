const yargs =  require("yargs")
const addItem = require("./functions/AddItem")
const printList = require("./functions/PrintList")
const priceOf = require("./functions/Priceof")
const remove = require("./functions/RemoveItem")

//to add a grocery item
yargs.command({

   command:"add",
   describe:"to add the item",
   builder:{
       item:{
           describe:"item to be added in data base",
           alias:"i",
           defaultOption:true,
           type:"string"
       },
       price:{
        describe:"price of the item to be added in data base",
        alias:"p",
        defaultOption:true,
        type:"string"
    },
   },

   handler:( argv ) =>{
    const { item , price} = argv 
    const error = (item && price) ? addItem( item , price) : true
    !error ?( console.log(`item with name ${item} and Price ${price} has been added to the database`)):(console.log("something went wrong"))
   }
})

//to print all the items of a list 
yargs.command({

    command:"print",
    describe:"to dsplay the list items ",
    handler:( argv ) =>{

            const Data = printList()
            Data.length > 0?
            (Data.map(( entry ) => {
                    console.log("item", entry.item)
                    console.log("price",entry.Price)
            })): ( console.log("nothing to remove ") )
        
        
    }
 })

 // to compute the price of a particular item
 yargs.command({
    command:"priceof",
    describe:"to display the price of certain item",
    builder:{
            item:{
                    describe:"item  for finding Price ",
                    alias:"i",
                    defaultOption:true,
                    type:"string"
            },
        },
    handler:( argv ) => {
                const { item } = argv 
                const price = priceOf(item)
                price?console.log(`item ${item} has a  price  of ${price}`):null
    }
 })
 //to remove a item
 yargs.command({
    command:"remove",
    describe:"to remove a  certain item",
    builder:{
            item:{
                    describe:"item to be removed ",
                    alias:"i",
                    defaultOption:true,
                    type:"string"
            },
        },
    handler:( argv ) => {
                const { item } = argv 
                remove(item)
                // console.log(`item ${item} has been removed`)
                console.log("done")
    }
 })
yargs.parse()


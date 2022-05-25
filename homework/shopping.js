
let cartArray=[]


function shoppingCart(actionString, item, cartArray=[]){
    let newCartArray=cartArray.slice()
    switch(actionString){
        case "add_to_cart":
            // cartArray.push(item)
            newCartArray.push(item)
            return newCartArray;
  
        case "remove_same_from_cart":
            for(let i = 0; i < cartArray.length; i++){
                if(cartArray[i].id==item.id){
                    cartArray.splice(i, 1)
                    newCartArray= cartArray
                }
            }return newCartArray;

        case "remove_all_same_from_cart":
            let tempArray = []
            for(let i = 0; i < cartArray.length; i++){
                if(cartArray[i].type!=item.type){
                    tempArray.push(cartArray[i])
                }
            }return tempArray;
            
        case "empty_cart":
            newCartArray = []
            return newCartArray
        default:
            console.log('default');
            break; 
    }
}
let item = {id:1, name: "apple", type: "food"}
let item2 = {id:2, name: "oranges", type: "food"}
let item3 = {id:3, name: "banana", type: "food"}
let item4 = {id:4, name: "english book", type: "book"}

cartArray = shoppingCart("add_to_cart", item, cartArray)
cartArray = shoppingCart("add_to_cart", item2, cartArray)
cartArray = shoppingCart("add_to_cart", item3, cartArray)
cartArray = shoppingCart("add_to_cart", item4, cartArray)
console.log(cartArray)

let removeItem={id:2}
cartArray = shoppingCart("remove_same_from_cart", removeItem, cartArray)
console.log(cartArray)

let removeSameTypeItems={type: "food"}
cartArray = shoppingCart("remove_all_same_from_cart", removeSameTypeItems, cartArray)
console.log(cartArray)

cartArray = shoppingCart("empty_cart", null, cartArray)
console.log(cartArray)
actionString=''
item={
    id:0
}

cartArray=[]


function shoppingCart(actionString, item, cartArray=[]){
    let newCartArray=cartArray.slice()
    switch(actionString){
        case "add_to_cart":
            cartArray.push(item)
            newCartArray.push(cartArray)
            console.log(newCartArray)
            return newCartArray;

  
        case "remove_same_from_cart":
            for(let cart_item of cartArray){
                if(cart_item==item.id){
                    cartArray.pop()
                    return newCartArray;
                }
            }
        // case "remove_all_same_from_cart":
        //     if(cart_item ==cart_items){
        //         cartArray.pop()
        //         return newCartArray; 
        //     }
            
        // case "empty_cart":
        //     for(let item_of_cart of cartArray){
        //         cartArray.pop()
        //         return newCartArray;
        //     }
        default:
            console.log('default');
            break; 
    }
}
// let shoppingCart1 = shoppingCart(actionString="add_to_cart")
let shoppingCart1 = shoppingCart(actionString='remove_same_from_cart', item.id)
// console.log(shoppingCart1)
// shoppingCart(actionString2, item)
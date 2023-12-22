let shoppingList = ['milk', 'egg', 'bread']
shoppingList.push('juice', 'bacon')
console.log(shoppingList)

shoppingList.pop()
console.log(shoppingList)


function check(shoppingList){
    if(shoppingList.length > 5) {
        console.log('your trolley is full.')
    }
    
    for(let i= 0; i < shoppingList.length; i++) [
        console.log(`${i+1} ${shoppingList[i]}`)
    ]

}

let NewShoppingList = ['milk', 'egg', 'bread', 'juice', 'bacon']
check(NewShoppingList)




let shoppingLists = [
    { name: 'milk', price: 2.5, quantity: 1 },
    { name: 'egg', price: 1.2, quantity: 12 },
    { name: 'bread', price: 1.5, quantity: 2 },
    { name: 'juice', price: 3.0, quantity: 1 }
  ];

  function isInShoppingList(itemName) {
    for (let i = 0; i < shoppingList.length; i++) {
      if (shoppingLists[i].name === itemName) {
        return true;
      }
    }
    return false;
  }


let isItemInList = isInShoppingList('milk');

console.log(isItemInList);

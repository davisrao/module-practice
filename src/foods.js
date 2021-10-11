"use strict";

function choice(items){
    let randIdx = Math.floor(Math.random() * items.length);
    return items[randIdx];
}

function remove(items,item){
    let index = items.indexOf(item);
    if(index !== -1){
        items.splice(index,1)
        return item
    }
}

export {choice,remove};
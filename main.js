const Stack = function() {
 
const newobj = {
  items : [],
  add: function (thing){this.items.push(thing)},
  remove: function(thing){return this.items.pop(thing)},
  peek: function(){return this.items[this.items.length-1]}
}

return newobj
  }


const Queue = function() {
  const newObj = {

    items: [],
    add: function (thing){this.items.push(thing) },
    remove: function (thing){return this.items.shift(thing)},
    peek: function(){return this.items[0]}
  }

  return newObj
  }

  


module.exports = {
  Stack,
  Queue,
}
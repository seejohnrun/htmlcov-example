var Collection = function () {
  this.backing = [];
};

Collection.prototype = {

  // Add an item to the collection
  add: function (item) {
    this.backing.push(item);
  },

  // Remove an item from the collection
  remove: function (item) {
    var index = this.backing.indexOf(item);
    if (index !== -1) {
      this.backing.splice(index, 1);
    }
  },

  // Count the elements
  count: function () {
    return this.backing.length;
  }

};

module.exports = Collection;

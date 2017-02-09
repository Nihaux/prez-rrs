var riri = {
  name: 'riri',
  speak: function () {
    setTimeout(function() {
      console.log('my name is ' + this.name);
    }, 1000);
  }
}

riri.speak();

var fifi = {
  name: 'fifi',
  speak: function () {
    setTimeout(function() {
      console.log('my name is ' + this.name);
    }.bind(this), 1000);
  }
};

fifi.speak();

var fifi = {
  name: 'fifi',
  speak: function () {
    var that = this;
    setTimeout(function() {
      console.log('my name is ' + that.name);
    }, 1000);
  }
};

fifi.speak();

var loulou = {
  name: 'loulou',
  speak: function () {
    setTimeout(() => {
      console.log('my name is ' + this.name);
    }, 1000);
  }
};

loulou.speak();

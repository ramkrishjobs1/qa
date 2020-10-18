var cat = {
    lives: 9,
    jumps: () => {
      this.lives--;
    }
  }
var cat1 =  {
    lives: 9,
    jumps: function() {
      return this.lives--;
    }
  }

  console.log(cat1.jumps())
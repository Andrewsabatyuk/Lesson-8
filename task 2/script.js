function Ride(){
    this.diamert;
    this.setDiametr = function(myDiametr){
        this.diamert = myDiametr;
    }
    this.getDiametr = function(){
        return this.diamert;
    }
}

Ride.prototype.findDiametr = function(value){
    return this.diamert += value;
}

function Wheels(){
    this.size;
    this.setSize = function(yourSize){
      this.size = yourSize;
    }
    this.getSize = function() {
      return this.size;
    }
  }
  
  Wheels.prototype.increaseSize = function(value){
    return this.size += value;
  }
  Wheels.prototype.decreaseSize = function(value){
    return this.size -= value;
  }

  function Body(){
    this.color;
    this.setColor = function(yourColor){
      this.color = yourColor;
    }
    this.getColor = function() {
      return this.color;
    }
  }

  function Car(releaseYear){
    this.model;
    this.releaseYear = releaseYear;
    this.setModel = function(yourModel){
      this.model = yourModel;
    }
    this.getModel = function(){
      return this.model;
    }
    this.body = new Body();
    this.wheels = new Wheels();
    this.ride = new Ride();
  }
  
  Car.prototype.setDiametr = function(myDiametr){
      this.ride.setDiametr(myDiametr);
  }
  Car.prototype.getDiametr = function(){
      return this.ride.getDiametr();
  }
  Car.prototype.increaseDiametr = function (value) {
    this.ride.increaseDiametr(value);
  };
  Car.prototype.findDiametr = function (value) {
    this.ride.findDiametr(value);
  };
  Car.prototype.setSize = function (yourSize) {
    this.wheels.setSize(yourSize);
  };
  Car.prototype.getSize = function () {
    return this.wheels.getSize();
  };
  Car.prototype.increaseSize = function (value) {
    this.wheels.increaseSize(value);
  };
  Car.prototype.decreaseSize = function (value) {
    this.wheels.decreaseSize(value);
  };
  Car.prototype.setColor = function (yourColor) {
    this.body.setColor(yourColor);
  };
  Car.prototype.getColor = function () {
    return this.body.getColor();
  };
  let car= new Car(2010);
  car.setColor('black');
  car.setSize(32);
  car.setDiametr(22);
  car.setModel('Volkswagen');

  Car.prototype.Show = function () {
    console.log(car.getModel()+', рік випуску:'+this.releaseYear+', колір:'+car.getColor()+', розмір катків:'+car.getSize()+', діаметр руля:'+car.getDiametr());
  };
  car.Show();
  car.increaseSize(3);
  car.Show();
  car.findDiametr(5);
  car.Show();
  car.Show();
  car.increaseSize(5);
  car.Show();
  car.findDiametr(7);
  car.Show();
  //thi is task 2 for lesson #8 js core
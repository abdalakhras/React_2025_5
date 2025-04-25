

class Cars {
    constructor(brand , model, color,engPower,price){
        //attribute :
        this.brand = brand
        this.model = model 
        this.color = color
        this.engPower = engPower
        this.price = price
    }
    //method :
    startEngine(){
        console.log(`${this.brand} ${this.color} Engine Started`)  
    }

    stopEngine(){
        console.log(`${this.model} ${this.engPower} Engine Stop `)
    }
}
var car1 = new Cars('bmw','x6','blue', 3000, 50000)
console.log(car1)
car1.startEngine()
car1.stopEngine()
var car2 = new Cars('mercedes', 'G-wagon', 'white', 2500 , 60000)
console.log(car2)
car2.startEngine()
car2.stopEngine()


//homeWork 1 : 

class Persone {
    //attributes,properities : 
    constructor(name , family , age , gender , height){
        this.name = name 
        this.family = family
        this.age = age
        this.gender = gender
        this.height = height

    }
    //function , methode : 
    walk(){
        console.log(`${this.name} ${this.family} is walking`)
    }
    eat(){
        console.log(`${this.name} eats beacuse she is ${this.gender}`)
        
    }
}

const man = new Persone('Adam', 'Jones' , 30 , 'male' , 175 )
const women = new Persone('Hala', 'Jones' , 25 , 'Female' , 166)

console.log (man)
console.log (women)
man.walk()
women.eat()

//homeWork 2,1 : 

class Animal {
    constructor(name){
        this.name = name 
    }
    speak(){
        console.log(`${this.name} is meowing`)
    }
}
var animal = new Animal ('cat')
console.log(animal)
animal.speak()

class Dog extends Animal {

speak(){
    console.log(`${this.name} is barking`)
}
}
var animal1 = new Dog ('dog')
console.log(animal1)
animal1.speak()

//homeWork 2,2 : 

class CarFactory {
    constructor(name,color,price,year,model,maxSpeed,driveMode,engine){
        this.carName = name
        this.carColor = color 
        this.carPrice = price 
        this.manifactureYear = year
        this.carModel = model 
        this.speed = maxSpeed
        this.drive = driveMode
        this.carEngine = engine 
        this.engineStatus = false;
    }
    startEngine(){
        this.engineStatus ? console.log(`${this.carName} engine already started`)
                          : console.log(`${this.carName} engine is off`)  
    }
}

var factory1 = new CarFactory('BMW','white', 20.000, 2020,'X5','240 mph','3 driving mode','2500cc')
console.log(factory1)
factory1.startEngine()

// first sub Class
class Suv extends CarFactory{
    constructor(name,color,price,year,model,maxSpeed,driveMode,engine,chairs , height){
        super(name,color,price,year,model,maxSpeed,driveMode,engine)
        this.carSeats = chairs
        this.carHeight = height
        this.engineStatus = true
        this.drive = 'sport'
    }

    startEngine(){
        this.engineStatus ? console.log(`${this.carName} engine already started`)
        : console.log(`${this.carName} engine is off`)  
    }
    stopEngine(){

    }
    driveMode(){
        this.drive == 'sport'? console.log(`driving mode is ${this.drive}`) : console.log('driving mode is normal')
    }
}
var suvCar = new Suv ('mitsubishi','white', 20.000, 2022,'pajero','240 mph','','3500 cc','6 seats' , 2.2 + ' meters')
console.log(suvCar)
suvCar.startEngine()
console.log(suvCar.drive)
suvCar.driveMode()

//second sub Class
class PickUps extends CarFactory{
    constructor(name,color,price,year,model,maxSpeed,driveMode,engine,handleWighet, cylinder, fuelType){
        super(name, color, price, year,model,maxSpeed, driveMode,engine)
    this.wighet = handleWighet
    this.numOfCylinders = cylinder
    this.fueltupe = fuelType
    }
    startEngine(){
        this.engineStatus ? console.log(`${this.carName} engine already started`)
        : console.log(`${this.carName} engine is off`)  
    }
    stopEngine(){

    }
    driveMode(){
        this.drive == 'sport'? console.log(`driving mode is ${this.drive}`) : console.log('driving mode is normal')
    }
}

var pickUpCar = new PickUps('nissan','blue', 25.000, 2023,'highLux','240 mph','','3500 cc', "1.5 Tons" , 6 , 'diesel')

console.log(pickUpCar)
pickUpCar.driveMode()

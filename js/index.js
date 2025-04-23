

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
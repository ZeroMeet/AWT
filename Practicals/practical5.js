class vehicle{
    constructor(make,model,year){
        console.log("Super class called")
        this.make = make
        this.model = model
        this.year = year
    }
    getdetails() {
        
        console.log("The vehicle is "+this.make+" made "+this.model+" model "+this.year+" year ");
    }
}
class car extends vehicle{
    constructor(name,make,model,year)
    {
        console.log("Child car is called");
        super(make,model,year)
        this.name = name;
    }
    detailed(){
        console.log("name of car is "+this.name);
        this.getdetails();
    }
}
class motorcycle extends vehicle{
    constructor(name,make,model,year)
    {
        console.log("Child motorcycle is called");
        super(make,model,year)
        this.name = name;
    }
    detailed(){
        console.log("name of motorcycle is "+this.name);
        this.getdetails();
    }
}
const v1=new car("Toyota","man","zxi",2023)
v1.detailed()
console.log("................................................................")
const v2=new motorcycle("Suzuki","machine","racing",2022)
v2.detailed()

let classOne = class {
    constructor(myArg = 10) {
        this.myArg = myArg;
        console.log("constructor...."+myArg);
    }

    get multipleValue() {
        return  this.myArg * 2;
    }

    display() {
        console.log(this.multipleValue);
    }
}


class classTwo extends classOne {
    constructor(myArg) {
        super(myArg);
        console.log('class two instance');
    }
}

let classTwoInstance = new classTwo(20);
classTwoInstance.display();
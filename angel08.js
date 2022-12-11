class MyList extends Array {
    constructor(someArg) {
        super();
        this.someArg = [...someArg];
    }
}

let theList = new MyList("foo");

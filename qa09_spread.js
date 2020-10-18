var data = [[1,2,3],{id:2,name:'hi2'}];

var testFn = function(...params) {
    console.log(arguments);
    console.log(params[0]);
}
data = data.map((item) => {
    testFn(item);
    //console.dir({...item});
    return {...item, active: false}
  })

  console.dir("..."+data);
const appOperations = require('../src/appOperations');

test("multiplication property of zero", ()=>{
    expect(appOperations.multiply(5, 0)).toBe(0);
});

test("adding 2 values ", ()=>{
    expect(appOperations.add(5, 5)).toBe(10);
});


test("sub 2 values ", ()=>{
    expect(appOperations.substracttracting(15, 5)).toBe(10);
});

test("devide 2 values ",()=>{
    expect(appOperations.devide(15,5)).tobe(3);
});
test("mul 2 values",()=>{
    expect(appOperations.mul(2,3)).tobe(8);
})

//change added func for handle input values

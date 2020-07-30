const tap = require('tap')
const { calculate } = require('../src/controllers/vmsandservers')


const serverType = {
    "CPU": 4,
    "RAM": 64,
    "HDD": 100
};

const virtualMachine = [
    {
        "CPU": 1,
        "RAM": 16,
        "HDD": 10
    },
    {
        "CPU": 1,
        "RAM": 16,
        "HDD": 10
    },
    {
        "CPU": 2,
        "RAM": 32,
        "HDD": 100
    }
];


tap.test("should return a number", (childTest) => {
    const result = calculate(serverType, virtualMachine);
    tap.type(result, 'number');
    childTest.end()
});

tap.test("should be equal to 2", (childTest) => {
    const resultA = 2;
    const result = calculate(serverType, virtualMachine);
    tap.same(result, resultA);
    childTest.end()
});
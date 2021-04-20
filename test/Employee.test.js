const Employee = require("../lib/employee");

describe("Employee",()=> {
    it("Can instantiate Employee instance", ()=> {
        const str =new Employee ();
        expect(typeof(str)).toBe("object");
    })
});

it("Can set name via constructor arguments", ()=>{
    const name = "Bob";
    const str = new Employee(name);
    expect(str.name).toBe(name);
});

it("Can set id via constructor argument", ()=>{
    const testVaule =100;
    const str = new Employee("Foo",testVaule);
    expect(str.id).toBe(testVaule);
});

it("Can set email via constructor argument", ()=>{
    const testVaule = "test@test.com";
    const str = new Employee("Foo",1,testVaule);
    expect(str.email).toBe(testVaule);
});

describe("getName", ()=>{
    it("Can get name via getName()", ()=>{
        const testVaule ="Bob";
        const str = new Employee(testVaule);
        expect(str.name).toBe(testVaule);
    });
});

describe("getId", () => {
    it("Can get id via getId()", () => {
        const testValue = 100;
        const str = new Employee("Foo", testValue);
        expect(str.getId()).toBe(testValue);
    });
});
    
describe("getEmail", () => {
    it("Can get email via getEmail()", () => {
        const testValue = "test@test.com";
        const str = new Employee("Foo", 1, testValue);
        expect(str.getEmail()).toBe(testValue);
    });
});
    
describe("getRole", () => {
    it("getRole() should return \"Employee\"", () => {
        const testValue = "Employee";
        const str = new Employee("Bob", 1, "test@test.com");
        expect(str.getRole()).toBe(testValue);
    });
});

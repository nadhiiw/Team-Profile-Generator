const Manager = require('../lib/manager');

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const str = new Manager("Foo", 1, "test@test.com", testValue);
    expect(str.officeNumber).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const str = new Manager("Foo", 1, "test@test.com", 100);
    expect(str.getRole()).toBe(testValue);
  });
  
  test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const str = new Manager("Foo", 1, "test@test.com", testValue);
    expect(str.getOfficeNumber()).toBe(testValue);
  });
  
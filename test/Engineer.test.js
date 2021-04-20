const Engineer = require('../lib/engineer')


test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const str = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(str.github).toBe(testValue);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const str = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(str.getRole()).toBe(testValue);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const str = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(str.getGithub()).toBe(testValue);
  });
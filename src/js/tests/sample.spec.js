import returnFive from '../actions/sample'

describe("Sample test suite", () => {
    
    it("Example test case one", () => {
        //Demonstrate that it works
        let testNumberOne = 1;
        let testNumberTwo = 1;
        expect(testNumberOne).toBe(testNumberTwo);
    });
    
    
    it("Demonstrate that import is working", () => {
        expect(returnFive()).toBe(5);
    })
});

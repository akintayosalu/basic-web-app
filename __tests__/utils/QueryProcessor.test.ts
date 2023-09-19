import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return Andrew description', () => {
        const query = "andrew";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Your Andrew ID is asalu."
          ));
    });

    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Your name is Akintayo."
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should largest numbers', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 2, 3, 4?")).toEqual("4");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 42 multiplied by 69?")).toEqual("2898");
    });

    test('should minus numbers', () => {
        expect(QueryProcessor("What is 1 minus 34?")).toEqual("-33");
    });

    test('should power numbers', () => {
        expect(QueryProcessor("What is 2 to the power of 3?")).toEqual("8");
    });
});
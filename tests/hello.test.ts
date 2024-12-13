import { sayHello } from "../src/hello";

describe('sayHello', function (): void {
    it('return Hello for you', function(): void {
        expect(sayHello("for you")).toBe("Hello for you");
    })
})

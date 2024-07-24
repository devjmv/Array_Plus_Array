import { describe, it, expect } from "vitest";
import { plusArray } from "../src/app";

describe('Optener la suma de todos los elementos de dos array', () => {
    it('1 array [1, 2, 3], segundo array [4, 5, 6] esperando 21 como resultado', () => {
        expect(plusArray([1, 2, 3], [4, 5, 6])).toBe(21);
    })

    it('1 array [-1, -2, -3], segundo array [-4, -5, -6] esperando -21 como resultado', () => {
        expect(plusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21);
    })

    it('1 array [0, 0, 0], segundo array [4, 5, 6] esperando 15 como resultado', () => {
        expect(plusArray([0, 0, 0], [4, 5, 6])).toBe(15);
    })

    it('1 array [100, 200, 300], segundo array [400, 500, 600] esperando 2100 como resultado', () => {
        expect(plusArray([100, 200, 300], [400, 500, 600])).toBe(2100);
    })

})


import "@testing-library/jest-dom";
import { formatDate } from "../helpers/HelperDate";

describe("HelperDate Tests", ()=>{
    it("formatDate test", ()=>{
        const exampleDate: string = "2019-12-06T17:50:17.735Z";
        const test = formatDate(exampleDate);

        expect(typeof test).toBe("string");
        expect(test).toBe("6 de Diciembre de 2019");
    })
})
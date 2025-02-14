import { Validator } from "./validator";

export class ZipCodeValidator implements Validator {
    isValid(s: string): boolean {
        const regex = /^[0-9]{5}-[0-9]{3}$/;
        return regex.test(s);
    }
}
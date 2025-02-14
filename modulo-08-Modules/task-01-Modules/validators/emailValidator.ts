export {}

// Modules
import { Validator } from './validator';

export class EmailValidator implements Validator {
    isValid(s: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(s);
    }
};
import { HasFormatter } from "../interfaces/HasFormatter"

export class Payment implements HasFormatter {

    constructor(
        public recipient: string,
        public details: string,
        public amount: number,
    ){}
    format() {
        return `This customer ${this.recipient} is owed ${this.amount} for ${this.details}`
    }
}
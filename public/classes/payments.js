export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `This customer ${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}

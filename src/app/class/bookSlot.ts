export class BookSlot {
    private _fullName: string;
    private _email: string;
    private _phoneNumber: string;
    private _service: string;
    private _date: string;
    private _message: string;

    public constructor(
        fullName: string,
        email: string,
        phoneNumber: string,
        service: string,
        date: string,
        message: string
    ) {
        this._fullName = fullName;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._service = service;
        this._date = date;
        this._message = message
    }

    public get fullName(): string {
        return this._fullName;
    }

    public set fullName(value: string) {
        this._fullName = value;
    }
    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }

    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    public get service(): string {
        return this._service;
    }

    public set service(value: string) {
        this._service = value;
    }

    public get date(): string {
        return this._date;
    }

    public set date(value: string) {
        this._date = value;
    }

    public get message(): string {
        return this._message;
    }

    public set message(value: string) {
        this._message = value;
    }

    public toJSON(): JSON {
        return {
            fullName: this._fullName,
            email: this._email,
            phoneNumber: this._phoneNumber,
            service: this._service,
            date: this._date,
            message: this._message
        } as any as JSON;
    }
}
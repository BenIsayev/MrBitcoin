export class Contact {

    constructor(
        public name?: string,
        public email?: string,
        public phone?: string,
        public _id?: string,
    ) {

    }

    setContact?(name: string, email: string, phone: string) {
        this.name = name
        this.phone = phone
        this.email = email
    }

    setId?(id: string) {
        // Implement your own set Id
        this._id = id
    }
}


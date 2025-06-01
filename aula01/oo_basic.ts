class User{
    name: string;
    email: string;
    active: boolean = false;


    constructor(name: string, email: string, active: boolean = false){
        this.name = name
        this.email = email
        this.active = active
    }
}

const Carlos = new User('Carlos', 'carlos@email.com');
console.log(Carlos);
const user2 = new User('user2', 'user2@email.com', true);
console.log(user2);
const user3 = new User('user3', 'user3@email.com', false);
console.log(user3);


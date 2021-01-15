const express = require('express');
const faker = require('faker');

const port = 8000;
const app = express();

app.use(express.json());
app.listen(port, () => console.log(`Listening on port: ${port}`));


class User {
    constructor() {
        this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }


}

class Company {
    constructor() {
        this.id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }


    }

}


const User1 = new User();
const Company1 = new Company();

app.get("/api/users/new", (req, res) => {
    res.json(User1);
});

app.get("/api/company/new", (req, res) => {
    res.json(Company1);
});

app.get("/api/user/company", (req, res) => {
    res.json({ user: User1, company: Company1 });
});

app.get("/", (req, res) => {
    res.json({ message: "你好我是王瑞克" });
});

const express = require("express");
const cors = require("cors");
var faker = require('faker');
const port = 8000;


const app = new express();
app.use(cors());
app.use(express.json());// allows us to use JSon

class User {
    constructor() {
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.address = {
            street : faker.address.streetName(),
            city : faker.address.cityName(),
            state : faker.address.state(),
            zipCode : faker.address.zipCodeByState(),
            country :faker.address.country()
        }
    }
}

// create our API routes/endpoints
app.get("/api/hello", (req,res)=>{
    res.json({message: "hello world universe Priya is going to make carbon free cloud"});
})

console.log(faker.address.city())

app.get("/api/users/new", (req, res) => {
    const user1 = new User()
    res.json({results: user1});
})

app.get("/api/companies/new", (req, res) => {
    const company1 = new Company()
    res.json({results: company1});
})

app.get("/api/user/company", (req, res) => {
    const user2 = new User()
    const company2 = new Company()
    res.json({results: user2, company2});
})

//make it so the server can listen for requests on port 8000
app.listen(port, ()=>console.log(`Listening on port number ${port}`));

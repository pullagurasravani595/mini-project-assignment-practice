
const express = require("express");
const crypto = require("crypto");
const app = express();
const cors = require('cors');
app.use(cors());

app.get("/api/", (request, response) => {
    const dataEncrypted = "user, world"
    const secreteKey = "mySecreteOptionKey";
    const encryptData = crypto.createCipher("aes-256-cbc", secreteKey);
    let encryptDataVal = encryptData.update(dataEncrypted, 'utf-8', 'hex');
    encryptDataVal += encryptData.final('hex');
    const userDetails = {
        name: 'Jack Reacher',
        origin: 'Bangalure',
        destination: "Mumbai",
        encryptDataVal,
    }
    response.send({"users": [{...userDetails}]})

});

app.listen(4000, () => {console.log("server started at 4000 port")});


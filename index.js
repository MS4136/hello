
const admin = require("firebase-admin");
const express = require("express");
const app = express();


const serviceAccount = require("./drmspharmacy-firebase-adminsdk-o4b74-262f961f86.json");
app.use(express.json())
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

app.post('/send-noti', (req, res) => {
    console.log(req.body);
    const messege = {
        notification: {
            title: 'Hello Wolrd',
            body: 'Welome TO OXYGEN.DEV'
        },
        tokens: req.body.tokens
    }

    admin.messaging().sendMulticast(messege).then(res => {
        console.log("Send Successfully")
    }).catch(err => {
        console.log("Send Failure", err)
    })
})

app.listen(3000, () => {
    console.log("server listening on")
})




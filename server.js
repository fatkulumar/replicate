const express = require('express');
const app = express();

const wa = require('waweb-phi')

const client = new wa({
    puppeteer: { headless: false }, //change it to true if u want hidding the chrome/
    authTimeout: 30000,
   
});


client.initialize();


client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);

});

client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);

});

client.on('auth_failure', msg => {
    console.error('AUTHENTICATION FAILURE', msg);


})

client.on('ready', () => {
    console.log('READY');
        client.sendMessage("6289614312519@c.us", `test`).then((r) => {
            console.log("sendMessage",r)
        })

});


client.on('message', async msg => {
    console.log('MESSAGE RECEIVED', msg);

});

client.on('disconnected', () => {

    console.log('Client was logged out');
})


app.listen(3000, function() {
    console.log('listening on 3000')
})
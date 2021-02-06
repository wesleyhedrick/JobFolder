const { Users } = require('../models')
const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const client_id = '976300594680-7vlvafqg5h3lf3tkv4cjl72ibs40bcqv.apps.googleusercontent.com'
const client_secret = 'WraRCeOrRYGppQNs3cr32nNT'
const redirect_uri = 'https://developers.google.com/oauthplayground'
const refresh_token = '1//044OmdMJ-hZZECgYIARAAGAQSNwF-L9Ir0Imfnzb37JGvGwkbCM5GawTt9xobRPL72QHARdDUD-o3Xqg5cSlQbzQAdStj01BfRkY'
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri)
oAuth2Client.setCredentials({refresh_token: refresh_token})



async function sendMail(recipient, subject, body){
    
    try{
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'jbFldr@gmail.com',
                clientId: client_id,
                clientSecret: client_secret,
                refreshToken: refresh_token,
                accessToken: accessToken
            }
        })
        const mailOptions = {
            from: 'JobFolder <jbFldr@gmail.com>',
            to: 'wesley.hedrick@gmail.com',
            subject: 'Hello from Job Folder',
            text: 'Hello from Job Folder. Here is your reminder.',
            html: `<h1>Hello from Job Folder</h1>
            <p>Melody, Wes Hedrick wants to remind you to get baptized!!</p>
            <a href="https://www.linkedin.com/in/melodyulep/"><button>Hunt for jobs, Escalito</button></a>`
        }
        
        transport.sendMail(mailOptions);
        
        
    } catch(e){
        return e
    }
}


async function scheduleEmail(timeString, scheduleFunc, recipient, subject, body){
  
  
    scheduleFunc.scheduleJob(timeString, () => {
      console.log('running every minute 1, 2, 4 and 5');
      func(recipient, subject, body)
    });
}

const sendThankYou = (req, res) => {
    //query db for user email
    //establish today's date so you can schedule the next task
    //write a subject line" 'Don't forget to say thank you'
    //write an HTML body and store it in a variable
    //set the timeString
    // scheduleEmail(')
}


module.exports = { sendThankYou }
require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const client_id = '976300594680-7vlvafqg5h3lf3tkv4cjl72ibs40bcqv.apps.googleusercontent.com'
const client_secret = 'WraRCeOrRYGppQNs3cr32nNT'
const redirect_uri = 'https://developers.google.com/oauthplayground'
const refresh_token = '1//044OmdMJ-hZZECgYIARAAGAQSNwF-L9Ir0Imfnzb37JGvGwkbCM5GawTt9xobRPL72QHARdDUD-o3Xqg5cSlQbzQAdStj01BfRkY'
const { Users, Jobs, Contacts, Inspiration, Documents, InterviewQuestions } = require('./models');

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri)
oAuth2Client.setCredentials({refresh_token: refresh_token})

async function sendMail(dataArray){
    let day = (new Date()).getDay()
    let hour = (new Date()).getHours()
    let minutes = (new Date()).getMinutes()
    let time = parseInt((hour.toString()+minutes.toString()))
    
    let data = await Users.qetInterviewQuestions(day, time)
    
    data.forEach(async item=>{
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
                to: `${item.email}`,
                subject: `Here's your Interview Question`,
                html: `<p>Dear ${item.first},</p>
                <p>Here is your interview question</p>
                <p>${item.question}</p>`
            }
    
            const result = transport.sendMail(mailOptions);
            return result
    
        } catch(e){
            return e
        }
    })
}

sendMail()
    .then(r => console.log('Email sent', r))
    .catch((e) => console.log(e.message))




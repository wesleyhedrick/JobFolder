require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const client_id = process.env.client_id
const client_secret = process.env.client_secret
const redirect_uri = process.env.redirect_uri
const refresh_token = process.env.refresh_token
const jobFolderEmail = process.env.jobFolderEmail
const { Users, Jobs, Contacts, Inspiration, Documents, InterviewQuestions } = require('../models');

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
                    user: jobFolderEmail,
                    clientId: client_id,
                    clientSecret: client_secret,
                    refreshToken: refresh_token,
                    accessToken: accessToken
                }
            })
            const mailOptions = {
                from: `JobFolder <${jobFolderEmail}>`,
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




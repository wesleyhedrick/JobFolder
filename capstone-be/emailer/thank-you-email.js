//Query Jobs for date-interviewed === yesterday
//query will return:company
//send emails 
// select j.company_name, j.role
// from "Users" as u join "Jobs" as j on u.id = j.user_id
// where u.first='Melody'
require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const client_id = process.env.client_id
const client_secret = process.env.client_secret
const redirect_uri = process.env.redirect_uri
const refresh_token = process.env.refresh_token
const jobFolderEmail = process.env.jobFolderEmail

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri)
oAuth2Client.setCredentials({refresh_token: refresh_token})
const { Users, Jobs, Contacts, Inspiration, Documents, InterviewQuestions } = require('../models');




async function sendMail(){
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1)
    let dateString = yesterday.toISOString().slice(0,10);
    const data = await Users.getReminderEmailData(dateString, 'date_interviewed')
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
                subject: `Write that thank-you note!`,
                html: `<p>Dear ${item.first},</p>
                <p>You interviewed for the ${item.role} role yesterday with ${item.company_name}! That's awesome</p>
                <p>Make sure to write a thank-you note that is sincere and to the point. You're a valuable employee,
                    and you want to be a valuable part of a great team! So don't forget this personal touch!
                </p>
                <br>
                <p>Sincerely,</p>
                <br>
                <p>JobFolder Team</p>`
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

module.exports = { sendMail }


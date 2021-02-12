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


async function sendMail(){
    let tenDaysAgo = new Date();
    tenDaysAgo.setDate(tenDaysAgo.getDate()-10)
    let dateString = tenDaysAgo.toISOString().slice(0,10);
    let data = await Users.getReminderEmailData(dateString, 'date_applied')
    console.log(data)
        
        data.forEach(async item => {
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
                    // to: 'wesley.hedrick@gmail.com',
                    to: `${item.email}`,
                    subject: `Did you hear from ${item.company_name}`,
                    html: `<p>Dear ${item.first},</p>
                    <p>Ten days ago you applied for ${item.role} role at ${item.company_name}. Have you heard back?</p>
                    <p>If not, consider sending them a follow up letter. Let them know you're still interested. 
                    Show them you've thought about their company.</p>
                    <p>Hiring is difficult work, and managers get busy. A little nudge might make the difference.</p>
                    <br>
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
        }
        )
}

sendMail()
    .then(r => console.log('Email sent', r))
    .catch((e) => console.log(e.message))




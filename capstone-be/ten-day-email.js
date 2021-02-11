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
                        user: 'jbFldr@gmail.com',
                        clientId: client_id,
                        clientSecret: client_secret,
                        refreshToken: refresh_token,
                        accessToken: accessToken
                    }
                })
                const mailOptions = {
                    from: 'JobFolder <jbFldr@gmail.com>',
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




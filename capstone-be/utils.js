function getDocSummary(docType, user_id){
    const docList = Documents.findAll({
        attributes: [docType, user_id],
        where: {
            user_id
        }
    })
    return docList
}

<<<<<<< HEAD
const { Users } = require('./models')
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
=======
// const { Users } = require('./models')
// const schedule = require('node-schedule');
// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// const client_id = '976300594680-7vlvafqg5h3lf3tkv4cjl72ibs40bcqv.apps.googleusercontent.com'
// const client_secret = 'WraRCeOrRYGppQNs3cr32nNT'
// const redirect_uri = 'https://developers.google.com/oauthplayground'
// const refresh_token = '1//044OmdMJ-hZZECgYIARAAGAQSNwF-L9Ir0Imfnzb37JGvGwkbCM5GawTt9xobRPL72QHARdDUD-o3Xqg5cSlQbzQAdStj01BfRkY'
// const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri)
// oAuth2Client.setCredentials({refresh_token: refresh_token})

// async function sendMail(recipient, subject, body){
//     try{
//         const accessToken = await oAuth2Client.getAccessToken();
//         const transport = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: 'jbFldr@gmail.com',
//                 clientId: client_id,
//                 clientSecret: client_secret,
//                 refreshToken: refresh_token,
//                 accessToken: accessToken
//             }
//         })
//         const mailOptions = {
//             from: 'JobFolder <jbFldr@gmail.com>',
//             to: 'wesley.hedrick@gmail.com',
//             subject: 'Hello from Job Folder',
//             text: 'Hello from Job Folder. Here is your reminder.',
//             html: `<h1>Hello from Job Folder</h1>
//             <p>Melody, Wes Hedrick wants to remind you to get baptized!!</p>
//             <a href="https://www.linkedin.com/in/melodyulep/"><button>Hunt for jobs, Escalito</button></a>`
//         }
>>>>>>> c316fe05028462c84e86939ef374329f56129639
        
//         transport.sendMail(mailOptions);
        
        
//     } catch(e){
//         return e
//     }
// }


// async function scheduleEmail(timeString, scheduleFunc, recipient, subject, body){
  
  
<<<<<<< HEAD
    scheduleFunc.scheduleJob(timeString, () => {
      console.log('running every minute 1, 2, 4 and 5');
    //   func(recipient, subject, body)
    });
}
=======
//     scheduleFunc.scheduleJob(timeString, () => {
//       console.log('running every minute 1, 2, 4 and 5');
//       func(recipient, subject, body)
//     });
// }
>>>>>>> c316fe05028462c84e86939ef374329f56129639

// async function taskTrain(){
    
//     schedule.scheduleJob('0 15 * * * *', async ()=> {
//         //Query Settings, getting all user_ids and first names of everyone who
//         //coding_questions == true && interview_questions_frequency === today 
//         //&& time === now
//         //The above query will produce an array of ids
//         //With these ids query IQ table getting one random question from the db for each.
//         //Send these emails to the users


//     })
// }


// function sendThankYou(func){


<<<<<<< HEAD
    // schedule.scheduleJob(intervalString, () => {
    //   func()
    // });
}
=======
//     schedule.scheduleJob(intervalString, () => {
//       func()
//     });
// }
>>>>>>> c316fe05028462c84e86939ef374329f56129639


// function consLog(){
//     let currentTime = (new Date()).getMinutes();
//     console.log('Running', currentTime)
// }


// const cron1 = sendThankYou(consLog)





module.exports = { getDocSummary }
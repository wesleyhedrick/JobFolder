const { Users, Jobs, Contacts, Inspiration, Documents, InterviewQuestions } = require('../models');
const { getApplicationRatio } = require('../utils')


const testRoute = async (req, res) => {
    const {identification} = req.params
    console.log(identification)
    const x = await Jobs.findAll({
        include: [{
            model: Users, 
            where: {last: 'Hedrick'}
        }]
    })
    res.json(x)
}

const loadDashboard = async (req, res) => {
    const {id} = req.params;
    let dateStarted;
    let inspiration;
    let dailyAppGoal;
    let dailyAppReality;
    let jobCount; 
    let jobsAppliedTo; 
    let contacts;

    if(req.session.username){
        
        inspiration = await Inspiration.getRandom();

        dateStarted = await Users.findAll({
            attributes: ['createdAt'],
            where: {
                id
            }
        })

        dailyAppGoal = await Users.findOne({
            attributes: ['daily_app_goal'], 
            where: {
                id
            }
        })

        dailyAppGoal = dailyAppGoal.daily_app_goal
        
        console.log(dailyAppGoal)
        jobsAppliedTo = await Jobs.findAll({
            attributes: ['company_name','role','date_applied'], 
            where: {
                user_id:id
            }   
        })
        
        jobCount = jobsAppliedTo.length
        
        dailyAppReality = getApplicationRatio(jobCount, dateStarted)

        try {
            contacts = await
             Contacts.findAll({
                where: {
                    user_id: id
                }
            })
        } catch(e){
            console.log(e)
        }
    } 

    res.json({jobCount, dailyAppGoal, jobsAppliedTo, contacts, inspiration, dailyAppReality})
    
}

const loadDocsPage = (req, res) => {
    res.json('docs page route')
}

const createNewAppRecord = async (req, res) => {
    console.log(req.body)
    await Jobs.create({...req.body})
    res.send('success')
}

const createNewIQ = async (req, res) => {
    console.log(req.body)
    await InterviewQuestions.create({...req.body})
    res.send('success')
}
//GET SUMMARIES
const getDocList = async (req, res) => {
    const {doc_type} = req.params
    console.log('here your doctype',doc_type)
    const docList = await Documents.findAll({
        attributes: ['title'],
        where: {
            user_id: 1, 
            doc_type
        }
    })
    console.log(docList)
    res.json(docList)
}

const getJobs = async (req, res)=>{
    const jobList = await Jobs.findAll({
        attributes: ['company_name','role','date_applied'], 
        where: {
            user_id:1
        }
    })
    console.log(jobList)
    res.json(jobList)
}

const getIQs = async (req, res) => {

    const docList = await InterviewQuestions.findAll({
        attributes: ['question', 'answer'],
        where: {
            user_id:1
        }
    })
    console.log(docList)
    res.json(docList)
}

const getCLSummary = async (req, res) => {
    const { user_id } = req.session
    const { document } = req.params
    const resumeList = getDocSummary(document, user_id)
    res.json(resumeList)
}

const getTYLSummary = async (req, res) => {
    const { user_id } = req.session
    const { document } = req.params
    const resumeList = getDocSummary(document, user_id)
    res.json(resumeList)
}

const iJustApplied = async (req, res) => {
    const {company_name, role, phone, website, date_applied, user_id} = req.body;
    
    await Jobs.create({
        company_name,
        role,
        phone,
        website,
        date_applied,
        user_id 
    })
}

const iMadeAContact = async (req, res) => {
    const {name, phone, email, date_contacted, user_id} = req.body;
    await Contacts.create({
        name, 
        phone,
        email,
        date_contacted,
        user_id
    })

}

const addInterviewQuestion = async (req, res) => {
    let interviewQandA = {}
    for (k in req.body){
        interviewQandA[k] = req.body[k]
    }
    await InterviewQuestions.update(interviewQandA)
}


//GET DETAILS 



module.exports = {
    loadDashboard,
    testRoute, 
    iJustApplied,
    iMadeAContact, 
    addInterviewQuestion,
    getDocList,
    getIQs,
    getJobs, 
    createNewAppRecord, 
    createNewIQ
};


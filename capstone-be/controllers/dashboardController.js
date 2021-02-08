const { Users, Jobs, Contacts, Inspiration, Documents } = require('../models');
const { getDocSummary } = require('../utils')


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
    const {username, password} = req.body;
    const {user_id} = req.session;
    console.log(user_id)
    let inspiration;
    let goal;
    let jobCount; 
    let jobsAppliedTo; 
    let contacts;

    if(req.session.username){
        
        inspiration = await Inspiration.getRandom();

        goal = await Users.findAll({
            attributes: ['daily_app_goal'], 
            where: {
                id: user_id
            }
        })

        jobsAppliedTo = await Jobs.findAll({
            attributes: ['company_name','role','date_applied'], 
            where: {
                user_id
            }   
        })
        
        jobCount = jobsAppliedTo.length

        try {
            contacts = await
             Contacts.findAll({
                where: {
                    user_id: '1'
                }
            })
        } catch(e){
            console.log(e)
        }
    } 

    res.json({jobCount, goal, jobsAppliedTo, contacts, inspiration})
    
}

const loadDocsPage = (req, res) => {
    res.json('docs page route')
}

//GET SUMMARIES
const getResumeSummary = async (req, res) => {
    const { user_id } = req.session
    const { document } = req.params
    const resumeList = getDocSummary(document, user_id)
    res.json(resumeList)
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
    addInterviewQuestion
};


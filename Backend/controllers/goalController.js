const asyncHandler = require ('express-async-handler')
const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async(req,res)=> {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const setGoals = asyncHandler(async(req, res) => {
    if(!req.body.name || !req.body.email || !req.body.phone){
    res.status(400)
    throw new Error('please add a text field')
}
const goal = await Goal.create({ 

     name: req.body.name,
     email: req.body.email,
     phone: req.body.phone, 
})
res.status(200).json(goal)
})

const updateGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('user not found')
    }

    const updatedGoal = await Goal.findById(req.params.id, req.body, {new:true})
    
    res.status(200).json(updatedGoal)
})

const deleteGoals = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('user not found')
    }
    await Goal.remove()
    res.status(200).json({id: req.params.id})
})

module.exports ={
    getGoals, setGoals, updateGoals, deleteGoals
}

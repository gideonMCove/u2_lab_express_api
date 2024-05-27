const Actor = require('../models/actor')

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getActorById = async (req,res) => {
    try{
        const { id } = req.params
        const actor = await Actor.findById(id)
        if (actor){
            return res.json(actor)
        }
        return res.status(404).send(`that actor doesn't exist!!!!!!!!`)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
}

const createActor = async (req,res) => {
    try {
        const actor = await new Actor(req.body)
        await actor.save()
        return res.status(201),json({
            actor
        })
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const updateActor = async (req,res) => {
    try {
        let {id} = req.params
        let actor = await Actor.findByIdAndUpdate(id, req.body, { new: true })
        if (actor) {
            return res.status(200).json(actor)
        }
        throw new Error("Actor not found, bro")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteActor = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Actor.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Actor has been reduced to ashes")
        }throw new Error("Can't delete a actor that doesn't exist!!!!!")       
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllActors,
    getActorById,
    createActor,
    updateActor,
    deleteActor
}
const Review = require('../models/review')

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getReviewById = async (req,res) => {
    try{
        const { id } = req.params
        const review = await Review.findById(id)
        if (review){
            return res.json(review)
        }
        return res.status(404).send(`that review doesn't exist!!!!!!!!`)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
}

const createReview = async (req,res) => {
    try {
        const review = await new Review(req.body)
        await review.save()
        return res.status(201),json({
            review
        })
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const updateReview = async (req,res) => {
    try {
        let {id} = req.params
        let review = await Review.findByIdAndUpdate(id, req.body, { new: true })
        if (review) {
            return res.status(200).json(review)
        }
        throw new Error("Review not found, bro")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteReview = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Review.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Review has been reduced to ashes")
        }throw new Error("Can't delete a Review that doesn't exist!!!!!")       
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
}
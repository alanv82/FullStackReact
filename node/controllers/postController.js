import postModel from "../models/postModel.js";

//All methods

//Show all posts
export const getAllPosts = async (request, response)=>{
    try {
        const posts = await postModel.findAll()
        response.json(posts)
    } catch (error) {
        response.json({message: error.message})
    }
}

//show one post
export const getPost = async (request, response) => {
    try {
        const blog = await postModel.findAll({
            where:{ id:request.params.id }
        })
        response.json(blog[0])
    } catch (error) {
        response.json( {message: error.message} )
    }
}

//create a post
export const createPost = async (request, response) => {
    try {
        await postModel.create(request.body)
        response.json({
            "message": "Registro Creado Correctamente!"
        });
    } catch (error) {
        response.json({message: error.message});
    }
}

//update a post
export const updatePost = async (request, response) => {
    try {
        await postModel.update(request.body, {
            where: { id: request.params.id }
        })
        response.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        response.json( {message: error.message} )
    }
}

//delete a post

export const deletePost = async (request, response) =>{
    try {
        await postModel.destroy({
            where:{ id:request.params.id }
        })
        response.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        response.json( {message: error.message} )
    }
}
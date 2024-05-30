import User from "../models/user.model.js"

export const createUser = (request, response) => {
    const { name, email, password } = request.body
    
    const user = new User({ name, email, password })
    
    user.save()
    

    response.status(201).send({msg: "Create user successfully"})
}
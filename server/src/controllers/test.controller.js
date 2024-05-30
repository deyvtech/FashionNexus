export const testController = (request, response) => {
    console.log(request.body)
    response.status(201).send({msg: 'Good Request'})
}
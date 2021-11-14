'use strict';

const validateRequiredFieldInCompliment = (req, res, next) => {
    const complimentPayload = req.body;
    const requiredFields = ['fromId', 'fromName', 'toId', 'toName', 'content'];
    console.log(complimentPayload);
    const containAllRequiredFields = requiredFields.every(field => complimentPayload[field]);
    console.log(containAllRequiredFields);

    if(containAllRequiredFields)  return next();
    res.status(400).json({message: 'Payload has required fields missing'})
}

const validatePayloadToPatch = (req, res, next) => {

}

module.exports = {
    validateRequiredFieldInCompliment,
    validatePayloadToPatch
}
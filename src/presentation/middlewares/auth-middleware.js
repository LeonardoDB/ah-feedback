'use strict';

const jwtDecoder = require('jwt-decode');

const verifyJWT = (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: 'Missing Authorization Header',
        });
    }

    const { exp, user: { lastCompany} } = jwtDecoder(token);

    if(!exp) res.status(401).json({message: 'Invalid Token'});

    const tokenHasExpired = new Date() > new Date(exp * 1000);

    if(tokenHasExpired) res.status(401).json({message: 'Token has expired'});

    req.body.companyCode = lastCompany;
};

module.exports = verifyJWT;


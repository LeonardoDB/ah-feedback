const request = require('supertest')
const app = require('../../main/index')
const FeedbackModel = require('../../models/feedback-model');
const constants = require('./constants')

describe('Feedback Routes', () => {
    beforeEach(async () => {
        await FeedbackModel.deleteMany()
    });

    describe('When create', () => {
        test('Should POST return 401 without basic authentication', async () => {
            const response = await request(app)
                .post('/feedback')
                .send(constants.validFeedbackPayload)

            expect(response.status).toBe(401)
        })

        test('Should POST return 200 when valid parameters are provided', async () => {
            const response = await request(app)
                .post('/feedback')
                .set('Accept', 'application/json')
                .set('authorization', constants.validToken)
                .send(constants.validFeedbackPayload)

            expect(response.status).toBe(200)
        })
    })

    describe('When get', () => {
        test('Should GET return 401 without basic authentication', async () => {
            const response = await request(app)
                .get('/feedback')

            expect(response.status).toBe(401)
        })

        test('Should GET return 500 invalid basic authentication', async () => {
            const response = await request(app)
                .get('/feedback')
                .set('Authorization', constants.invalidToken)

            expect(response.status).toBe(500)
        })

        test('Should GET return 200 valid basic authentication', async () => {
            const response = await request(app)
                .get('/feedback')
                .set('Authorization', constants.validToken)

            expect(response.status).toBe(200)
        })

        test('Should GET return 401 without basic authentication', async () => {
            const response = await request(app)
                .get(`/feedback/`)

            expect(response.status).toBe(401)
        })
    })
})
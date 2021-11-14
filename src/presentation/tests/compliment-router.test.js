const request = require('supertest')
const app = require('../../main/index')
const ComplimentModel = require('../../models/compliment-model');
const constants = require('./constants')

describe('Compliment Routes', () => {
    beforeEach(async () => {
        await ComplimentModel.deleteMany()
    });

    describe('When create', () => {
        test('Should POST return 401 without basic authentication', async () => {
            const response = await request(app)
                .post('/compliment')
                .send(constants.validComplimentPayload)

            expect(response.status).toBe(401)
        })

        test('Should POST return 200 when valid parameters are provided', async () => {
            const response = await request(app)
                .post('/compliment')
                .set('Accept', 'application/json')
                .set('authorization', constants.validToken)
                .send(constants.validComplimentPayload)
                
            expect(response.status).toBe(200)
        })
    })

    describe('When get', () => {
        test('Should GET return 401 without basic authentication', async () => {
            const response = await request(app)
                .get('/compliment')

            expect(response.status).toBe(401)
        })

        test('Should GET return 500 invalid basic authentication', async () => {
            const response = await request(app)
                .get('/compliment')
                .set('Authorization', 'Bearer valid_token')

            expect(response.status).toBe(500)
        })

        test('Should GET return 200 valid basic authentication', async () => {
            const response = await request(app)
                .get('/compliment')
                .set('Authorization', constants.validToken)

            expect(response.status).toBe(200)
        })

        test('Should GET return 401 without basic authentication', async () => {
            const response = await request(app)
                .get(`/compliment/`)

            expect(response.status).toBe(401)
        })

        test('Should GET return 200 when valid parameters are provided', async () => {
            const complimentCreated = await ComplimentModel.create(constants.validComplimentPayload);
            const response = await request(app)
                .get(`/compliment/${complimentCreated.toId}`)

            expect(response.status).toBe(401)
        })
    })
})
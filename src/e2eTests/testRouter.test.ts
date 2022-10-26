import request from 'supertest'
import { MessageLevel } from '../logicLayer/logging/messageModel'
import * as helpers from './testHelpers'

describe('error handling tests', () => {
    beforeAll(async () => helpers.start())
    afterAll(async () => helpers.stop())

    it('request with no errors', async () => {
        const result = await request(helpers.server).get('/test')
        expect(result.statusCode).toBe(200)
    })
    it('log collection should be empty', async () => {
        const result = await helpers.logRepo.get()
        expect(result.length).toBe(0)
    })

    // This test does not work because jest mocks 'process'. Didn't find solution yet. 

    // it('error should be written into db', async () => {
    //     const response = await request(helpers.server).get('/test/error')
    //     expect(response.statusCode).toBeLessThan(500)

    //     await helpers.delay(2000)

    //     const result = await helpers.logRepo.get()
    //     expect(result.length).toBe(1)
    //     expect(result[0].MessageLevel).toBe(MessageLevel.Error)
    //     expect(result[0].message).toBeTruthy()
    // })
})
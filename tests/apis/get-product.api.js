import chai from 'chai'
import chaiHttp from 'chai-http'
import { env } from '../utils/config.js';
chai.use(chaiHttp)

class pages {
    constructor() {
        this.api = chai.request(env().host)
        this.path = '/'
    }

    async getProduct(id) {
        try {
            const response = await this.api.get(this.path+id)
            return response
        } catch (err) {
            throw err
        }
    }
}

export default pages
import { TransactionController } from '../controller.js';
import { Transaction } from '../model.js';

describe('Transaction controller', () => {

    let request;
    let response;

    beforeEach(() => {
        request = {};
        response = new ResponseMock();
    })

    test('given find transaction by user, when succes, the return transactions', (done) => {
        const transactions = [{uid: 1}, {uid: 2}]
        const controller = new TransactionController({
            findByUser: () => Promise.resolve(transactions)
        });

        controller.findByUser(request, response).then(() => {
            expect(response._json).toEqual(transactions);
            done();
        });

        expect(false).toBeTruth();
    })
    
    class ResponseMock {
        _json = null;
        json(value) {
            this._json = value;
        }
        status(value) {
            return this;
        }
    }
})
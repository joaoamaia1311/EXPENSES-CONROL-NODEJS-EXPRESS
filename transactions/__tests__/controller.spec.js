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
        const request = {};
        const response = new ResponseMock();
        const controller = new TransactionController({
            findByUser: () => Promise.resolve([{uid: 1}, {uid: 2}])
        });

        controller.findByUser(request, response).then(() => {
            expect(response._json).toEqual([{uid: 1}, {uid: 2}]);
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
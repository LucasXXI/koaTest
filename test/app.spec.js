import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiJson from 'chai-json-schema';
import server from '../src/index.js'

chai.use(chaiHttp);
chai.use(chaiJson);

const expect = chai.expect

describe('Application Tests', () => {
    it('the server is up and running!', function (done){
        chai.request(server)
        .get('/users')
        .end(function (err,res){
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        })
    });
    it('Should Create a new user', function (done){
        chai.request(server)
        .post('/users')
        .send({
            name: 'Matheus Lima',
            age: '19',
            email: 'matheus123@gmail.com'
        })
        .end(function (err, res){
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
    }); 
})

});
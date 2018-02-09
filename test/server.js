import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('test server', () => {
  it('should return 200 when hit index route', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});

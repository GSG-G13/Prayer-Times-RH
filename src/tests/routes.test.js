const request = require("supertest");

const app = require("../app");

test("/ show a page ", (done) => {
  request(app)
    .get("/")
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});


test("/search prayer time", (done) => {
  request(app)
    .get("/search/:name")
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});
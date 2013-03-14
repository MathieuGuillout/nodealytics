var NA = require("../lib/main.js");
var should = require("should");

describe('initialize', function () {
  it('should require an account ID', function (done) {
    NA.initialize('', '', function (err, resp) {
      err.message.should.eql('Account ID is invalid');
      done();
    });
  });

  it('should require a valid account ID', function (done) {
    NA.initialize('AB-1230404-1', 'testsite.com', function (err, resp) {
      err.message.should.eql('Account ID is invalid');
      done();
    });
  });

  it('should accept an account ID without profile number', function (done) {
    NA.initialize('UA-12345678', 'testsite.com', done);
  });

  it('should require a domain', function (done) {
    NA.initialize('UA-12345678-1', '', function (err, resp) {
      err.message.should.eql('Domain is invalid');
      done();
    });
  });

  it('should initialize with the appropriate parameters', function (done) {
    NA.initialize('UA-33709401-1', 'testsite.com', done);
  });
});

describe('page views', function () {
  it('should register a page view', function (done){
    NA.trackPage('some title', 'some page', function (err, resp) {
      resp.statusCode.should.eql(200);
      done();
    });
  });

});

describe('events', function() {
  it('should register an event', function (done) {
    NA.trackEvent('test event', 'boom', function (err, resp) {
      resp.statusCode.should.eql(200);
      done();
    });
  });
});


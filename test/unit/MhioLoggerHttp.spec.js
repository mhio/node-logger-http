const { expect } = require('chai')
const { MhioLoggerHttp } = require('../../lib/MhioLoggerHttp')

describe('unit::MhioLoggerHttp', function(){

  it('should import a module', function(){
    expect(MhioLoggerHttp, 'module import').to.be.ok 
  })

  it('should have a default pino instance', function(){
    expect(MhioLoggerHttp.pino_instance, 'pino_instance').to.be.ok 
  })

  it('should have a pinoKoa function', function(){
    expect(MhioLoggerHttp.pinoKoa, 'pinoiKoa').to.be.a('function') 
  })
})

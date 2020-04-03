const { expect } = require('chai')
const { MhioLoggerHttp, noop } = require('../../lib/MhioLoggerHttp')

describe('int::MhioLogger', function(){

  it('should static', function(){
    expect(MhioLoggerHttp.pinoKoa()).to.be.a('function')
  })
  
  it('should instance', function(){
    const Logger = new MhioLoggerHttp('test')
    expect(Logger.pinoKoa()).to.be.a('function')
  })

})

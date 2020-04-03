const { expect } = require('chai')
const Koa = require('koa')
const supertest = require('supertest')

const { MhioLoggerHttp, noop } = require('../../lib/MhioLoggerHttp')

describe('int::MhioLogger', function(){

  it('should static', function(){
    expect(MhioLoggerHttp.pinoKoa()).to.be.a('function')
  })
  
  it('should instance', function(){
    const Logger = new MhioLoggerHttp('test')
    expect(Logger.pinoKoa()).to.be.a('function')
  })

  it('should run as middleware', async function(){
    const app = new Koa()
    app.use(MhioLoggerHttp.pinoKoa())
    app.use(ctx => ctx.body = 'hello world')
    const res = await supertest(app.callback()).get('/')
    expect(res.body).to.eql({}) 
  })

})

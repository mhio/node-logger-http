const pinoHttp = require('pino-http')

const { MhioLogger, pino, noop, debug } = require('@mhio/node-logger')

class MhioLoggerHttp extends MhioLogger {

  /**
   * Creates a http logger for a pino instance
   * @param {*} [opts]
   * @param {*} [opts.logger=this.instance] - Logger defaults to the local pino instance
   * @param {string|WritableStream} destination - Pino log destination
   */
  static pinoKoa(opts, destination){
    // Attach the local/default pino logger if we dont get one passed in
    const pino_opts = {
      logger: this.pino_instance,
      ...this.pino_default_options,
      ...opts,
    }
    // Allow attaching of log to req/res
    const wrap = pinoHttp(pino_opts, destination)

    /* istanbul ignore next */
    const pinoMiddleware = async function(ctx, next) {
      wrap(ctx.req, ctx.res)
      ctx.log = ctx.request.log = ctx.response.log = ctx.req.log
      await next()
    }
    pinoMiddleware.logger = wrap.logger
    return pinoMiddleware
  }

  pinoKoa(opts){
    return this.constructor.pinoKoa({ logger: this.pino_instance, ...opts })
  }

}

module.exports = {
  MhioLoggerHttp,
  MhioLogger,
  noop,
  debug,
  pino,
  pinoHttp,
}

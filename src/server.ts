import sirv from 'sirv'
import polka, { ListenCallback } from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const listenCallback = async err => {
  if (err) {
    console.log('error', err)
  }
}

polka()
  .use(
    compression({ threshold: 0 }) as any,
    sirv('static', { dev }),
    sapper.middleware() as any,
  )
  .listen(PORT, listenCallback as ListenCallback)

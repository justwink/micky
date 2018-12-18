import * as Koa from 'koa'
import * as bodyParse from 'koa-body'
import * as logger from 'koa-logger'
import * as Router from 'koa-router'
import * as uuid from 'uuid'

import mongo from './mongoDb'

const app = new Koa()
const router = new Router({
  prefix: '/api'
})

router.options('*', async(ctx) => {
  ctx.status = 200
})



router.post('/todoList', async (ctx) => {
  try {
    const form = ctx.request.body
    form.date = Date.now()
    form._id = uuid.v4()
    const result = await mongo.insertOne('todoList', form)
    ctx.body = {
      data: result,
      status: 'success'
    }
  } catch (error) {
    ctx.body = error
  }
})

router.put('/todoList', async (ctx) => {
  const form = ctx.request.body
  const result = await mongo.findOneAndUpdate('todoList', {_id: form._id}, {...form})
  ctx.body = {
    data: {
      updatedExisting: result.lastErrorObject.updatedExisting
    },
    status: 'success'
  }
})

router.delete('/todoList/:id', async (ctx) => {
  const id = ctx.params.id
  const result = await mongo.findOneAndDelete('todoList', {_id: id} )
  ctx.body = {
    data: result,
    status: 'success'
  }
})

app.use(async(ctx, next) => {
  ctx.response.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
    'Access-Control-Max-Age': '86400'
  })
  await next()
})

app.use(logger())

app.use(bodyParse())

app.use(router.routes())

const server = app.listen(1012, () => {
  console.log(`Server is running : ${server.address()['port']}`)
})

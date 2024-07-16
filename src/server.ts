import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routs';

const app = Fastify( { logger: true });

app.setErrorHandler((err, request, reply) => {
    reply.code(400).send({message: err.message})
})

const start = async () => {
    await app.register(cors);
    await app.register(routes)

    try{
        await app.listen({port: 8000});
    } catch (err) {
        process.exit(1);
    }
}

start();
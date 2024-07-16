import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import { CustomerController } from "./controller/CustomerController";
import { ListCustomerController } from "./controller/ListCustomerController";
import { DeleteCustomerController } from "./controller/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/customers', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply);
    })

    fastify.post('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CustomerController().handle(request, reply);
    })

    fastify.delete('/customers', async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    })
}
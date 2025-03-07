import prismaClient from "../prisma"

interface DeleteCustomerProps {
    id: string,
}

class DeleteCustomerService{
    async execute( {id}: DeleteCustomerProps){
        if(!id) {
            throw new Error('Solicitacao invalida')
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!findCustomer) {
            throw new Error('Cliente nao existe');
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { message: "Deletando com sucesso "}
    }
}

export { DeleteCustomerService }
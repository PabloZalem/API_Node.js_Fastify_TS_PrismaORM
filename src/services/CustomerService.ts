import prismaClient from "../prisma";

interface CustomerProperties{
    name: string, 
    email: string
}

class CustomerService {
    async execute({name, email}: CustomerProperties){
       if(!name || !email){
        throw new Error('Preencha todos os campos')
       }

       const customer = await prismaClient.customer.create({
        data: {
            name,
            email,
            status: true
        }
       })

       return customer;
    }
}

export { CustomerService }
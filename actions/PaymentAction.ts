"use server"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();
type params = {
    fullName: string,
    email: string,
    phone: string,
    workshopId: string
}

export const initPayment = async (params: params) => {
    console.log(params)
    try {
        const data = await prisma.workshopPayment.create({
            data: {
                fullName: params.fullName.toString(),
                email: params.email.toString(),
                phoneNumber: params.phone.toString(),
                workshopId: params.workshopId.toString()
            }
        })
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}
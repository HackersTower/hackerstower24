"use server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
type Params = {
    id: string
}
export const getWorkshopDetails = async (params: Params) => {
    const id = params.id;
    const data = await prisma.workshop.findUnique({
        where: {
            id: id
        }
    })
    return data;
}
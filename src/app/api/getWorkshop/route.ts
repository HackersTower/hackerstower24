import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function GET(request: Request) {
    interface ApiResponse {
        data: ApiData[];
    }

    interface ApiData {
        id: string;
        title: string;
        desc: string;
        tag: string;
        topics: string[];
        mentor: string;
        time: Date; // Assuming this is a string representation of a date
        thumbnail: string; // Assuming this is a URL to the thumbnail image
    }
    try {
        const allWorkshops = await prisma.workshop.findMany()
        console.log(allWorkshops)
        const responseData: ApiResponse = {
            data: allWorkshops,
        };

        return Response.json({ data: responseData.data })
    } catch (error) {
        return Response.json({message:"error while fetching data", status: 500 })
    }


}
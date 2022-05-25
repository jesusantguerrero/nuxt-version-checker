import { prisma } from "../utils/db"
import { v4 } from "uuid"

export default defineEventHandler(async (event) => {
    try {
        const body = await useBody(event)
        await prisma.site.create({ 
            data: {
                id: v4(),
                ...body
            }
        })
        const sites = await prisma.site.findMany()
        return sites
    } catch (err) {
        return err
    }
})
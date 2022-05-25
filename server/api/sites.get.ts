import { prisma } from './../utils/db';


export default defineEventHandler(async () => {
    try {
        const sites = await prisma.site.findMany();
        return sites
    } catch (err) {
        return err
    }
})
import { prisma } from './../utils/db';


export default defineEventHandler(async () => {
    const sites = await prisma.site.findMany();
    console.log(sites, " Here we go");
    return sites
})
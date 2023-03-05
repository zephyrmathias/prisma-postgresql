import { PrismaClient } from "@prisma/client";

// log: ["query"]
const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.deleteMany()
    // console.log(user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
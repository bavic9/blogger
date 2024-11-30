// import { PrismaClient } from "@prisma/client"

import { PrismaClient } from "@prisma/client";

const nextAuthUrl = process.env.NODE_ENV === 'production'
  ? process.env.NEXTAUTH_URL
  : process.env.NEXTAUTH_URL_DEV;

let prisma
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export { nextAuthUrl }
export default prisma
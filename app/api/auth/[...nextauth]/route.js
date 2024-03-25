import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "@/app/libs/mongoClient"

export const authOptiosn = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ]
}

const handler = NextAuth(authOptiosn)

export { handler as GET, handler as POST }
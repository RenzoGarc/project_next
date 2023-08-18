import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const userFound = await User.findOne({
          email: credentials.email,
        }).select("+password");

        if (!userFound) throw new Error("Invalid credentials");

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!passwordMatch) throw new Error("Invalid credentials");

        console.log(userFound);

        return userFound;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session }) {
      console.log("aqui llega mi kin");
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        console.log("no hay sesion mi kin", profile);
        // await connectToDB();
        // // check if user already exists
        // const userExists = await User.findOne({ email: profile.email });
        // // if not, create a new document and save user in MongoDB
        // if (!userExists) {
        //   await User.create({
        //     email: profile.email,
        //     username: profile.name.replace(" ", "").toLowerCase(),
        //     image: profile.picture,
        //   });
        // }
        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});

export { handler as GET, handler as POST };

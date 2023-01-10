import NextAuth, { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcryptjs from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      return session;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        await db.connect();
        const user = await User.findOne({ email: credentials.email });
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            username: user.username,
            email: user.email,
          };
        }
        throw new Error('invalid email or password');
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});

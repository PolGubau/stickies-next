import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import prisma from "lib/prisma";
import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import path from "path";
import Handlebars from "handlebars";

const emailsDir = path.resolve(process.cwd(), "assets/emails");

const sendVerificationRequest = ({ identifier, url }) => {
  const emailFile = readFileSync(path.join(emailsDir, "confirm-email.html"), {
    encoding: "utf8",
  });
  const emailTemplate = Handlebars.compile(emailFile);
  transporter.sendMail({
    from: `"⚡ Hello from Stickies :) ~" ${process.env.EMAIL_FROM}`,
    to: identifier,
    subject: "Here you have your sign-in link! 📬",
    html: emailTemplate({
      signin_url: url,
      email: identifier,
    }),
  });
};
const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, authOptions);

export default authHandler;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_FROM,
    pass: process.env.SMTP_PASSWORD,
  },
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    newUser: "/auth/welcome", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    EmailProvider({
      sendVerificationRequest,
      maxAge: 10 * 60, // Magic links are valid for 10 min only
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};

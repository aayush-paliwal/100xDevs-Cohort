import CredentialsProvider from 'next-auth/providers/credentials';
import { signIn } from 'next-auth/react';


export const NEXT_AUTH = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
          },
          async authorize(credentials: any) {
              console.log(credentials);
              // This is what to store in the jwt created by the next-auth
              return {
                  id: "user1",
                  name: "Aayush"
              };
          },
      })
    ],
  //   Used as a jwt password
    secret: process.env.NEXTAUTH_SECRET,
  
  //   Callbacks are asynchronous functions you can use to control what happens when an action is performed.
    callbacks: {
  
      // Use the signIn() callback to control if a user is allowed to sign in.
      signIn: ({user}) => {
          if(user.email == "random@gmail.com"){
              return false;
          }
          return true;
      },
  
      // This callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client). 
      jwt: ({token, user}) => {
          console.log(token);
          token.userId = token.sub
          return token;
      },
  
      session: ({session, token, user}: any) => {
          if(session && session.user){
              session.user.id = token.userId;         // token.sub
          }
          return session;
      }
    },

    // To add custom signin page
    pages: {
        signIn: "/signin"
    }
  }
import axios from "axios";
import client from "@/db";
import { getUser } from "@/actions/user";

const getUserData = async () => {
  // await new Promise((r) => setTimeout(r, 5000))

  // APPROACH 1: SENDING REQUEST TO NEXT.JS ITSELF (NOT RECOMMENDED)
  // const res = await axios.get('http://localhost:3000/api/user');
  // return res.data;

  // APPROACH 2: BETTER FETCHING(RECOMMENDED)
  // try {
  //   const user = await client.user.findFirst({});
  //   if (!user) return { message: 'No user found' };
  //   return { name: user?.username, email: user?.username };
  // } catch (error) {
  //   console.log(error);
  // }

  // APPROACH 3: USING SERVER ACTIONS (RECOMMENDED)
  const user = await getUser();
  return user;
}

// async component
export default async function Home() {
  const userData = await getUserData();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className='border p-8 rounded flex flex-col gap-1'>
          {userData?.message ? (
            userData?.message
          ) : (
            <>
              <span>Name: {userData?.name}</span>
              <span>Email: {userData?.email}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

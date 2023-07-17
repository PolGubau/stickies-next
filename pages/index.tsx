import React from "react";
import { Button, Layout } from "components";
import { GetSessionParams, getSession, signOut } from "next-auth/react";

const Main = ({ session }) => {
  console.log(session);
  return (
    <Layout>
      <div className="page">
        {session && (
          <Button onClick={signOut} type="main">
            Logout
          </Button>
        )}
        <h1>Main Page</h1>
      </div>
    </Layout>
  );
};
export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
      },
    };
  }
  return {
    props: { session },
  };
}
export default Main;

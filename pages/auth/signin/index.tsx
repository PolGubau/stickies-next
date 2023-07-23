import { TextField, Button, Text, Modal } from "components";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken, getSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { SignInStyled } from "./SignInStyled";
import { useToast } from "hooks";
import { formatString } from "utils";

const SignIn = ({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [email, setEmail] = useState("");
  const { triggerToast } = useToast();
  const [showModal, setShowModal] = useState(false);

  //

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email) {
      triggerToast({
        type: "error",
        message: "Email is required",
      });
      return;
    }

    try {
      // Perform sign in
      const { error } = await signIn("email", {
        email,
        redirect: false,
        callbackUrl: `${window.location.origin}/`,
      });
      // Something went wrong
      if (error) {
        triggerToast({
          type: "error",
          message: `${formatString(error)}`,
        });
      }
      setShowModal(true);
    } catch (error) {
      triggerToast({
        type: "error",
        message: `Error with ${formatString(error.message)}`,
      });
    }
  };

  //
  return (
    <SignInStyled>
      {showModal && (
        <Modal title="Check your email" icon="email">
          <Text>
            {`We sent a magic link to ${email}. Click the link in the email to sign
            in to your account.`}
          </Text>
        </Modal>
      )}
      <section>
        <Text size={1} weight="bold">
          Stickies
        </Text>
        <div className="bgSection"></div>
      </section>
      <section className="formSection">
        <Text size={1} weight="bold">
          Your account
        </Text>
        <Text>Write your used email or a new one.</Text>

        <form className="form" onSubmit={handleSignIn}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          <TextField
            size="large"
            type="email"
            name="email"
            label="Email address"
            value={email}
            onChange={(email) => setEmail(email)}
          />
          <Button
            buttonType="submit"
            icon={"arrow"}
            type="main"
            size="large"
            isAsync
          >
            Submit
          </Button>
        </form>
      </section>
    </SignInStyled>
  );
};

export default SignIn;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context);
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { csrfToken },
  };
}

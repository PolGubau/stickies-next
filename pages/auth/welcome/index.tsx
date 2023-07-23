import { TextField, Button, Text, Select } from "components";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getSession } from "next-auth/react";
import React, { useState } from "react";
import { SignInStyled } from "./styles";
import { useTheme, useToast } from "hooks";
import Switch from "components/inputs/Switch/Switch";
import { darkTheme, lightTheme } from "theme";

const SignIn = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { triggerToast } = useToast();
  const { changeTheme } = useTheme();
  const [use, setUse] = useState("");
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChangeTheme = (isDarkMode: boolean) => {
    changeTheme(isDarkMode ? darkTheme : lightTheme);
    console.log(isDarkMode);
    setIsDarkMode(isDarkMode);
  };

  //

  //
  return (
    <SignInStyled>
      <section className="formSection">
        <Text size={1} weight="bold">
          Welcome
        </Text>
        <Text>Complete your profile.</Text>
        <TextField
          size="large"
          name="name"
          label="Your Name"
          value={name}
          onChange={(name) => setName(name)}
        />

        <Select
          label="How are you planning to use Stickies?"
          value={use}
          onChange={(use) => setUse(use)}
          helperText="You can always change this later."
          options={[
            { label: "Remembers", value: "remembers" },
            { label: "Notes", value: "notes" },
          ]}
        />
        <Switch
          label="Are you a dark mode user?"
          value={isDarkMode}
          onChange={(isDarkMode) => handleChangeTheme(isDarkMode)}
        />
        <Button
          buttonType="submit"
          icon={"arrow"}
          type="main"
          size="large"
          isAsync
        >
          Start creating
        </Button>
      </section>
      <section>
        <div className="bgSection"></div>
      </section>
    </SignInStyled>
  );
};

export default SignIn;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

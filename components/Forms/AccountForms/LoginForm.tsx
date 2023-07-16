import { useState } from "react";
import { LoginFormStyled } from "./LoginFormStyled";
import TextField from "components/inputs/TextField/TextField";
import { Button } from "components";
import { Text } from "components/Text";
import { routes } from "Models/routesKeys";

const LoginForm = () => {
  const [form, setForm] = useState({
    usernameOrEmail: "",
    password: "",
  });

  return (
    <LoginFormStyled>
      <Text size={2} value="Sign In" />
      <div className="flex">
        <Text size={6} value="Acces" />
        <Text size={6} value="/" />
        <Text size={6} value="Create an Account" href={routes.register} />
      </div>
      <TextField
        label="Username or Email"
        value={form.usernameOrEmail}
        onChange={(usernameOrEmail) => setForm({ ...form, usernameOrEmail })}
      />
      <TextField
        label="Password"
        value={form.password}
        type="password"
        onChange={(password) => setForm({ ...form, password })}
      />
      <Button icon={"arrow"}>Sign In</Button>
    </LoginFormStyled>
  );
};

export default LoginForm;

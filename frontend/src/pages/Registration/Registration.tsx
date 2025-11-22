import { Header } from "../../components";
import styles from "../Authorization/Authorization.module.scss";
import { Button, Input, Text } from "../../ui-kit";
import { Link } from "react-router-dom";
import { login, logout } from "../../slices";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const Registration = () => {
  const [userlogin, setUserlogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  console.log(email, password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, login: userlogin }),
      });

      const data = await response.json();

      if (data.message) {
        setErrorMessage(data.message);
        return;
      }

      dispatch(login(data.user));

      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <>
      <Header />
      <div className={styles.authorization}>
        <Text size="text-h1" layout="text-block" align="text-center">
          Зарегистрироваться
        </Text>
        <Text color="text-error" layout="text-block" align="text-center">
          {errorMessage}
        </Text>
        <form
          action=""
          className={styles.authorization__form}
          onSubmit={handleSubmit}
        >
          <Input
            name="name"
            value={userlogin}
            handleChange={(e) => setUserlogin(e.target.value)}
            placeholder="Логин"
          ></Input>
          <Input
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></Input>
          <Input
            name="password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
          ></Input>
          {/*<Input name="password" placeholder="Повторите пароль"></Input>*/}
          <Button type="submit">Зарегистрироваться</Button>
        </form>
        <Text size="text-s" layout="text-block" align="text-center">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </Text>
      </div>
    </>
  );
};

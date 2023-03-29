import * as Yup from "yup";

import { Form, Formik } from "formik";
import { HOME_PATH, LOGIN_PATH } from "../../consts/paths";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginUser, useRegisterUser } from "../../hooks/user";

import Button from "../Button/Button";
import FormikInput from "../FormikInput/FormikInput";
import { User } from "../../types/user";
import { UserContext } from "../../contexts/UserContext";
import styles from "./UserForm.module.scss";
import { toast } from "react-hot-toast";
import { useContext } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const UserForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser, setToken, user, token } = useContext(UserContext);
  const { mutateAsync: registerUser } = useRegisterUser();
  const { mutateAsync: loginUser } = useLoginUser();

  const handleRegistration = (values: User) => {
    registerUser(values)
      .then((response) => {
        navigate(LOGIN_PATH);
        toast.success("Registration successful");
      })
      .catch(() => toast.error("You've entered wrong details"));
  };

  const handleLogin = (values: User) => {
    loginUser(values)
      .then((response) => {
        setUser(values);
        setToken(response.token || null);
        navigate(HOME_PATH);
        toast.success("Login successful");
      })
      .catch(() => toast.error("You've entered wrong details"));
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={
          location.pathname === "/register" ? handleRegistration : handleLogin
        }
      >
        {() => (
          <Form className={styles.container__form}>
            <FormikInput type="email" name="email" placeholder="Email" />
            <FormikInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <Button variant="primary" type="submit">
              {location.pathname === "/register" ? "REGISTER" : "LOGIN"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;

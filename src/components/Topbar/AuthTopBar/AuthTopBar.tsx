import { LOGIN_PATH, REGISTER_PATH } from "../../../routes/paths";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../../Button/Button";
import logo from "../assets/vite.svg";
import styles from "./AuthTopBar.module.scss";

const AuthTopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.container}>
      <img src={logo} alt="logo" />
      <div className={styles.container__buttons}>
        <Button
          variant={
            location.pathname === REGISTER_PATH ? "primary" : "secondary"
          }
          onClick={() => navigate(REGISTER_PATH)}
          disabled={location.pathname === REGISTER_PATH}
        >
          REGISTER
        </Button>
        <Button
          variant={location.pathname === LOGIN_PATH ? "primary" : "secondary"}
          onClick={() => navigate(LOGIN_PATH)}
          disabled={location.pathname === LOGIN_PATH}
        >
          LOGIN
        </Button>
      </div>
    </header>
  );
};

export default AuthTopBar;

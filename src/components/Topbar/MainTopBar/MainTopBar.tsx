import { ADD_PATH, HOME_PATH } from "../../../routes/paths";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../../Button/Button";
import logo from "../assets/vite.svg";
import styles from "./MainTopBar.module.scss";

const MainTopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.container}>
      <div className={styles.container__buttons}>
        <Button
          variant={location.pathname === HOME_PATH ? "primary" : "secondary"}
          onClick={() => navigate(HOME_PATH)}
          disabled={location.pathname === HOME_PATH}
        >
          HOME
        </Button>
        <Button
          variant={location.pathname === HOME_PATH ? "secondary" : "primary"}
          onClick={() => navigate(ADD_PATH)}
          disabled={location.pathname === ADD_PATH}
        >
          ADD
        </Button>
      </div>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default MainTopBar;

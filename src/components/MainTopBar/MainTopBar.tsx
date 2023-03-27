import { ADD_PATH, HOME_PATH } from "../../routes/const";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import styles from "./MainTopBar.module.scss";

const MainTopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.container}>
      <h1 className={styles.container__title}>Photos</h1>
      <Button
        variant="secondary"
        onClick={() => navigate(HOME_PATH)}
        disabled={location.pathname === HOME_PATH}
      >
        HOME
      </Button>
      <Button
        variant="secondary"
        onClick={() => navigate(ADD_PATH)}
        disabled={location.pathname === ADD_PATH}
      >
        ADD
      </Button>
    </header>
  );
};

export default MainTopBar;

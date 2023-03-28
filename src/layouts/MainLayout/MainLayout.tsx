import MainTopbar from "../../components/Topbar/MainTopBar/MainTopBar";
import { PropsWithChildren } from "react";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <MainTopbar />
      <main className={styles.container__main}>{children}</main>
    </div>
  );
};

export default MainLayout;

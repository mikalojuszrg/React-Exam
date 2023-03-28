import AuthTopBar from "../../components/Topbar/AuthTopBar/AuthTopBar";
import { PropsWithChildren } from "react";
import styles from "./AuthLayout.module.scss";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <AuthTopBar />
      <main className={styles.container__main}>{children}</main>
    </div>
  );
};

export default AuthLayout;

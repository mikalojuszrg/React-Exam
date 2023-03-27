import MainTopbar from "../../components/MainTopBar/MainTopBar";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <MainTopbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;

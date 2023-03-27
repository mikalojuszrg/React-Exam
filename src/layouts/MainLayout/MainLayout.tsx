import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;

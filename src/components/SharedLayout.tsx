import { Outlet } from "react-router-dom";
import { MainLayout, MenuAppLayout } from "./layout/Main.layout";
import UncpLogo from "../assets/images/uncp_logo.webp";
import {
  MenuDisplayContainer,
  MenuGrid,
  MenuMainContainer,
} from "./style/Menu.style";
import { CustomNavLink } from "./style/NavLink.style";
const SharedLayout = () => {
  return (
    <MainLayout>
      <MenuAppLayout>
        <MenuMainContainer>
          <img
            src={UncpLogo}
            alt="UNCP Logo"
            style={{
              width: "100px",
              alignSelf: "center",
              justifySelf: "center",
            }}
          />
          <MenuGrid>
            <CustomNavLink to={"/"}>Home</CustomNavLink>{" "}
            <CustomNavLink to={"/send-schedule-by-email"}>
              Envio de cronograma{" "}
            </CustomNavLink>
            <CustomNavLink to={"/upload-documents"}>
              Subir avances de informes e informe final
            </CustomNavLink>
            <CustomNavLink to={"/notifications"}>Notificaciones</CustomNavLink>
          </MenuGrid>
        </MenuMainContainer>

        <MenuDisplayContainer>
          <Outlet />
        </MenuDisplayContainer>
      </MenuAppLayout>
    </MainLayout>
  );
};

export default SharedLayout;

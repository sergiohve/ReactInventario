import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/download.jpg";

const navigation = [
  {
    title: "Inicio",
    href: "/dashboard",
    icon: "bi bi-speedometer2"
  },
  {
    title: "Administración",
    href: "/administracion",
    icon: "bi bi-bell",
  },
  {
    title: "Productos",
    href: "/productos",
    icon: "bi bi-patch-check",
  },
  {
    title: "Compras",
    href: "/compras",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Ventas",
    href: "/ventas",
    icon: "bi bi-card-text",
  },
  {
    title: "Mov. en cajas",
    href: "/cajas",
    icon: "bi bi-columns",
  },
  {
    title: "Devoluciones",
    href: "/devoluciones",
    icon: "bi bi-layout-split",
  },
  {
    title: "Kardex",
    href: "/kardex",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Reportes",
    href: "/reportes",
    icon: "bi bi-link",
  },
  {
    title: "Configuraciones",
    href: "/about",
    icon: "bi bi-people",
  },
 
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{ background: `url(${probg}) no-repeat` }}
      >
        <div className="p-3 d-flex">
          <img src={user1} alt="user" width="50" className="rounded-circle" />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">Steave Rojer</div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
         
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;

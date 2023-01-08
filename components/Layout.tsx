import Footer from "./Footer";
import Navbar from "./Navbar";

type DashboardLayoutProps = {
    children: React.ReactNode,
  };

const Layout = ({children}:DashboardLayoutProps) => {
    return (
        <div className="content">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
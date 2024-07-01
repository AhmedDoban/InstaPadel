import "./AuthWrapper.css";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

function AuthWrapper({ children }) {
  return (
    <div className="PageWrapper">
      <div className="page-container">
        <Sidebar />
        <div className="Page-Content">
          <Header />
          <div className="content">
            <div className="content-wrapper">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthWrapper;

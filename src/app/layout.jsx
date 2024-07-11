import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "@/Style/Normalize.css";
import "@/Style/Root.css";
import "@/Style/Style.css";
import { Suspense } from "react";
import StoreProvider from "@/Toolkit/StoreProvider";

export const metadata = {
  title: "instapadel",
  description: "Padel tournaments & events management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}

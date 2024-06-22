import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "@/Style/Normalize.css";
import "@/Style/Root.css";
import "@/Style/Style.css";
import { Suspense } from "react";
import StoreProvider from "@/Toolkit/StoreProvider";

export const metadata = {
  title: "Insta Padel",
  description: "Padel tournaments & events management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Suspense>
            {children}
          </Suspense>
        </StoreProvider>
      </body>
    </html>
  );
}

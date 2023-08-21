import MainLayout from "@/components/dashboard/layout/MainLayout";
import "@styles/globals.css";
import MenuContextProvider from "@/context/MenuContext";
import { Providers } from "./providers";

export const metadata = {
  title: "Dashboard",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>
            <Providers
              themeProps={{ attribute: "class", defaultTheme: "dark" }}
            >
              <main className="container mx-auto max-w-7xl pt-2 px-6">
                {children}
              </main>
            </Providers>
          </MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}

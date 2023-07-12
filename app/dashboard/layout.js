import MainLayout from "@/components/dashboard/layout/MainLayout";
import '@styles/globals.css'
import MenuContextProvider from "@/context/MenuContext";

export const metadata = {
   title: "Dashboard",
   description: "",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <MenuContextProvider>
               <MainLayout>{children}</MainLayout>
            </MenuContextProvider>
         </body>
      </html>
   );
}

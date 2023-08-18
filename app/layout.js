import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Sidebar from "@components/Sidebar";
import Feed from "@components/Feed";

export const metadata = {
  title: "Promptopia",
  description: "Discover and shared incredible prompts to use with ChatGPT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

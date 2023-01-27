import { Poppins } from "@next/font/google";
import ApolloContext from "../context/apollo-context";
import "./globals.css";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ApolloContext>
          <main style={poppins.style}>{children}</main>
        </ApolloContext>
      </body>
    </html>
  );
}

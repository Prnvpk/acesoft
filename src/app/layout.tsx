import { GeneralLayout } from "@/components/layout/GeneralLayout";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins?.className}>
        <GeneralLayout>
          {children}
        </GeneralLayout>
        
        </body>
    </html>
  );
}

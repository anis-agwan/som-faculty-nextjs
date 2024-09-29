import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar/Navbar";
import { AuthContextProvider } from "./store/auth-context";
import { DashboardContextProvider } from "./store/dashboard-context";
import { ReportContextProvider } from "./store/reports-context";
import { BIQuestionContextProvider } from "./store/biquestion-context";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SOM Faculty Portal",
  description: "A portal to access psychological assessment for MBA students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <div className="flex flex-col">
          <Providers>
            <Navbar />
            <DashboardContextProvider>
              <ReportContextProvider>
                <BIQuestionContextProvider>
                  {children}
                </BIQuestionContextProvider>
              </ReportContextProvider>
            </DashboardContextProvider>
            </Providers>
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}

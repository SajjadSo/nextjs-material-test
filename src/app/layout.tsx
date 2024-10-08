import { Toaster } from "react-hot-toast";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata = {
  title: "Next.js Mini Dashboard",
  description: "Next.js Mini Dashboard"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="bottom-center"
          gutter={3}
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            success: {
              style: {
                background: "#ebffe2"
              }
            },
            error: {
              style: {
                background: "#ffdcdc"
              }
            }
          }}
        />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

import Footer from "@/components/landing-page/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <>
          {children}
          <Footer/>
        </>
  );
}

import "./globals.css";

export const metadata = {
  title: "Associate Dentist Opportunity",
  description: "Associate dentist recruiting landing page for a rural Missouri practice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

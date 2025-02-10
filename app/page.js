export const metadata = {
  title: "SUNDAY",
  description: "A simple authentication app with Next.js and Firebase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>SUNDAY</title>
      </head>
      <body className="bg-white text-black h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}

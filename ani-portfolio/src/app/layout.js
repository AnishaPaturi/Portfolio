export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
        {children}
      </body>
    </html>
  );
}

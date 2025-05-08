export const metadata = {
  title: "Jake Toodly",
  description: "Todo app by jake",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

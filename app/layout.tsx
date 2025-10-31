export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "system-ui", margin: 0, padding: 24 }}>{children}</body>
    </html>
  );
}

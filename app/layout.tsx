import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://kombin-legal2.vercel.app"),
  title: 'Kombin Asistanı | Legal Docs',
  description: 'Kombin Asistanı mobil uygulamasına ait Gizlilik Politikası ve Kullanım Koşulları resmi yasal metinleri.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <main className="container">{children}</main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Kombin Asistanı. Tüm hakları saklıdır.</p>
        </footer>
      </body>
    </html>
  );
}

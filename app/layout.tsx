import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kombin Asistanı | Legal Docs',
  description: 'Kombin Asistanı uygulamasına ait Gizlilik Politikası ve Kullanım Koşulları metinleri.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
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

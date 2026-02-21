import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav className="nav-header">
        <Link href="/privacy">Gizlilik Politikası</Link>
        <Link href="/terms">Kullanım Koşulları</Link>
      </nav>

      <h1>Kombin Asistanı - Yasal Metinler</h1>
      <p>
        Bu web sitesi, <strong>Kombin Asistanı</strong> mobil uygulamasına ait resmi yasal metinleri ve sözleşmeleri barındırmaktadır.
        Uygulamamızı güvenle kullanabilmeniz için haklarınızı ve verilerinizin nasıl korunduğunu şeffaf bir şekilde paylaşıyoruz.
      </p>

      <p>
        Lütfen uygulamamızı indirmeden veya kullanmaya başlamadan önce aşağıdaki bağlantılardan
        Gizlilik Politikası ve Kullanım Koşulları metinlerimizi dikkatlice okuyunuz:
      </p>

      <ul>
        <li><Link href="/privacy"><strong>Gizlilik Politikası (Privacy Policy)</strong></Link></li>
        <li><Link href="/terms"><strong>Kullanım Koşulları (Terms of Service)</strong></Link></li>
      </ul>

      <h2>İletişim</h2>
      <p>
        Herhangi bir soru, görüş veya veri silme talebiniz için destek ekibimizle iletişime geçebilirsiniz:<br />
        <a href="mailto:support@kombinasistani.com">
          support@kombinasistani.com
        </a>
      </p>
    </>
  );
}

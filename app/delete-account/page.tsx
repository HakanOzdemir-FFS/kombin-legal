import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hesap Silme Talebi | Kombin Asistanı",
    description: "Kombin Asistanı uygulamasında hesabınızı ve tüm verilerinizi kalıcı olarak silmek için bu sayfayı kullanabilirsiniz.",
    alternates: {
        canonical: "/delete-account",
    },
};

export default function DeleteAccount() {
    return (
        <>
            <nav className="nav-header">
                <Link href="/">← Ana Sayfa</Link>
                <Link href="/privacy">Gizlilik Politikası</Link>
            </nav>

            <h1>Hesap Silme Talebi</h1>
            <p><strong>Son Güncelleme Tarihi:</strong> 16 Nisan 2026</p>

            <p>
                <strong>Kombin Asistanı</strong> uygulamasını kullanmaktan vazgeçmek istiyorsanız, hesabınızı ve
                tüm kişisel verilerinizi kalıcı olarak silebilirsiniz. Bu işlem geri alınamaz.
            </p>

            <h2>Yöntem 1: Uygulama İçinden Silme (Önerilen)</h2>
            <p>Hesabınızı doğrudan uygulama üzerinden silebilirsiniz:</p>
            <ol>
                <li>Uygulamayı açın ve hesabınıza giriş yapın.</li>
                <li><strong>Profil</strong> sekmesine gidin.</li>
                <li><strong>Ayarlar</strong> bölümüne girin.</li>
                <li><strong>"Hesabımı Sil"</strong> seçeneğine dokunun.</li>
                <li>Onay ekranında silme işlemini onaylayın.</li>
            </ol>
            <p>İşlem tamamlandığında hesabınız ve tüm verileriniz <strong>anında ve kalıcı olarak</strong> silinir.</p>

            <h2>Yöntem 2: E-posta ile Talep</h2>
            <p>
                Uygulamaya erişiminiz yoksa veya tercih ederseniz, aşağıdaki adrese e-posta göndererek hesap silme talebinde bulunabilirsiniz:
            </p>
            <p>
                <a href="mailto:fayfoysix@gmail.com?subject=Hesap%20Silme%20Talebi&body=Merhaba%2C%0A%0AHesabımın%20ve%20tüm%20verilerimin%20kalıcı%20olarak%20silinmesini%20talep%20ediyorum.%0A%0AKayıtlı%20e-posta%20adresim%3A%20%5Buraya%20yazın%5D%0A%0ATeşekkürler.">
                    <strong>fayfoysix@gmail.com</strong>
                </a>
            </p>
            <p>E-postanızda şunları belirtin:</p>
            <ul>
                <li>Konu: <em>Hesap Silme Talebi</em></li>
                <li>Kombin Asistanı hesabınıza kayıtlı e-posta adresiniz</li>
            </ul>
            <p>Talebiniz, kimliğiniz doğrulandıktan sonra <strong>en geç 30 gün</strong> içinde işleme alınır.</p>

            <h2>Silinen Veriler</h2>
            <p>Hesabınız silindiğinde aşağıdaki veriler kalıcı olarak yok edilir:</p>
            <ul>
                <li>Ad, soyad ve e-posta adresi</li>
                <li>Yüklediğiniz tüm kıyafet ve dolap fotoğrafları</li>
                <li>Oluşturduğunuz tüm kombin taslakları ve etiketler</li>
                <li>Takvim ve planlama geçmişiniz</li>
                <li>Premium abonelik geçmişi (App Store üzerinden yönetildiğinden ödeme kayıtları Apple&apos;da tutulur)</li>
            </ul>

            <h2>Önemli Notlar</h2>
            <ul>
                <li>Hesap silme işlemi <strong>geri alınamaz</strong>. Verileriniz kurtarılamaz.</li>
                <li>Aktif bir Premium aboneliğiniz varsa, hesabı silmeden önce App Store üzerinden aboneliğinizi iptal etmenizi öneririz.</li>
                <li>Hesap silme, App Store aboneliğinizi otomatik olarak iptal <strong>etmez</strong>. İptal için Apple&apos;ın abonelik yönetim sayfasını kullanınız.</li>
            </ul>

            <h2>İletişim</h2>
            <p>
                Hesap silme veya verilerinizle ilgili sorularınız için:<br />
                <a href="mailto:fayfoysix@gmail.com"><strong>fayfoysix@gmail.com</strong></a>
            </p>
        </>
    );
}

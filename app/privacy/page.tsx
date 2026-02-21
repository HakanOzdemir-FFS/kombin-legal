import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | Kombin Asistanı',
};

export default function PrivacyPolicy() {
    return (
        <>
            <nav className="nav-header">
                <Link href="/">← Ana Sayfa</Link>
                <Link href="/terms">Kullanım Koşulları</Link>
            </nav>

            <h1>Gizlilik Politikası</h1>
            <p><strong>Son Güncelleme Tarihi:</strong> 21 Şubat 2026</p>

            <p>
                Bu Gizlilik Politikası, Kombin Asistanı ("Uygulama", "biz", "bize" veya "bizim") mobil uygulamasını
                kullandığınızda kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
                Uygulamamızı kullanarak bu politikada belirtilen uygulamaları kabul etmiş olursunuz.
            </p>

            <h2>1. Toplanan Veriler</h2>
            <p>Uygulamamızı daha iyi hizmet verebilmek için aşağıdaki bilgileri toplayabiliriz:</p>
            <ul>
                <li><strong>Kayıt ve Hesap Bilgileri:</strong> Adınız, e-posta adresiniz ve şifreniz gibi hesap oluştururken sağladığınız veriler.</li>
                <li><strong>Dolap ve Kıyafet Verileri:</strong> Uygulamaya yüklediğiniz kıyafet görselleri, etiketlemeler ve oluşturduğunuz kombin tercihleri.</li>
                <li><strong>Cihaz ve Kullanım Bilgileri:</strong> IP adresiniz, cihaz modeliniz, işletim sistemi sürümünüz ve uygulama içindeki etkileşimleriniz.</li>
                <li><strong>Konum Bilgisi:</strong> Sadece anlık hava durumuna uygun kombin önerebilmek amacıyla ve işletim sistemi üzerinden bize açıkça izin vermeniz koşuluyla alınan yaklaşık konum verileri.</li>
            </ul>

            <h2>2. Verilerin Kullanımı</h2>
            <p>Topladığımız verileri tamamen temel fonksiyonlarımızı yerine getirmek amacıyla kullanırız:</p>
            <ul>
                <li>Hava durumu, takvim planlarınız ve kişisel zevklerinize göre size özel akıllı kombin önerileri sunmak.</li>
                <li>Uygulama deneyiminizi kişiselleştirmek ve teknik altyapıyı sorunsuz çalıştırmak.</li>
                <li>Kullanıcı hesabınızı yönetmek, senkronizasyon sağlamak ve müşteri desteği sunmak.</li>
                <li>Premium üyelik işlemlerini, ödemeleri ve doğrulama süreçlerini güvenli bir şekilde yönetmek.</li>
            </ul>

            <h2>3. Veri Paylaşımı ve Üçüncü Taraflar</h2>
            <p>
                Kişisel verileriniz hiçbir şart altında reklam veya doğrudan pazarlama şirketlerine <strong>satılamaz</strong>.
                Ancak altyapı ihtiyaçlarımız doğrultusunda şu taraflarla veri paylaşımı yapılabilir:
            </p>
            <ul>
                <li><strong>Servis Sağlayıcılar:</strong> Güvenli sunucu barındırma (örn. Supabase), uygulama içi analitik ve ödeme / üyelik yönetimi (örn. RevenueCat, Apple) hizmetleri aldığımız global ve sertifikalı iş ortakları.</li>
                <li><strong>Yasal Zorunluluklar:</strong> Geçerli yasa ve mevzuatların açıkça gerektirdiği durumlarda yetkili adli veya idari makamlarla.</li>
            </ul>

            <h2>4. Veri Güvenliği</h2>
            <p>
                Kişisel bilgilerinizin güvenliği bizim için son derece önemlidir. Veri tabanımızda ve sunucu
                iletişimimizde endüstri standardı şifreleme (SSL/TLS ve RLS) önlemleri kullanıyoruz.
                Ancak internet üzerinden yapılan hiçbir veri aktarımının %100 güvenli garanti edilemeyeceğini unutmayınız.
            </p>

            <h2>5. Veri Silme ve Kullanıcı Hakları</h2>
            <p>Global standartlar ve yerel KVKK kanunu uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul>
                <li>Verilerinize erişme ve bilgi talep etme.</li>
                <li>Eksik veya hatalı verilerin sistem üzerinden düzeltilmesi.</li>
                <li><strong>Hesap Silme:</strong> Uygulama içindeki Profil &gt; Ayarlar &gt; "Hesabımı Sil" butonu kullanılarak ya da e-posta yoluyla bize ulaşılarak verilerinizin kalıcı olarak anonimleştirilmesi / silinmesi talebi.</li>
            </ul>

            <h2>6. İletişim</h2>
            <p>
                Bu gizlilik politikası hakkında sorularınız, endişeleriniz veya veri haklarınızla ilgili talepleriniz için bize adresinden ulaşabilirsiniz:<br />
                <a href="mailto:support@kombinasistani.com">support@kombinasistani.com</a>
            </p>
        </>
    );
}

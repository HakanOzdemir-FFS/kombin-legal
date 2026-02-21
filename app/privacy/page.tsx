import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Gizlilik Politikası | Kombin Asistanı",
    description: "Kombin Asistanı mobil uygulamasının gizlilik politikası, veri toplama, saklama, kullanıcı hakları ve üçüncü taraf hizmetlerin kullanımını detaylı şekilde açıklar.",
    alternates: {
        canonical: "/privacy",
    },
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
                Bu Gizlilik Politikası, <strong>Kombin Asistanı</strong> ("Uygulama", "biz", "bize" veya "bizim") mobil uygulamasını
                kullandığınızda kişisel verilerinizin nasıl toplandığını, kullanıldığını, korunduğunu ve paylaşıldığını açıklar.
                Uygulamamızı indirerek veya kullanarak bu politikada belirtilen uygulamaları tamamen kabul etmiş olursunuz.
            </p>

            <h2>1. Toplanan Veriler</h2>
            <p>Uygulamamızın temel işlevlerini (kıyafet kaydetme, takvim oluşturma, hava durumu bazlı öneri) sunabilmek için aşağıdaki veri türlerini topluyoruz:</p>
            <ul>
                <li><strong>Hesap ve Profil Bilgileri:</strong> Apple ile Giriş (Sign in with Apple) veya Google ile Giriş yöntemlerini kullandığınızda sağlanan ad, soyad ve e-posta adresiniz.</li>
                <li><strong>Dolap ve İçerik Verileri:</strong> Uygulamaya kendi isteğinizle yüklediğiniz kıyafet (gardırop) fotoğrafları, bu fotoğraflara verdiğiniz etiketler ve oluşturduğunuz kombin taslakları.</li>
                <li><strong>Cihaz ve Analitik Bilgileri:</strong> Uygulama performansını izlemek ve hataları (crash logs) tespit etmek amacıyla IP adresiniz, cihaz modeliniz, işletim sistemi sürümünüz ve uygulama içindeki anonim kullanım istatistikleri.</li>
                <li><strong>Konum Bilgisi (İsteğe Bağlı):</strong> Yalnızca işletim sistemi izin ekranı üzerinden "Uygulamayı Kullanırken" veya "Bir Kez" seçenekleriyle açıkça izin vermeniz koşuluyla, size anlık lokasyon bazlı hava durumuna uygun kombin önerebilmek amacıyla toplanan <em>yaklaşık (approximate)</em> konum verileri. Konum verileriniz arka planda sürekli takip edilmez.</li>
            </ul>

            <h2>2. Verilerin Kullanımı</h2>
            <p>Topladığımız kişisel verileri yalnızca aşağıdaki meşru amaçlar doğrultusunda kullanıyoruz:</p>
            <ul>
                <li>Uygulamanın temel özelliklerini (örn. kıyafet yükleme, yapay zeka destekli stil önerileri alma, seyahat ve takvim planlama) kesintisiz olarak sunmak.</li>
                <li>Uygulama deneyiminizi kişiselleştirmek ve teknik altyapımızı geliştirmek.</li>
                <li>Kullanıcı hesabınızı cihazlar arasında senkronize edebilmek ve güvenli bir şekilde yönetmek.</li>
                <li>Premium üyelik işlemlerini, App Store içi satın almaları (In-App Purchases) ve doğrulama süreçlerini güvenli bir şekilde yönetmek.</li>
                <li>Size teknik destek hizmeti sunmak (müşteri hizmetleri taleplerinize yanıt vermek).</li>
            </ul>

            <h2>3. Veri Paylaşımı ve Üçüncü Taraflar</h2>
            <p>
                Kombin Asistanı, kişisel verilerinizi <strong>hiçbir şart altında reklam şirketlerine, veri simsarlarına veya doğrudan pazarlama kuruluşlarına SATMAZ.</strong>
                Ancak, güvenli ve modern bir hizmet altyapısı sağlayabilmek için aşağıdaki global ve endüstri standardı hizmet sağlayıcıları ile entegre çalışırız:
            </p>
            <ul>
                <li><strong>Supabase:</strong> Kullanıcı kimlik doğrulama, güvenli veri tabanı barındırma ve yüklediğiniz kıyafet fotoğraflarının (AWS S3 benzeri bulut depolarında) uçtan uca güvenli bir şekilde saklanması amacıyla kullanılır. Supabase, katı veri güvenliği yasalarına tabidir.</li>
                <li><strong>Apple ve RevenueCat:</strong> Uygulama içi aboneliklerin (Premium özellikler) güvenli takibi, ödeme doğrulaması ve makbuz (receipt) işlemleri için Apple sistemleri ve RevenueCat altyapısı kullanılır. Ödeme kartı bilgileriniz <em>asla</em> bize ulaşmaz, doğrudan Apple tarafından işlenir.</li>
                <li><strong>Yasal Zorunluluklar:</strong> Sadece ve sadece Türkiye Cumhuriyeti kanunlarının veya geçerli uluslararası hukuk kurallarının (örn. mahkeme kararları) açıkça gerektirdiği acil ve zorunlu hallerde yetkili adli veya idari makamlarla veri paylaşılabilir.</li>
            </ul>

            <h2>4. Veri Saklama Süresi (Data Retention)</h2>
            <p>
                Verileriniz, yalnızca kullanıcı hesabınız aktif olduğu sürece veya size hizmet sunmak için yasal olarak gerekli olduğu süre boyunca güvenli sunucularda saklanır.
            </p>
            <ul>
                <li>Uygulama içerisindeki <strong>"Hesabımı Sil"</strong> (Delete Account) özelliğini kullandığınızda veya bize yazılı olarak başvurduğunuzda, e-posta adresiniz, profil adınız, yüklediğiniz tüm dolap fotoğrafları ve kombin geçmişiniz veritabanımızdan (Supabase) <strong>derhal ve kalıcı olarak (hard delete)</strong> silinir.</li>
                <li>Bu işlem geri dönülemezdir.</li>
            </ul>

            <h2>5. Veri Güvenliği</h2>
            <p>
                Veri güvenliğinizi son derece ciddiye alıyoruz. Tüm veri tabanı işlemlerinde Row Level Security (RLS) politikaları kullanılarak yetkisiz erişimler ağ düzeyinde bloklanır. Verileriniz transfer halindeyken (in-transit) taşıma katmanı şifrelemesi (TLS/SSL) ile, beklerken (at-rest) ise şifrelenmiş sunucu disklerinde korunur.
                Tüm makul teknik önlemleri almamıza rağmen, internet üzerindeki hiçbir veri aktarımının %100 ihlal edilemez garantisi taşıyamayacağını hatırlatırız.
            </p>

            <h2>6. Çocukların Gizliliği ve Yaş Sınırı (COPPA)</h2>
            <p>
                Kombin Asistanı, genel bir kitleye (yaşam tarzı, moda) hitap etmektedir ve <strong>13 yaşın altındaki (Avrupa Ekonomik Alanı'nda iseniz 16 yaşın altındaki)</strong> çocukların kullanımına yönelik tasarlanmamıştır.
                13 yaşından küçük kimselerden bilerek veya kasıtlı olarak doğrudan kişisel veri toplamıyoruz. Eğer 13 yaşından küçük bir kullanıcının bize geçerli bir yasal ebeveyn izni olmadan kişisel veri sağladığını fark edersek, bu bilgileri sistemlerimizden derhal sileriz. Eğer böyle bir durumdan şüpheleniyorsanız (örneğin çocuğunuz uygulamamızı kullanıyorsa) lütfen derhal bizimle iletişime geçin.
            </p>

            <h2>7. Kullanıcı Hakları (KVKK / GDPR / CCPA)</h2>
            <p>Kişisel verilerinizle ilgili olarak KVKK, GDPR ve bölgesel yasalara uygun olarak aşağıdaki haklara sahipsiniz:</p>
            <ul>
                <li>Hangi kişisel bilgilerinizi işlediğimiz konusunda tam şeffaflık talep etme (Erişim hakkı).</li>
                <li>Eksik veya hatalı verilerin sistem üzerinden düzeltilmesi (Düzeltme hakkı).</li>
                <li>Makinece okunabilir formatta verilerinizin bir kopyasını dışa aktarma (Veri taşınabilirliği).</li>
                <li>Uygulama içindeki Profil &gt; Ayarlar &gt; "Hesabımı Sil" butonu kullanılarak ya da e-posta yoluyla "Unutulma Hakkınızı" kullanıp tüm verilerinizin kalıcı olarak yok edilmesini talep etme.</li>
            </ul>

            <h2>8. İşbu Politikadaki Değişiklikler</h2>
            <p>
                Kombin Asistanı, mevzuat değişikliklerine veya uygulamanın yeni özelliklerine paralel olarak bu Gizlilik Politikasını zaman zaman güncelleyebilir.
                Önemli (materyal) değişiklikler olması halinde, sizi uygulama içinden bir uyarı ile (veya push bildirimi ile) haberdar edeceğiz. Belirtilen bu belgeleri periyodik olarak okumak ve incelemek sizin sorumluluğunuzdadır.
            </p>

            <h2>9. İletişim</h2>
            <p>
                Gizlilik politikamız, verilerinizin yönetimi veya haklarınız ile ilgili her türlü teknik veya hukuki soru, talep veya şikayetiniz için destek ekibimize resmi e-posta adresimizden 7/24 ulaşabilirsiniz:
                <br />
                <a href="mailto:support@kombinasistani.com"><strong>support@kombinasistani.com</strong></a>
            </p>
        </>
    );
}

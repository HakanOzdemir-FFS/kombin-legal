import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kullanım Koşulları | Kombin Asistanı',
    description: 'Kombin Asistanı uygulaması Kullanım Koşulları (Terms of Service). Abonelik kuralları, Apple App Store IAP kuralları, cayma hakları.',
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsOfService() {
    return (
        <>
            <nav className="nav-header">
                <Link href="/">← Ana Sayfa</Link>
                <Link href="/privacy">Gizlilik Politikası</Link>
            </nav>

            <h1>Kullanım Koşulları</h1>
            <p><strong>Son Güncelleme Tarihi:</strong> 21 Şubat 2026</p>

            <p>
                <strong>Kombin Asistanı</strong> ("Uygulama", "biz", "bize") mobil uygulamasına hoş geldiniz.
                Uygulamayı mobil cihazınıza indirerek, kurarak veya Apple App Store gibi bir uygulama mağazası üzerinden erişerek
                aşağıdaki Kullanım Koşullarını ("Sözleşme") yasal olarak bağlayıcı bir şekilde kabul etmiş sayılırsınız.
                Bu koşulları tamamen kabul etmiyorsanız lütfen uygulamayı derhal cihazınızdan kaldırınız ve kullanmayı durdurunuz.
            </p>

            <h2>1. Hizmetin Kapsamı ve Tanımı</h2>
            <p>
                Kombin Asistanı, kullanıcıların şahsi kıyafetlerini dijital olarak kaydetmelerine, günlük hava
                durumuna göre algoritma bazlı kombin önerileri almalarına, takvim üzerinde kıyafet planlaması yapmalarına ve
                gelişmiş gardırop istatistiklerine erişmelerine yardımcı olan dijital bir yaşam tarzı ve stil asistanıdır.
                <br /><br />
                Hizmetlerimiz, herhangi bir kusursuzluk garantisi olmadan, sunulduğu anki mevcut ve güncel durumuyla <strong>"OLDUĞU GİBİ" (AS IS)</strong> sağlanmaktadır. Uygulama, her durum ve şartta doğru hava tahmini veya kullanımınıza mutlak uygunluk (fitness for a particular purpose) gibi zımni garantiler vermez.
            </p>

            <h2>2. Kullanıcı Yükümlülükleri ve Hesap Güvenliği</h2>
            <ul>
                <li>Uygulamayı indirmek ve kullanmak için yerel yasalara göre reşit sayılan yaşta veya en az 13 yaşında (bölgeye göre 16) olmanız, reşit değilseniz dahi yasal ebeveyn onayınızın bulunması zorunludur.</li>
                <li>Hesap ve profil (Apple Sign-in / Google Sign-in) bilgilerinizin şifre ve erişim güvenliğinden şahsen sorumlusunuz. Cihazınızın izinsiz kullanımından doğacak sorunlarda şirketimiz mesuliyet kabul etmez.</li>
                <li>Uygulama içeriğine sistemin kendi arayüzü haricinde herhangi bir şekilde veya yazılımla (bot, scraper, spider) sistematik olarak veri çekme, tersine mühendislik yapma (reverse engineering) veya sunucu altyapısına ağır yük bindirme girişimleri kesin kurallarla yasaktır. Tespiti halinde hesaba derhal el konulur ve hukuki haklar aranır.</li>
                <li>Dolabınıza eklemek üzere sisteme yüklediğiniz görsel fotoğrafların tamamen şahsınıza ait veya kullanım lisansına sahip olduğunuzdan, müstehcenlik, şiddet veya yasa dışı üçüncü taraf nesneler barındırmadığından emin olmak sizin yasal sorumluluğunuzdadır.</li>
            </ul>

            <h2>3. Premium Abonelik, Faturalandırma, Apple ve Ödemeler</h2>
            <p>
                Kombin Asistanı mobil uygulaması, kullanıcılara sınırlı eşya yükleme izni veren ücretsiz bir "Temel (Basic) Paket" sunar.
                Kullanıcılar dilerlerse limitsiz eşya ekleme ve gelişmiş özelliklere erişim için (Aylık veya Yıllık periyotlarla) uygulama içi satın alma yoluyla <strong>Premium Abonelik</strong> (Kombin Pro/Premium) satın alabilirler.
            </p>
            <ul>
                <li>Tüm Premium abonelik satın alımları doğrudan <strong>Apple App Store (Apple Inc.)</strong> ekosistemi üzerinden işlenir, yönetilir ve tahsil edilir.</li>
                <li>Satın alma işlemini onaylamanız halinde, belirtilen tutar Apple ID (iTunes) hesabınıza bağlı varsayılan ödeme yönteminden ilgili mağaza tarafından tahsil edilecektir.</li>
                <li><strong>Otomatik Yenileme (Auto-Renewable Subscriptions):</strong> Abonelikler, seçtiğiniz dönemin (Aylık/Yıllık) bitimine <strong>en az 24 saat önce</strong> iOS cihazınızın Ayarlar menüsünden (Apple ID &gt; Abonelikler) kapatılıp iptal edilmediği sürece <strong>otomatik olarak yenilenir.</strong></li>
                <li>Aktif dönemin bitimine 24 saatten daha az bir süre kala, hesabınızdan bir sonraki dönemin yenileme ücreti tahsil edilecektir.</li>
                <li>Geçerli dönemin ücreti iade edilemez ve halihazırda faturalandırılmış (içinde bulunulan aktif) bir dönemin aboneliği iptal edilemez. Ancak iptal işlemi gerçekleştirirseniz, halihazırda ödenmiş sürenin sonuna kadar Premium özelliklerden faydalanmaya devam edebilirsiniz.</li>
            </ul>

            <h2>4. Cayma Hakkı, İade Politikası ve İptaller</h2>
            <p>
                <strong>Önemli Kural:</strong> Kombin Asistanı üzerinden gerçekleştirilen tüm ödemeler Apple'ın küresel ödeme altyapısı ve platform kuralları üzerinden yürütülmektedir. Bu nedenle:
            </p>
            <ul>
                <li><strong>Firmamızın (Kombin Asistanı Geliştirici Ekibinin) kullanıcılara uzaktan doğrudan ücret manipülasyonu yapma, para iadesi (refund) onayı veya kısmi iade sağlama yetkisi veya teknik erişimi kesinlikle (Apple kuralları gereği) bulunmamaktadır.</strong></li>
                <li>Tüm iade, itiraz veya cayma hakkı talepleri doğrudan <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a> adresi üzerinden veya Apple Müşteri Destek kanallarından bizzat kullanıcı tarafından yapılmalıdır. İadelerin onay / ret inisiyatifi ve değerlendirme yetkisi tamamen ve sadece Apple'a aittir.</li>
            </ul>

            <h2>5. Fikri Mülkiyet Hakları ve Lisanslar</h2>
            <p>
                Kombin Asistanı uygulamasının adı, telif ve marka hakları, marka logosu, arayüz tasarımı (UI/UX), uygulama içi sesler, özgün yazılım algoritmaları ve tüm kaynak kodu tamamen geliştiricilere aittir ve uluslararası/yerel fikri mülkiyet, telif hukuku yasalarıyla korunmaktadır.
                Kullanıcılara, uygulamanın yalnızca kişisel (ticari olmayan) amaçlarla kullanılması için sınırlandırılmış, iptal edilebilir, başkalarına devredilemez ve münhasır olmayan bir kullanım lisansı verilir. Uygulamanın grafik materyallerinin kopyalanarak veya ilham alınarak benzer formatta rakip platformlarda kullanılması hukuken yasaktır.
            </p>

            <h2>6. Sorumluluğun Sınırlandırılması (Limitation of Liability)</h2>
            <p>
                İlgili kanunların izin verdiği azami ölçüde, uygulamanın kullanımından (veya kullanılamamasından), teknik aksaklıklardan, uygulama içi servis kesintilerinden, verilerin dolaptan silinmesi veya kaybolmasından doğacak doğrudan, dolaylı, kasıtsız veya cezai tazminat gerektiren hiçbir maddi / manevi zarardan Kombin Asistanı veya şahsi geliştiricileri yasal olarak sorumlu tutulamaz.
            </p>

            <h2>7. Değişiklikler ve Yürürlük</h2>
            <p>
                Piyasa koşullarına, yasal mevzuatlara veya Apple App Store kurallarındaki güncellemelere bağlı olarak işbu Kullanım Koşulları önceden makul bir bildirim yapılmaksızın dilediği zaman tarafımızca güncellenebilir. En güncel sözleşme metni her zaman uygulama içerisinde "Ayarlar" sekmesinde ve bu resmi web sayfasında yayınlanır. Uygulamayı güncellenmiş yayınlanma tarihinden itibaren kullanmaya devam etmeniz, değişikliği kabul ettiğiniz anlamına gelir.
            </p>

            <h2>8. Hukukun Uygulanması ve Uyuşmazlık Çözümü (Dispute Resolution)</h2>
            <p>
                İşbu sözleşmenin tefsiri, uygulanması ve doğabilecek her türlü hukuki uyuşmazlığın geçerliliği <strong>Türkiye Cumhuriyeti</strong> yasalarına tabi olacaktır.
                Taraflar arasında işbu sözleşmeden doğacak her türlü ihtilafta veya çözülemeyen durumlarda İstanbul / Türkiye mahkemeleri ve yetkili icra daireleri kesin yargı karar mercileridir.
            </p>

            <h2>9. İletişim, Destek ve Geri Bildirim</h2>
            <p>
                Kullanım koşullarımızla veya faturalandırma (teknik konularda, iade hariç) süreçleriyle ilgili destek almak, sorularınızı iletmek veya yasal bildirimlerde bulunmak için destek ekibimize ulaşabilirsiniz:
                <br />
                <a href="mailto:support@kombinasistani.com"><strong>support@kombinasistani.com</strong></a>
            </p>
        </>
    );
}

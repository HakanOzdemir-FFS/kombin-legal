import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kullanım Koşulları | Kombin Asistanı',
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
                Kombin Asistanı mobil uygulamasına hoş geldiniz. Uygulamayı mobil cihazınıza indirerek, erişerek
                veya kullanarak aşağıdaki Kullanım Koşullarını yasal olarak kabul etmiş sayılırsınız.
                Bu koşulları kabul etmiyorsanız lütfen uygulamayı kullanmayınız.
            </p>

            <h2>1. Hizmetin Kapsamı</h2>
            <p>
                Kombin Asistanı, kullanıcıların kıyafetlerini dijital olarak kaydetmelerine, günlük hava
                durumuna göre algoritma bazlı kombin önerileri almalarına ve takvim bazlı kıyafet planlaması
                yapmalarına yardımcı olan bir yaşam tarzı asistanıdır.
            </p>
            <p>
                Hizmetlerimiz "olduğu gibi" sağlanmaktadır ve herhangi bir zımni garanti içermemektedir.
            </p>

            <h2>2. Kullanıcı Yükümlülükleri ve Hesabınız</h2>
            <ul>
                <li>Uygulamayı kullanmak için oluşturduğunuz hesap bilgilerinin doğruluğundan siz sorumlusunuz.</li>
                <li>Parola güvenliğiniz ve hesabınız üzerinden yapılan tüm işlemler sizin sorumluluğunuzdadır. Hesabınıza yetkisiz bir erişim fark ederseniz bizi derhal bilgilendirmelisiniz.</li>
                <li>Sisteme yüklediğiniz kıyafet fotoğraflarının yasalara uygun olduğundan ve üçüncü şahısların fikri mülkiyet, telif veya gizlilik haklarını ihlal etmediğinden emin olmalısınız.</li>
                <li>Uygulamayı hacklemeye çalışmak, tersine mühendislik yapmak veya sahte data manipülasyonları gerçekleştirmek yasaktır ve hesabınızın kapatılmasıyla sonuçlanır.</li>
            </ul>

            <h2>3. Premium Abonelik Sistemi ve Ödemeler</h2>
            <p>
                Kombin Asistanı, temel özellikleri ücretsiz sunarken ek özellikler (örn. sınırsız dolap ekleme,
                gelişmiş analizler vb.) için Premium Abonelik paketleri sunabilir.
            </p>
            <ul>
                <li>Tüm Premium abonelik satın alımları doğrudan Apple App Store ekosistemi üzerinden gerçekleşir ve yönetilir.</li>
                <li>Satın alma işlemi onaylandığında, tutar Apple ID hesabınızdan tahsil edilir.</li>
                <li>Abonelikler, aktif dönemin bitiminden en az 24 saat önce App Store hesap ayarlarından iptal edilmediği takdirde <strong>otomatik olarak yenilenir</strong>.</li>
                <li>İade ve iade süreçleri tamamen Apple'ın standart App Store politikalarına tabidir, Kombin Asistanı doğrudan bir ücret iadesi yapamaz.</li>
            </ul>

            <h2>4. Fikri Mülkiyet Hakları</h2>
            <p>
                Kombin Asistanı uygulamasının logosu, arayüz tasarımı, özgün grafikleri, kaynak kodları ve
                kombin öneri algoritmaları tamamen şirketimize aittir ve uluslararası telif yasalarıyla korunmaktadır.
                Uygulamanın ticari amaçlarla kopyalanması veya kopyalanarak yayınlanması yasaktır.
            </p>

            <h2>5. Sorumluluğun Sınırlandırılması</h2>
            <p>
                Uygulamamızın çalışmasında yaşanabilecek olası teknik aksaklıklar, bağlantı hataları veya
                veri kaybı durumlarında Kombin Asistanı doğrudan veya dolaylı maddi / manevi zararlardan sorumlu tutulamaz.
            </p>

            <h2>6. Koşullarda Değişiklikler</h2>
            <p>
                Kombin Asistanı, iş bu Kullanım Koşullarını dilediği zaman, önceden bildirimde bulunmaksızın tek
                taraflı olarak güncelleme veya değiştirme hakkını saklı tutar. Değişiklikler uygulamada yayınlandığı
                andan itibaren geçerli olur.
            </p>

            <h2>7. İletişim Bilgileri</h2>
            <p>
                Koşullarla ilgili hukuki veya genel sorularınız için bize yazın:<br />
                <a href="mailto:support@kombinasistani.com">support@kombinasistani.com</a>
            </p>
        </>
    );
}

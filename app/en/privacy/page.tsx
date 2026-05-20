import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Outfit Assistant',
  description: 'The privacy policy of the Outfit Assistant mobile application — detailing data collection, storage, user rights, and third-party services.',
  alternates: {
    canonical: '/en/privacy',
  },
};

export default function PrivacyPolicyEN() {
  return (
    <>
      <nav className="nav-header">
        <Link href="/en">← Home</Link>
        <Link href="/en/terms">Terms of Service</Link>
        <Link href="/privacy" className="lang-switch">🇹🇷 Türkçe</Link>
      </nav>

      <h1>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> April 24, 2026</p>

      <p>
        This Privacy Policy explains how <strong>Outfit Assistant</strong> ("Application", "we", "us", or "our") collects,
        uses, protects, and shares your personal data when you use our mobile application.
        By downloading or using our application, you fully accept the practices described in this policy.
      </p>

      <h2>1. Data We Collect</h2>
      <p>To provide the core features of our application (wardrobe management, calendar planning, weather-based outfit suggestions), we collect the following types of data:</p>
      <ul>
        <li><strong>Account and Profile Information:</strong> Your name, surname, and email address provided when you sign in with Apple (Sign in with Apple) or Google.</li>
        <li><strong>Wardrobe and Content Data:</strong> Clothing (wardrobe) photos you voluntarily upload to the application, tags you assign to those photos, and outfit combinations you create.</li>
        <li><strong>Device and Analytics Information:</strong> Your IP address, device model, operating system version, and anonymous in-app usage statistics, collected to monitor application performance and detect errors (crash logs).</li>
        <li><strong>Location Data (Optional):</strong> Approximate location data collected solely to suggest weather-appropriate outfit combinations, and only if you explicitly grant permission via the OS permission screen by selecting "While Using the App" or "Once." Your location is never tracked continuously in the background.</li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <p>We use the personal data we collect solely for the following legitimate purposes:</p>
      <ul>
        <li>To provide the application's core features (e.g., clothing uploads, AI-powered style suggestions, travel and calendar planning) without interruption.</li>
        <li>To personalize your app experience and improve our technical infrastructure.</li>
        <li>To synchronize your user account across devices and manage it securely.</li>
        <li>To securely manage premium membership transactions, in-app purchases, and verification processes.</li>
        <li>To provide you with technical support (respond to customer service requests).</li>
        <li>To track user behavior for app analytics and advertising performance measurement (event tracking via Facebook SDK).</li>
      </ul>

      <h2>3. Data Sharing and Third Parties</h2>
      <p>
        Outfit Assistant <strong>NEVER sells your personal data to advertising companies, data brokers, or direct marketing organizations under any circumstances.</strong>
        However, to maintain a secure and modern service infrastructure, we integrate with the following global, industry-standard service providers:
      </p>
      <ul>
        <li><strong>Supabase:</strong> Used for user authentication, secure database hosting, and the end-to-end secure storage of your uploaded clothing photos (in AWS S3-like cloud storage). Supabase is subject to strict data security laws.</li>
        <li><strong>Apple and RevenueCat:</strong> Apple systems and RevenueCat infrastructure are used for secure tracking of in-app subscriptions (Premium features), payment verification, and receipt processing. Your payment card information <em>never</em> reaches us — it is processed directly by Apple.</li>
        <li><strong>Meta (Facebook SDK):</strong> The following data is sent to Meta for app analytics and advertising performance measurement:
          <ul>
            <li><strong>Data Sent:</strong> User ID (Supabase UUID), event data (registration, outfit view, wishlist addition, purchase), IDFA (only if ATT permission is granted), device model, iOS version, app version, IP address, and timestamp. Your email address, name, passwords, outfit photos, and payment information are NOT sent to Meta.</li>
            <li><strong>Purpose:</strong> To analyze user behavior, track Facebook ad conversion performance, and optimize ad targeting.</li>
            <li><strong>Control:</strong> If you deny the ATT (App Tracking Transparency) permission, IDFA is not shared. If you delete your account via the app settings, your data at Meta is also cleared.</li>
            <li><strong>Meta Privacy Policy:</strong> For more information about Meta's data processing practices, please review the <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer">Facebook Privacy Policy</a> and <a href="https://www.facebook.com/policies_center/" target="_blank" rel="noopener noreferrer">Data Policy</a>.</li>
          </ul>
        </li>
        <li><strong>Legal Obligations:</strong> Data may be shared with authorized judicial or administrative authorities only when explicitly required by the laws of the Republic of Turkey or applicable international legal rules (e.g., court orders) in urgent and mandatory cases.</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        Your data is stored on secure servers only for as long as your user account is active or as legally required to provide you with service.
      </p>
      <ul>
        <li>When you use the <strong>"Delete My Account"</strong> feature within the application or submit a written request to us, your email address, profile name, all uploaded wardrobe photos, and outfit history are <strong>immediately and permanently (hard deleted)</strong> from our database (Supabase).</li>
        <li>This process is irreversible.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We take your data security extremely seriously. Row Level Security (RLS) policies are applied to all database operations to block unauthorized access at the network level. Your data is protected by transport layer encryption (TLS/SSL) while in transit and by encrypted server disks while at rest.
        Despite all reasonable technical measures we take, we remind you that no data transmission over the internet can carry a 100% breach-free guarantee.
      </p>

      <h2>6. Children's Privacy and Age Limit (COPPA)</h2>
      <p>
        Outfit Assistant targets a general audience (lifestyle, fashion) and is <strong>not designed for use by children under the age of 13 (or under 16 in the European Economic Area).</strong>
        We do not knowingly or intentionally collect personal data directly from anyone under 13. If we become aware that a user under 13 has provided us with personal data without valid legal parental consent, we will immediately delete that information from our systems. If you suspect such a situation (for example, if your child is using our app), please contact us immediately.
      </p>

      <h2>7. Your Rights (KVKK / GDPR / CCPA)</h2>
      <p>In relation to your personal data, you have the following rights in compliance with KVKK, GDPR, and regional laws:</p>
      <ul>
        <li>Request full transparency about which personal information we process (Right of Access).</li>
        <li>Have incomplete or incorrect data corrected in our system (Right to Rectification).</li>
        <li>Export a machine-readable copy of your data (Data Portability).</li>
        <li>Exercise your "Right to be Forgotten" and request the permanent destruction of all your data via the Profile &gt; Settings &gt; "Delete My Account" button in the application or by email.</li>
      </ul>

      <h2>8. Changes to This Policy</h2>
      <p>
        Outfit Assistant may occasionally update this Privacy Policy in parallel with legislative changes or new application features.
        In the event of significant (material) changes, we will notify you with an in-app alert (or a push notification). It is your responsibility to periodically read and review these documents.
      </p>

      <h2>9. Contact</h2>
      <p>
        For any technical or legal questions, requests, or complaints regarding our privacy policy, management of your data, or your rights, you can reach our support team 24/7 at our official email address:
        <br />
        <a href="mailto:fayfoysix@gmail.com"><strong>fayfoysix@gmail.com</strong></a>
      </p>
    </>
  );
}

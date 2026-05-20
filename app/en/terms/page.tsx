import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Outfit Assistant',
  description: 'The terms of service for the Outfit Assistant mobile application — covering subscriptions, billing, cancellations, and legal responsibilities.',
  alternates: {
    canonical: '/en/terms',
  },
};

export default function TermsOfServiceEN() {
  return (
    <>
      <nav className="nav-header">
        <Link href="/en">← Home</Link>
        <Link href="/en/privacy">Privacy Policy</Link>
        <Link href="/terms" className="lang-switch">🇹🇷 Türkçe</Link>
      </nav>

      <h1>Terms of Service</h1>
      <p><strong>Last Updated:</strong> February 21, 2026</p>

      <p>
        Welcome to <strong>Outfit Assistant</strong> ("Application", "we", "us"). By downloading, installing, or accessing our mobile
        application through an app marketplace such as the Apple App Store, you agree to be legally bound by the following Terms of
        Service ("Agreement"). If you do not fully accept these terms, please immediately remove the application from your device and stop using it.
      </p>

      <h2>1. Scope and Definition of Service</h2>
      <p>
        Outfit Assistant is a digital lifestyle and style assistant that helps users digitally catalog their personal clothing items,
        receive algorithm-based outfit suggestions according to daily weather conditions, plan outfits on a calendar,
        and access advanced wardrobe statistics.
        <br /><br />
        Our services are provided <strong>"AS IS"</strong> in their current and up-to-date state, without any guarantee of perfection.
        The application does not provide implied warranties such as accurate weather forecasting or absolute fitness for a particular purpose in all circumstances.
      </p>

      <h2>2. User Obligations and Account Security</h2>
      <ul>
        <li>To download and use the application, you must be of legal age under local laws or at least 13 years old (16 in some regions). If you are a minor, valid parental consent is required.</li>
        <li>You are personally responsible for the password and access security of your account and profile (Apple Sign-in / Google Sign-in) credentials. Our company accepts no liability for issues arising from unauthorized use of your device.</li>
        <li>Systematic data scraping from application content via any method or software (bot, scraper, spider) other than the system's own interface, reverse engineering, or attempts to place heavy load on the server infrastructure are strictly prohibited. Upon detection, the account will be immediately suspended and legal rights will be pursued.</li>
        <li>It is your legal responsibility to ensure that the visual photos you upload to add to your wardrobe are entirely your own or that you hold a usage license, and that they do not contain obscenity, violence, or illegal third-party objects.</li>
      </ul>

      <h2>3. Premium Subscription, Billing, Apple, and Payments</h2>
      <p>
        The Outfit Assistant mobile application offers a free "Basic Package" that allows users to upload a limited number of items.
        Users may optionally purchase a <strong>Premium Subscription</strong> (Outfit Pro/Premium) through an in-app purchase (on Monthly or Annual periods) to access unlimited item additions and advanced features.
      </p>
      <ul>
        <li>All Premium subscription purchases are processed, managed, and collected directly through the <strong>Apple App Store (Apple Inc.)</strong> ecosystem.</li>
        <li>Upon confirming a purchase, the specified amount will be charged to the default payment method linked to your Apple ID (iTunes) account by the relevant store.</li>
        <li><strong>Auto-Renewable Subscriptions:</strong> Subscriptions automatically renew unless turned off and cancelled via your iOS device's Settings menu (Apple ID &gt; Subscriptions) at least <strong>24 hours before</strong> the end of the selected period (Monthly/Annual).</li>
        <li>The renewal fee for the next period will be charged to your account less than 24 hours before the end of the current active period.</li>
        <li>The fee for the current period is non-refundable and a subscription for an already billed (currently active) period cannot be cancelled. However, if you cancel, you may continue to enjoy Premium features until the end of the already paid period.</li>
      </ul>

      <h2>4. Right of Withdrawal, Refund Policy, and Cancellations</h2>
      <p>
        <strong>Important Rule:</strong> All payments made through Outfit Assistant are processed through Apple's global payment infrastructure and platform rules. Therefore:
      </p>
      <ul>
        <li><strong>Our company (Outfit Assistant Developer Team) has absolutely no authority or technical access (as required by Apple's rules) to remotely directly manipulate charges, approve refunds, or provide partial refunds to users.</strong></li>
        <li>All refund, objection, or right of withdrawal requests must be made directly by the user through <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a> or Apple Customer Support channels. The initiative and authority to approve or reject refunds belongs entirely and solely to Apple.</li>
      </ul>

      <h2>5. Intellectual Property Rights and Licenses</h2>
      <p>
        The name, copyright and trademark rights, brand logo, interface design (UI/UX), in-app sounds, original software algorithms,
        and all source code of the Outfit Assistant application belong entirely to the developers and are protected by international/local intellectual property and copyright laws.
        Users are granted a limited, revocable, non-transferable, and non-exclusive usage license solely for personal (non-commercial) use of the application.
        The use of the application's graphic materials, copied or inspired, in a similar format on competing platforms is legally prohibited.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Outfit Assistant and its individual developers cannot be held legally liable for any direct, indirect, incidental, or punitive material/moral damages arising from the use (or inability to use) of the application, technical malfunctions, in-app service interruptions, or the deletion or loss of data from the wardrobe.
      </p>

      <h2>7. Changes and Validity</h2>
      <p>
        These Terms of Service may be updated by us at any time without prior reasonable notice, depending on market conditions, legal regulations, or updates to Apple App Store rules. The most current agreement text is always published in the "Settings" tab within the application and on this official web page. Continuing to use the application after the updated publication date signifies your acceptance of the changes.
      </p>

      <h2>8. Governing Law and Dispute Resolution</h2>
      <p>
        The interpretation, application, and validity of any legal disputes arising from this agreement shall be governed by the laws of the <strong>Republic of Turkey</strong>.
        For any disputes or unresolved matters arising from this agreement between the parties, the courts and authorized enforcement offices of Istanbul / Turkey are the final judicial decision-making bodies.
      </p>

      <h2>9. Contact, Support, and Feedback</h2>
      <p>
        To get support, submit questions, or make legal notifications regarding our terms of service or billing (technical matters, excluding refunds) processes, you can reach our support team:
        <br />
        <a href="mailto:fayfoysix@gmail.com"><strong>fayfoysix@gmail.com</strong></a>
      </p>
    </>
  );
}

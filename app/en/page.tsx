import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outfit Assistant | Legal Documents',
  description: 'Official Privacy Policy and Terms of Service for the Outfit Assistant mobile application.',
  alternates: {
    canonical: '/en',
  },
};

export default function HomeEN() {
  return (
    <>
      <nav className="nav-header">
        <Link href="/en/privacy">Privacy Policy</Link>
        <Link href="/en/terms">Terms of Service</Link>
        <Link href="/en/delete-account">Delete Account</Link>
        <Link href="/" className="lang-switch">🇹🇷 Türkçe</Link>
      </nav>

      <h1>Outfit Assistant — Legal Documents</h1>
      <p>
        This website hosts the official legal documents and agreements for the <strong>Outfit Assistant</strong> mobile application.
        We share your rights and how your data is protected transparently, so you can use our app with confidence.
      </p>

      <p>
        Please carefully read our Privacy Policy and Terms of Service via the links below before downloading or using our application:
      </p>

      <ul>
        <li><Link href="/en/privacy"><strong>Privacy Policy</strong></Link></li>
        <li><Link href="/en/terms"><strong>Terms of Service</strong></Link></li>
        <li><Link href="/en/delete-account"><strong>Account Deletion Request</strong></Link></li>
      </ul>

      <h2>Contact</h2>
      <p>
        For any questions, feedback, or data deletion requests, please contact our support team:<br />
        <a href="mailto:fayfoysix@gmail.com">fayfoysix@gmail.com</a>
      </p>
    </>
  );
}

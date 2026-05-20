import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account Deletion Request | Outfit Assistant',
  description: 'Use this page to permanently delete your account and all your data in the Outfit Assistant application.',
  alternates: {
    canonical: '/en/delete-account',
  },
};

export default function DeleteAccountEN() {
  return (
    <>
      <nav className="nav-header">
        <Link href="/en">← Home</Link>
        <Link href="/en/privacy">Privacy Policy</Link>
        <Link href="/delete-account" className="lang-switch">🇹🇷 Türkçe</Link>
      </nav>

      <h1>Account Deletion Request</h1>
      <p><strong>Last Updated:</strong> April 16, 2026</p>

      <p>
        If you wish to stop using the <strong>Outfit Assistant</strong> application, you can permanently delete your account and
        all your personal data. This action cannot be undone.
      </p>

      <h2>Method 1: Delete via the App (Recommended)</h2>
      <p>You can delete your account directly through the application:</p>
      <ol>
        <li>Open the application and sign in to your account.</li>
        <li>Go to the <strong>Profile</strong> tab.</li>
        <li>Enter the <strong>Settings</strong> section.</li>
        <li>Tap <strong>"Delete My Account"</strong>.</li>
        <li>Confirm the deletion on the confirmation screen.</li>
      </ol>
      <p>Once completed, your account and all your data will be deleted <strong>immediately and permanently</strong>.</p>

      <h2>Method 2: Request via Email</h2>
      <p>
        If you do not have access to the application or prefer another method, you can submit an account deletion request by sending an email to the following address:
      </p>
      <p>
        <a href="mailto:fayfoysix@gmail.com?subject=Account%20Deletion%20Request&body=Hello%2C%0A%0AI%20am%20requesting%20the%20permanent%20deletion%20of%20my%20account%20and%20all%20my%20data.%0A%0AMy%20registered%20email%20address%3A%20%5Benter%20here%5D%0A%0AThank%20you.">
          <strong>fayfoysix@gmail.com</strong>
        </a>
      </p>
      <p>Please include the following in your email:</p>
      <ul>
        <li>Subject: <em>Account Deletion Request</em></li>
        <li>The email address registered to your Outfit Assistant account</li>
      </ul>
      <p>Your request will be processed within <strong>30 days at most</strong> after your identity is verified.</p>

      <h2>Data That Will Be Deleted</h2>
      <p>When your account is deleted, the following data will be permanently destroyed:</p>
      <ul>
        <li>First name, last name, and email address</li>
        <li>All clothing and wardrobe photos you uploaded</li>
        <li>All outfit combinations and tags you created</li>
        <li>Your calendar and planning history</li>
        <li>Premium subscription history (payment records are retained by Apple as subscriptions are managed through the App Store)</li>
      </ul>

      <h2>Important Notes</h2>
      <ul>
        <li>Account deletion is <strong>irreversible</strong>. Your data cannot be recovered.</li>
        <li>If you have an active Premium subscription, we recommend cancelling your subscription via the App Store before deleting your account.</li>
        <li>Deleting your account does <strong>not</strong> automatically cancel your App Store subscription. Please use Apple&apos;s subscription management page to cancel.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        For questions about account deletion or your data:<br />
        <a href="mailto:fayfoysix@gmail.com"><strong>fayfoysix@gmail.com</strong></a>
      </p>
    </>
  );
}

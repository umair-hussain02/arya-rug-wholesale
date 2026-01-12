import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        {/* Header */}
        <section className="w-full py-12 md:py-16 bg-secondary border-b border-border">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground mt-4">Last updated: January 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 space-y-12">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Wei Rugs ("Company," "we," "us," "our") respects the privacy of our customers and visitors ("you,"
                    "your"). This Privacy Policy explains how we collect, use, protect, and share your personal
                    information when you visit our website and interact with our services.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <h3 className="font-semibold text-foreground mb-3">Information You Provide:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Contact information (name, email, phone, address)</li>
                    <li>Order details and transaction history</li>
                    <li>Preferences and communication choices</li>
                    <li>Messages and inquiries through contact forms</li>
                  </ul>

                  <h3 className="font-semibold text-foreground mb-3 mt-6">Information Collected Automatically:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Browser and device information</li>
                    <li>IP address and location data</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Pages visited and time spent on our site</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Process and fulfill your orders</li>
                    <li>Send transactional and promotional emails</li>
                    <li>Improve our products, services, and website</li>
                    <li>Respond to your inquiries and support requests</li>
                    <li>Comply with legal obligations</li>
                    <li>Prevent fraud and enhance security</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Data Protection & Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures including SSL encryption, secure servers, and
                    limited access to personal information. However, no method of transmission over the internet is 100%
                    secure. We cannot guarantee absolute security of your data.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Sharing Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell your personal information. We may share information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Service providers (payment processors, shipping partners)</li>
                    <li>Legal authorities when required by law</li>
                    <li>Business partners with your consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Cookies & Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website uses cookies to enhance your experience. You can disable cookies in your browser
                    settings, though this may limit functionality. We use analytics tools to understand user behavior
                    and improve our services.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>The right to access your personal data</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to request deletion (right to be forgotten)</li>
                    <li>The right to opt-out of marketing communications</li>
                    <li>The right to data portability</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    To exercise these rights, contact us at privacy@werugs.com.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party sites. We are not responsible for their privacy
                    practices. Please review their privacy policies before providing personal information.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website is not directed to children under 13. We do not knowingly collect information from
                    children. If we become aware of such collection, we will delete it immediately.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    10. International Data Transfers
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to countries outside your country of residence, which may have
                    different data protection laws. By using our website, you consent to such transfers.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">11. Policy Changes</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy periodically. Significant changes will be notified via email or
                    prominent website notice. Continued use of our website constitutes acceptance of updated terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For privacy inquiries, requests, or concerns, contact:
                  </p>
                  <div className="mt-4 p-4 bg-secondary rounded-sm">
                    <p className="font-semibold text-foreground">Wei Rugs</p>
                    <p className="text-muted-foreground">Email: privacy@werugs.com</p>
                    <p className="text-muted-foreground">WhatsApp: Contact us via our website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

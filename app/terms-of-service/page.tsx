import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="w-full">
      <Header />

      <main className="w-full">
        {/* Header */}
        <section className="w-full py-12 md:py-16 bg-secondary border-b border-border">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground mt-4">Last updated: January 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 space-y-12">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of
                    this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials (information or software) on
                    our website for personal, non-commercial transitory viewing only. This is the grant of a license,
                    not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Modify or copy the materials</li>
                    <li>Use materials for commercial purposes without permission</li>
                    <li>Attempt to decompile or reverse engineer software</li>
                    <li>Remove any copyright or proprietary notices</li>
                    <li>Transfer materials to another person or "mirror" on another server</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials on our website are provided on an "as is" basis. Arya Rug makes no warranties,
                    expressed or implied, and hereby disclaims and negates all other warranties including, without
                    limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
                    or non-infringement of intellectual property.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall Arya Rug or its suppliers be liable for any damages (including, without
                    limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                    use or inability to use the materials on our website, even if we have been notified of the
                    possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials appearing on our website could include technical, typographical, or photographic
                    errors. Arya Rug does not warrant that any of the materials on our website are accurate, complete,
                    or current. We may make changes to the materials contained on our website at any time without
                    notice.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Arya Rug has not reviewed all of the sites linked to its website and is not responsible for the
                    contents of any such linked site. The inclusion of any link does not imply endorsement by Arya Rug
                    of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Arya Rug may revise these terms and conditions for its website at any time without notice. By using
                    this website, you are agreeing to be bound by the then current version of these terms and
                    conditions.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Ordering and Pricing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All product descriptions, images, pricing, and availability are subject to change without notice. We
                    reserve the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Limit order quantities</li>
                    <li>Refuse or cancel any order</li>
                    <li>Correct pricing errors after order placement</li>
                    <li>Discontinue any products without notice</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. Payment Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Payment must be received according to the terms specified at checkout. For wholesale orders, we
                    accept net 30-60 payment terms for qualified customers with credit approval. Failure to pay may
                    result in order cancellation and collection action.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">10. Returns & Refunds</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Custom and bespoke rugs are non-returnable unless they arrive damaged. Standard catalog items may be
                    returned within 30 days in original condition for a refund, minus shipping costs. Contact our
                    customer service for return authorization.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    11. Intellectual Property Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All materials on this website, including text, graphics, logos, and images, are the property of Arya Rug or its content suppliers and are protected by international copyright laws. You may not
                    reproduce, distribute, transmit, or display these materials without our prior written permission.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">12. User Conduct</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Engage in harassment, abuse, or threatening behavior</li>
                    <li>Post unlawful or offensive content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Transmit viruses or malicious code</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">13. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Arya Rug shall not be liable for any indirect, incidental, special, consequential, or punitive
                    damages resulting from your use of or inability to use the service, even if we have been advised of
                    the possibility of such damages.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">14. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of the
                    jurisdiction where Arya Rug is based, and you irrevocably submit to the exclusive jurisdiction of
                    the courts in that location.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">15. Dispute Resolution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any disputes arising out of or relating to these terms shall be resolved through good-faith
                    negotiation. If unresolved within 30 days, either party may pursue legal remedies.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">16. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions regarding these terms, please contact:
                  </p>
                  <div className="p-4 bg-secondary rounded-sm">
                    <p className="font-semibold text-foreground">Arya Rug</p>
                    <p className="text-muted-foreground">Email: aryarugs1@gmail.com</p>
                    <p className="text-muted-foreground">Website: Available via contact form</p>
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

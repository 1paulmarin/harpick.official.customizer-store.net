import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Please read these terms carefully before using our services.
        </p>
      </div>

      <Card className="p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">1. Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            By accessing and using harpick.com (the "Site") and our services, you agree to be bound by these Terms and
            Conditions ("Terms"). If you do not agree to these Terms, please do not use our Site or services.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">2. Services Provided</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Harpick provides custom guitar pick design and manufacturing services, as well as the sale of pre-made
            guitar picks and accessories. Our customization services allow users to upload images, add text, and select
            materials and colors for their unique guitar picks.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">3. User Accounts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            To access certain features of the Site, you may be required to create an account. You are responsible for
            maintaining the confidentiality of your account information and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">4. Customization Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            When using our customization services, you agree not to upload, design, or request the creation of any
            content that:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or libelous.</li>
            <li>
              Infringes on any patent, trademark, trade secret, copyright, or other proprietary rights of any party.
            </li>
            <li>
              Contains viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit
              the functionality of any computer software or hardware.
            </li>
            <li>Promotes discrimination, hatred, or harm against any group or individual.</li>
          </ul>
          <p>
            Harpick reserves the right to refuse any customization order that violates these terms or is deemed
            inappropriate at our sole discretion.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">5. Pricing and Payments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            All prices for products and services are listed on the Site and are subject to change without notice. We
            accept various payment methods as indicated on our checkout page. You agree to pay all charges incurred by
            you or any users of your account and credit card (or other applicable payment mechanism) at the prices in
            effect when such charges are incurred.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">6. Shipping and Delivery</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We aim to process and ship orders promptly. Delivery times may vary depending on your location and the
            shipping method selected. Harpick is not responsible for delays caused by shipping carriers or customs. Risk
            of loss and title for items purchased from Harpick pass to you upon our delivery to the carrier.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">7. Returns and Refunds</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Due to the custom nature of many of our products, custom-designed picks are generally non-refundable unless
            there is a manufacturing defect or an error on our part. For non-custom items, please refer to our Return
            Policy for detailed information on eligibility and procedures.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">8. Intellectual Property</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            All content on the Site, including text, graphics, logos, images, and software, is the property of Harpick
            or its content suppliers and protected by international copyright laws. You may not reproduce, distribute,
            modify, or create derivative works of any content without our express written permission.
          </p>
          <p>
            By uploading content for customization, you grant Harpick a non-exclusive, worldwide, royalty-free license
            to use, reproduce, modify, and display such content solely for the purpose of fulfilling your order. You
            represent and warrant that you have all necessary rights to the content you upload and that it does not
            infringe on the rights of any third party.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">9. Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Harpick shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
            including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
            from (i) your access to or use of or inability to access or use the Site; (ii) any conduct or content of any
            third party on the Site; (iii) any content obtained from the Site; and (iv) unauthorized access, use, or
            alteration of your transmissions or content, whether based on warranty, contract, tort (including
            negligence), or any other legal theory, whether or not we have been informed of the possibility of such
            damage.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">10. Governing Law</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            These Terms shall be governed and construed in accordance with the laws of Romania, without regard to its
            conflict of law provisions.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">11. Changes to Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a
            material change will be determined at our sole discretion.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">12. Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            If you have any questions about these Terms, please contact us at:{" "}
            <a href="mailto:harpick.romania@gmail.com" className="underline">
              harpick.romania@gmail.com
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
      </div>

      <Card className="p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">Introduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            This Privacy Policy describes how Harpick ("we," "us," or "our") collects, uses, and discloses your personal
            information when you visit or make a purchase from harpick.com (the "Site").
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>We collect various types of information in connection with the services we provide, including:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Personal Information:</strong> This includes your name, email address, shipping address, billing
              address, phone number, and payment information (e.g., credit card details). We collect this when you make
              a purchase or create an account.
            </li>
            <li>
              <strong>Order Information:</strong> Details about the products you purchase, including customization
              details (e.g., pick color, custom text, uploaded images).
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you access and use our Site, such as your IP address,
              browser type, pages viewed, and the time and date of your visit.
            </li>
            <li>
              <strong>Device Information:</strong> Information about the device you use to access our Site, including
              device type, operating system, and unique device identifiers.
            </li>
          </ul>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>We use the information we collect for various purposes, including:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>To process and fulfill your orders, including shipping and handling.</li>
            <li>To communicate with you about your orders, products, services, and promotional offers.</li>
            <li>To provide customer support and respond to your inquiries.</li>
            <li>To personalize your experience on our Site and recommend products.</li>
            <li>To improve our Site, products, and services.</li>
            <li>To detect and prevent fraud and other illegal activities.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">Sharing Your Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>We may share your personal information with third parties in the following circumstances:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Service Providers:</strong> We may share information with third-party service providers who
              perform services on our behalf, such as payment processing, shipping, data analysis, and marketing.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose your information if required to do so by law or in
              response to valid requests by public authorities.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your
              personal information may be transferred.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may share your information with third parties when we have your
              explicit consent to do so.
            </li>
          </ul>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">Data Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access,
            use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">Your Rights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>The right to access, update, or delete your personal information.</li>
            <li>The right to object to or restrict certain processing of your data.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw your consent at any time.</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided below.</p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">Changes to This Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-4">Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:harpick.romania@gmail.com" className="underline">
              harpick.romania@gmail.com
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

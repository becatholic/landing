import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Effective Date: November 10, 2025 • App: <strong>Be Catholic</strong> • Provider: <strong>Leap Developments Ltd.</strong>
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy explains how Be Catholic handles information in connection with your use of the app. Be Catholic is provided by Leap Developments Ltd. This policy applies solely to the app and does not cover third-party websites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. No Personal Information Collected</h2>
            <p>
              Be Catholic does not collect personal information such as your name, email address, or contact details. The app does not provide user-upload features and does not store user-generated content on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Analytics Data</h2>
            <p>
              We may collect anonymous analytics data (e.g., device type, operating system, usage patterns) to improve app performance and user experience. This data cannot identify you personally.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p>
              Be Catholic may integrate third-party services (e.g., analytics tools). These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p>
              Since we do not collect personal information, there is no personal data for you to access, modify, or delete. If you have questions about our practices, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted in the app and on our website with a new effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact Leap Developments Ltd.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Privacy;

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
          <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">
            Effective Date: November 10, 2025 • App: <strong>Be Catholic</strong> • Provider: <strong>Leap Developments Ltd.</strong>
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              These Terms & Conditions govern your access to and use of Be Catholic, a faith-based application designed to help Catholics strengthen their relationship with God through daily devotion and practice. The App is provided by Leap Developments Ltd. By accessing or using the App, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use Be Catholic. If you are under 18, you must have parental or guardian consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Subscriptions & Billing</h2>
            <p>
              Be Catholic may offer in-app purchases or subscriptions. All payments are processed through the Apple App Store and are subject to their terms and policies. Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Faith & Pastoral Disclaimer</h2>
            <p>
              Be Catholic is designed as a spiritual tool and resource. It is not a substitute for sacramental life, pastoral guidance, or professional religious counsel. For matters of faith, morals, and Church teaching, please consult your local clergy or diocesan authorities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
            <p>
              You agree not to misuse the App, including but not limited to: attempting to reverse engineer the App, using the App for unlawful purposes, or interfering with other users' experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p>
              All content, design, and functionality in Be Catholic are owned by Leap Developments Ltd. and are protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Privacy</h2>
            <p>
              Your use of Be Catholic is also governed by our Privacy Policy. Please review it to understand how we handle information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to Be Catholic at any time, with or without cause, including for violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be posted in the app and on our website with a new effective date. Continued use of the App after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
            <p>
              If you have questions or concerns about these Terms, please contact Leap Developments Ltd.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Terms;

import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Support = () => {
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
          <h1 className="text-4xl font-bold mb-8">Support</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">App Name</h2>
            <p className="text-lg">
              <strong>Be Catholic</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg">
              If you need help or have questions about Be Catholic, please reach out to us:
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:help.becatholic@gmail.com"
                className="text-primary hover:underline"
              >
                help.becatholic@gmail.com
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Legal</h2>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Support;

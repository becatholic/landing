import appLogo from "@/assets/app-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-navy-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={appLogo} alt="Be Catholic" className="w-12 h-12" />
              <span className="text-xl font-bold text-white">Be Catholic</span>
            </div>
            <p className="text-white/70 text-sm">
              Join thousands of Catholics building a life of deeper faith and peace.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/privacy"
                className="text-white/70 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white/70 hover:text-primary text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/support"
                className="text-white/70 hover:text-primary text-sm transition-colors"
              >
                Support
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white">Company</h3>
            <p className="text-white/70 text-sm">
              Leap Developments Ltd.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Leap Developments Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

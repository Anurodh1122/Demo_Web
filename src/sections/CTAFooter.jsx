import Button from "../components/Button";

export default function CTAFooter() {
  return (
    <footer className="bg-slate-900 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: CTA */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <Button>Book a Demo</Button>
          <p className="mt-6 text-slate-400 text-sm">© 2026 Talent Squad Europe. All rights reserved.</p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Services</h3>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#mobility" className="hover:text-white">Mobility</a></li>
            <li><a href="#internships" className="hover:text-white">Internships</a></li>
            <li><a href="#education" className="hover:text-white">Education</a></li>
            <li><a href="#workforce" className="hover:text-white">Workforce</a></li>
          </ul>
        </div>

        {/* Column 3: Resources / FAQ */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Resources</h3>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#guides" className="hover:text-white">Guides</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#support" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Contact</h3>
          <ul className="space-y-2 text-slate-300">
            <li>Email: <a href="mailto:contact@talentsquad.eu" className="hover:text-white">contact@talentsquad.eu</a></li>
            <li>Phone: <a href="tel:+123456789" className="hover:text-white">+123 456 789</a></li>
            <li><a href="#linkedin" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#twitter" className="hover:text-white">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

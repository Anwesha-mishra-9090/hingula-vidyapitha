import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { LogoMark } from '@/components/shared/LogoMark';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LogoMark size={40} />
              <div>
                <div className="font-display text-lg font-bold">Hingula Vidya Pitha</div>
                <div className="text-xs text-muted-foreground">Government Aided High School</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Established in 1992, providing quality education under BSE Odisha.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition">About Us</a></li>
              <li><a href="/academics" className="text-muted-foreground hover:text-primary transition">Academics</a></li>
              <li><a href="/faculty" className="text-muted-foreground hover:text-primary transition">Faculty</a></li>
              <li><a href="/notices" className="text-muted-foreground hover:text-primary transition">Notices</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>AT/PO-Bhotaka, Kuakhia, Dist-Jajpur, Odisha</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:8260191483" className="hover:text-primary">8260191483</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:hingulavidyapitha@gmail.com" className="hover:text-primary">hingulavidyapitha@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/channel/UCObdFVD75nivRmynUrLRutg" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hingula Vidya Pitha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
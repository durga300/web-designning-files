'use client';

import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">FitLife</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Transform your body and mind with our world-class fitness programs and expert guidance.
            </p>
            <div className="flex gap-3 pt-2">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors rounded-full"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors rounded-full"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Classes', 'Trainers', 'Membership', 'Success Stories', 'Blog'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                'Personal Training',
                'Group Classes',
                'Nutrition Coaching',
                'Online Programs',
                'Corporate Wellness',
                'Youth Fitness',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  123 Fitness Street, Wellness City, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:hello@fitlife.com"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  hello@fitlife.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-sm text-center lg:text-left">
              <p>&copy; 2025 FitLife. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold text-lg mb-1">
                Join Our Newsletter
              </h4>
              <p className="text-emerald-50 text-sm">
                Get fitness tips and exclusive offers delivered to your inbox
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/90 border-0 text-slate-900 placeholder:text-slate-500 focus-visible:ring-white"
              />
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

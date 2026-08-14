import { Mail, Send } from 'lucide-react';
import { GithubIcon, WhatsappIcon, LinkedinIcon } from './Icons';
import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#080c14] relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Get in Touch"
          title="Let's Work"
          highlight="Together"
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Info Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Feel free to reach out via email, LinkedIn, GitHub, or WhatsApp. 
                I&apos;m open to discussing new projects, remote positions, and frontend engineering opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:irfanthalvi@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-500/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-[#00eeff] shrink-0 transition-transform group-hover:scale-105">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Email
                  </span>
                  <span className="block text-sm font-bold text-foreground group-hover:text-[#00eeff] transition-colors">
                    irfanthalvi@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/irfan-ali-66205a2b3"
                className="group flex items-center gap-4 rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-500/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-[#00eeff] shrink-0 transition-transform group-hover:scale-105">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    LinkedIn
                  </span>
                  <span className="block text-sm font-bold text-foreground group-hover:text-[#00eeff] transition-colors">
                    linkedin.com/in/irfan-ali
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/Irfanthalvi"
                className="group flex items-center gap-4 rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-500/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-[#00eeff] shrink-0 transition-transform group-hover:scale-105">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    GitHub
                  </span>
                  <span className="block text-sm font-bold text-foreground group-hover:text-[#00eeff] transition-colors">
                    github.com/Irfanthalvi
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/923337484980?text=Hi%20I%20want%20to%20connect%20with%20you"
                className="group flex items-center gap-4 rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:translate-x-1 hover:shadow-lg hover:shadow-cyan-500/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-[#00eeff] shrink-0 transition-transform group-hover:scale-105">
                  <WhatsappIcon size={18} />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    WhatsApp / Call
                  </span>
                  <span className="block text-sm font-bold text-foreground group-hover:text-[#00eeff] transition-colors">
                    +92 333 7484980
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <Card className="md:col-span-7 border-border/80 bg-card/60 p-6 sm:p-8 rounded-2xl backdrop-blur-xl shadow-xl shadow-black/30">
            <form action="https://formsubmit.co/irfanthalvi@gmail.com" method="POST" className="flex flex-col gap-4">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-foreground/80">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-foreground/80">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-subject" className="text-xs font-semibold text-foreground/80">
                  Subject
                </label>
                <Input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="Project subject"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-foreground/80">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="glow"
                size="lg"
                className="mt-2 w-full rounded-xl py-3 text-sm font-bold uppercase tracking-wider"
              >
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

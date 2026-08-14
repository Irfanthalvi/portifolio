import { Mail, Send } from 'lucide-react';
import { GithubIcon, WhatsappIcon, LinkedinIcon } from './Icons';
import SectionHeader from './SectionHeader';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Get in Touch"
          title="Let&apos;s Work"
          highlight="Together"
          subtitle="Have a project in mind? I&apos;d love to hear about it."
        />
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoText}>
              Feel free to reach out via email, LinkedIn, GitHub, or WhatsApp. 
              I&apos;m open to discussing new projects, remote positions, and frontend engineering opportunities.
            </p>
            <div className={styles.contactLinks}>
              <a
                href="mailto:irfanthalvi@gmail.com"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.contactIcon}>
                  <Mail size={18} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>irfanthalvi@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/irfan-ali-66205a2b3"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.contactIcon}>
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <span className={styles.contactLabel}>LinkedIn</span>
                  <span className={styles.contactValue}>linkedin.com/in/irfan-ali-66205a2b3</span>
                </div>
              </a>

              <a
                href="https://github.com/Irfanthalvi"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.contactIcon}>
                  <GithubIcon size={18} />
                </div>
                <div>
                  <span className={styles.contactLabel}>GitHub</span>
                  <span className={styles.contactValue}>github.com/Irfanthalvi</span>
                </div>
              </a>

              <a
                href="https://wa.me/923337484980?text=Hi%20I%20want%20to%20connect%20with%20you"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.contactIcon}>
                  <WhatsappIcon size={18} />
                </div>
                <div>
                  <span className={styles.contactLabel}>WhatsApp / Call</span>
                  <span className={styles.contactValue}>+92 333 7484980</span>
                </div>
              </a>
            </div>
          </div>

          <form className={styles.form} action="https://formsubmit.co/irfanthalvi@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className={styles.input}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className={styles.input}
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-subject" className={styles.label}>Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                className={styles.input}
                placeholder="Project subject"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-message" className={styles.label}>Message</label>
              <textarea
                id="contact-message"
                name="message"
                className={styles.textarea}
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

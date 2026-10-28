import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  AlertCircle,
  ExternalLink,
  SendHorizonal,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

export default function Contact({ t, language }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is blocked
      const textArea = document.createElement('textarea');
      textArea.value = profile.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = t.contact.nameError;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = t.contact.emailError;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t.contact.messageError;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate interactive processing, then prepare a direct mailto draft
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, '_blank');
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/[0.02] dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-card space-y-6">
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent-purple" />
                <span>{t.contact.infoHeading}</span>
              </h3>

              <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                {t.contact.infoText}
              </p>

              {/* Email Card with Copy Feature */}
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-2">
                <span className="text-xs font-mono text-light-muted dark:text-dark-muted">
                  {t.contact.emailLabel}
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-mono text-sm font-semibold text-accent-purple dark:text-accent-cyan hover:underline truncate"
                  >
                    {profile.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-light-surface dark:bg-dark-surface border border-black/10 dark:border-white/10 text-light-text dark:text-dark-text hover:border-accent-purple/40 transition-colors shrink-0"
                    title={copied ? t.contact.copiedEmail : t.contact.copyEmail}
                    aria-label={copied ? t.contact.copiedEmail : t.contact.copyEmail}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-light-muted dark:text-dark-muted" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] font-mono text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>{t.contact.copiedEmail}</span>
                  </p>
                )}
              </div>

              {/* Social Channels */}
              <div>
                <span className="text-xs font-mono text-light-muted dark:text-dark-muted block mb-3">
                  {t.contact.socialHeading}
                </span>
                <div className="space-y-2.5">
                  {socialLinks.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-accent-purple/40 text-light-text dark:text-dark-text hover:text-accent-purple transition-colors text-sm font-medium"
                      aria-label={item.ariaLabel}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-semibold">{item.name}</span>
                        <span className="text-xs font-mono text-light-muted dark:text-dark-muted">
                          {item.username}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-light-muted/60 dark:text-dark-muted/60" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-card">
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-1">
                {t.contact.formHeading}
              </h3>
              <p className="text-xs text-light-muted dark:text-dark-muted mb-6">
                {t.contact.formSubtitle}
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-light-text dark:text-dark-text">
                      {t.contact.successTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted mt-1 leading-relaxed">
                      {t.contact.successMessage}
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-light-text dark:text-dark-text mb-1.5"
                    >
                      {t.contact.nameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder={t.contact.namePlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-black/5 dark:bg-white/5 border transition-colors focus:outline-none focus:ring-2 focus:ring-accent-purple text-light-text dark:text-dark-text ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-light-text dark:text-dark-text mb-1.5"
                    >
                      {t.contact.emailInputLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder={t.contact.emailInputPlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-black/5 dark:bg-white/5 border transition-colors focus:outline-none focus:ring-2 focus:ring-accent-purple text-light-text dark:text-dark-text ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono font-medium text-light-text dark:text-dark-text mb-1.5"
                    >
                      {t.contact.subjectLabel}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.contact.subjectPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-purple text-light-text dark:text-dark-text"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono font-medium text-light-text dark:text-dark-text mb-1.5"
                    >
                      {t.contact.messageLabel} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder={t.contact.messagePlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-black/5 dark:bg-white/5 border transition-colors focus:outline-none focus:ring-2 focus:ring-accent-purple text-light-text dark:text-dark-text resize-y ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={SendHorizonal}
                      className="w-full justify-center"
                    >
                      {isSubmitting ? t.contact.sendingButton : t.contact.submitButton}
                    </Button>
                  </div>

                  <p className="text-[11px] text-light-muted/70 dark:text-dark-muted/70 text-center font-mono pt-1">
                    {t.contact.formNotice}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

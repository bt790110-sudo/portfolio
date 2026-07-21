import { useState } from "react";
import { FiSend } from "react-icons/fi";
import Button from "./Button";
import { emailjsConfig, profile } from "../data/portfolioData";

const isEmailjsConfigured =
  emailjsConfig.serviceId && !emailjsConfig.serviceId.startsWith("YOUR_") &&
  emailjsConfig.templateId && !emailjsConfig.templateId.startsWith("YOUR_") &&
  emailjsConfig.publicKey && !emailjsConfig.publicKey.startsWith("YOUR_");

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailjsConfigured) {
      // Fallback: open the visitor's email client pre-filled with the message.
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`
      );
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject || "Portfolio contact"
      )}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form,
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  const fields = [
    { name: "name", label: "Name", type: "text", autoComplete: "name" },
    { name: "email", label: "Email", type: "email", autoComplete: "email" },
    { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
  ];

  return (
    <form onSubmit={handleSubmit} className="console-frame rounded-2xl p-6 sm:p-8 space-y-5" noValidate>
      {!isEmailjsConfigured && (
        <p className="font-mono text-xs text-signal-amber">
          Note: EmailJS isn't configured yet, so this form opens your email client instead of
          sending directly. Add your keys in src/data/portfolioData.js to enable direct sending.
        </p>
      )}

      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block font-mono text-xs text-ink-400 dark:text-mist-500 mb-1.5"
          >
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            required
            autoComplete={field.autoComplete}
            value={form[field.name]}
            onChange={handleChange}
            className="w-full rounded-lg border border-ink-600 bg-transparent px-4 py-2.5 text-ink-900 dark:text-mist-100 focus:outline-none focus:border-signal-teal transition-colors"
          />
        </div>
      ))}

      <div>
        <label htmlFor="message" className="block font-mono text-xs text-ink-400 dark:text-mist-500 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-ink-600 bg-transparent px-4 py-2.5 text-ink-900 dark:text-mist-100 focus:outline-none focus:border-signal-teal transition-colors resize-none"
        />
      </div>

      <Button as="button" type="submit" variant="primary" icon={FiSend} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>

      {status === "sent" && (
        <p role="status" className="text-sm text-signal-teal">
          Message sent — thanks for reaching out, I'll reply soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-[#f5605a]">
          Something went wrong sending that. Try emailing me directly at{" "}
          <a href={`mailto:${profile.email}`} className="underline">
            {profile.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

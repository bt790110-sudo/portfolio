import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-ink-800/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading path="/contact" title="Get in touch" subtitle="I read every message." />

        <div className="grid md:grid-cols-[1fr_0.85fr] gap-6">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

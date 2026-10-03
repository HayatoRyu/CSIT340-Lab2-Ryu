import SectionHeading from './Sectionheading'
import ContactLink from './ContactLink'

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:hayatoryu58@gmail.com" text="hayatoryu58@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/HayatoRyu" text="github.com/HayatoRyu" />
        <ContactLink label="LinkedIn" href="https://www.linkedin.com/in/hayato-ryu-025a78440/" text="linkedin.com/in/hayato-ryu-025a78440/" />
      </ul>
    </section>
  )
}
import SectionHeading from './Sectionheading'
import Fact from './Fact'

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I am Half Filipino and Half Japanese. I grew up here in Cebu City 
        and I picked BSIT because I wanted to learn more about web development.
        My hobbies include playing basketball, video games, and my favorite anime is Jojo's Bizarre Adventure. 
        I also enjoy learning new things and exploring new places.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  )
}
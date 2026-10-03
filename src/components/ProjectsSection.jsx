import SectionHeading from './Sectionheading'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="First Project in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/HayatoRyu/CSIT340G5---FirstProjectInReact"
        />
        <ProjectCard
          year="2026"
          title="About Me Page in React"
          description="A page about me built in React, with a responsive layout and smooth scrolling."
          tech="React · Tailwind CSS"
          link="https://github.com/HayatoRyu/CSIT340-Lab1-Ryu"
        />
        <ProjectCard
          year="2026"
          title="Cebu Institute of Technology - Subjects Page"
          description="A page that displays the subjects offered by Cebu Institute of Technology, with a responsive layout and smooth scrolling."
          tech="React · Tailwind CSS"
          link="https://github.com/HayatoRyu/CSIT340G5-Lab3-Ryu"
        />
        <ProjectCard
          year="2026"
          title="Portfolio Page in React"
          description="My portfolio page built in React, with a responsive layout and smooth scrolling."
          tech="React · Tailwind CSS"
          link="https://github.com/HayatoRyu/CSIT340-Lab2-Ryu"
        />
      </div>
    </section>
  )
}
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen space-y-24 pb-24">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-12 border-t border-border/50 text-center text-muted-foreground text-sm">
        <div className="container px-4">
          <p>© {new Date().getFullYear()} Himanshu Pandey. Built with passion using Next.js & Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}

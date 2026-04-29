"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { projects } from "@/lib/data"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            Proof of Work
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold font-outfit tracking-tighter leading-[0.95] mb-6">
            Crafting ideas into <br />
            <span className="text-muted-foreground">reality.</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            A curated selection of projects where I pushed the boundaries of 
            web technologies and design systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-border/40 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-3">
                    <Link 
                      href={project.github} 
                      target="_blank"
                      className="p-3 bg-foreground/10 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-foreground/20 transition-colors"
                    >
                      <FaGithub className="w-5 h-5 text-white" />
                    </Link>
                    <Link 
                      href={project.link} 
                      target="_blank"
                      className="p-3 bg-foreground/10 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-foreground/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4 px-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-primary/5 text-primary/70 rounded-lg border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold font-outfit tracking-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

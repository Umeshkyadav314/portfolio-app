import { AnimatedSection } from "./animated-section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Star, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProjectsSection() {
    const projects = [
        {
            title: "Portfolio App",
            description:
                "A personal portfolio built with Next.js and TypeScript featuring responsive sections, dark/light theme, and reusable components.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Lucide", "Vercel"],
            github: "https://github.com/Umeshkyadav314/portfolio-app",
            demo: "https://portfolio-app-sepia-iota.vercel.app/",
            image: "/images/portfolio-landingpage.png",
            highlights: [
                "Responsive, accessible UI with reusable components and clean architecture",
                "Dark/light theme with consistent design system using Tailwind and ShadCN UI",
                "Optimized builds and deployment on Vercel",
            ],
        },
        {
            title: "MovieFlixx",
            description:
                "A movie browsing SPA built with React + Vite, styled with SCSS, featuring fast loads and a responsive UI. Integrates with TMDB API for real-time movie data.",
            technologies: ["React.js", "Vite", "JavaScript", "SCSS", "Vercel", "TMDB API"],
            github: "https://github.com/Umeshkyadav314/movieflixx",
            demo: "https://movieflixx-alpha.vercel.app/",
            image: "/images/moviflexx-landingpage.png",
            highlights: [
                "Built with React + Vite for fast HMR development and optimized builds",
                "Integrates TMDB API for real-time movie data, ratings, and metadata",
                "Modular SCSS styling with responsive grid and card layouts",
                "Deployed and served over Vercel for global performance",
            ],
        },
        {
            title: "3D Model Viewer and Sharing Platform",
            description:
                "Interactive web interface for 3D model visualization and sharing with real-time rendering capabilities.",
            technologies: ["React.js", "Three.js", "Node.js", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/Umeshkyadav314/3d-mvs-webapp",
            demo: "#",
            image: "/images/3d-landingpage.jpg",
            highlights: [
                "3D Rendering with Three.js for model rotation, lighting, and texture features",
                "Model Upload & Storage for .glb, .gltf files with MongoDB metadata",
                "Sharing mechanism with unique public/private links",
                "Performance optimization with asset compression and lazy loading",
            ],
        },
        {
            title: "Energy Optimization Platform",
            description: "Tool to reduce electricity bills by optimizing solar power usage based on real-time tariff data.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Mongoose", "MongoDB"],
            github: "https://github.com/Umeshkyadav314/energy-optimization",
            demo: "#",
            image: "/images/eop.png",
            highlights: [
                "Live tariff monitoring with predictive analytics",
                "Real-time and historical consumption data analytics",
                "Automated appliance scheduling for optimal tariff intervals",
            ],
        },
        {
            title: "Rule Engine with AST",
            description:
                "Rules engine for eligibility verification using Abstract Syntax Tree for customizable logic creation.",
            technologies: ["Node.js", "Express", "MongoDB", "Tailwind", "Lucide", "Axios", "Clerk"],
            github: "https://github.com/Umeshkyadav314/Rule-Engin-AST",
            demo: "https://github.com/Umeshkyadav314/Rule-Engin-AST",
            image: "/images/rule-engine-image.png",
            highlights: [
                "Clerk authentication for secure sessions",
                "AST-based evaluation for structured, scalable rule processing",
                "Customizable logic creation interface",
            ],
        },
        {
            title: "URL Shortener Web Application",
            description:
                "A URL shortener application built using React.js, ShadCN UI, TailwindCSS, and Supabase. It allows users to shorten long URLs, manage them, and get redirected to the original URLs.",
            technologies: ["React.js", "ShadCN UI", "TailwindCSS", "Supabase", "PostgreSQL", "Vite"],
            github: "https://github.com/Umeshkyadav314/url-shortener",
            demo: "https://url-shortener-topaz-psi.vercel.app/",
            image: "/images/url-shortner-homepage.png",
            highlights: [
                "Shorten long URLs into compact, shareable links with user authentication via Supabase",
                "Responsive design using TailwindCSS with modern and accessible UI components",
                "URL redirection using shortened links with secure backend storage",
                "Built with Vite for fast development and optimized production builds",
            ],
        },

    ]
    return (
        <section id="projects" className="container py-16">
            <AnimatedSection>
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Projects</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground">
                            Here are some of my recent projects that showcase my skills in full-stack development, 3D graphics, and
                            system optimization.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
                        {projects.map((project, index) => (
                            <AnimatedSection key={index} delay={index * 300} animation="fadeUp">
                                <Card className="card-hover overflow-hidden group">
                                    <div className="md:flex">
                                        <div className="md:w-1/3">
                                            <div className="h-full relative overflow-hidden bg-muted/20">
                                                <Image
                                                    src={project.image || "/placeholder.svg"}
                                                    alt={project.title}
                                                    fill
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="md:w-2/3">
                                            <CardHeader>
                                                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </CardTitle>
                                                <CardDescription className="text-base">{project.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, idx) => (
                                                        <AnimatedSection key={tech} delay={index * 300 + idx * 100} animation="fadeIn">
                                                            <Badge
                                                                variant="outline"
                                                                className="hover:bg-primary hover:text-primary-foreground transition-colors"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        </AnimatedSection>
                                                    ))}
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="font-semibold text-sm">Key Features:</h4>
                                                    <ul className="space-y-1">
                                                        {project.highlights.map((highlight, idx) => (
                                                            <AnimatedSection key={idx} delay={index * 300 + 200 + idx * 100} animation="slideRight">
                                                                <li className="text-sm text-muted-foreground flex items-start gap-2">
                                                                    <Star className="h-3 w-3 mt-1 text-yellow-500" />
                                                                    <span>{highlight}</span>
                                                                </li>
                                                            </AnimatedSection>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button variant="outline" size="sm" asChild className="group/btn bg-transparent">
                                                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                                            <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                                                            Code
                                                        </Link>
                                                    </Button>
                                                    <Button size="sm" asChild className="group/btn">
                                                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                                                            Demo
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
} 
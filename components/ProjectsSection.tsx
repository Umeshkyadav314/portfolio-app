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
            title: "3D Model Viewer and Sharing Platform",
            description:
                "Interactive web interface for 3D model visualization and sharing with real-time rendering capabilities.",
            technologies: ["React.js", "Three.js", "Node.js", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/Umeshkyadav314/3d-mvs-webapp",
            demo: "#",
            image: "/placeholder.svg?height=200&width=400",
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
            image: "/placeholder.svg?height=200&width=400",
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
            github: "https://github.com/Umeshkyadav314/rule-engine-ast",
            demo: "#",
            image: "/placeholder.svg?height=200&width=400",
            highlights: [
                "Clerk authentication for secure sessions",
                "AST-based evaluation for structured, scalable rule processing",
                "Customizable logic creation interface",
            ],
        },
    ]
    return (
        <section id="projects" className="container py-24">
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
                                            <div className="aspect-video relative overflow-hidden">
                                                <Image
                                                    src={project.image || "/placeholder.svg"}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
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
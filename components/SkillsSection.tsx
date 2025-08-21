import { AnimatedSection } from "./animated-section"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Target } from "lucide-react"

export function SkillsSection() {
    const skills = {
        "Programming Languages": ["C", "C++", "JavaScript", "TypeScript", "Python"],
        "Frameworks & Tools": ["React", "Next.js", "Node.js", "Express", "REST APIs", "Git", "Docker", "Postman", "Playwright"],
        "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Advanced SQL", "NoSQL"],
        "Operating Systems": ["Unix/Linux", "Shell Scripting", "System Navigation"],
        "Core CS Fundamentals": ["Data Structures & Algorithms", "OOPS", "DBMS", "Operating Systems"],
        "Professional Capabilities": ["Software Development", "Testing/Debugging", "Troubleshooting", "Documentation", "On-call/Production Support", "Project/Time Management"],
    }
    return (
        <section id="skills" className="container py-16">
            <AnimatedSection>
                <div className="mx-auto max-w-4xl space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter text-center md:text-4xl">Skills & Technologies</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <AnimatedSection key={category} delay={index * 150} animation="scale">
                                <Card className="card-hover overflow-hidden group h-[220px] flex flex-col">
                                    <CardHeader className="flex-shrink-0 pb-3">
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <Target className="h-5 w-5" />
                                            {category}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col justify-start pt-0">
                                        <div className="flex flex-wrap gap-2">
                                            {skillList.map((skill, idx) => (
                                                <AnimatedSection key={skill} delay={index * 150 + idx * 50} animation="fadeIn">
                                                    <Badge
                                                        variant="secondary"
                                                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 text-sm"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                </AnimatedSection>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
} 
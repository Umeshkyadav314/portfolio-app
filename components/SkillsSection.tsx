import { AnimatedSection } from "./animated-section"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Target } from "lucide-react"

export function SkillsSection() {
    const skills = {
        "Programming Languages": ["C", "C++", "JavaScript", "TypeScript"],
        "Frontend Technologies": ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
        "Backend Technologies": ["Node.js", "Express.js", "MongoDB", "Prisma ORM"],
        "DevOps & Tools": ["AWS", "Docker", "Git", "Visual Studio Code", "Webpack", "Unix/Linux"],
        Database: ["MongoDB", "Advanced SQL", "NoSQL"],
        "CS Fundamentals": ["Data Structures & Algorithms", "OOPS", "DBMS", "Operating Systems"],
    }
    return (
        <section id="skills" className="container py-24 bg-muted/50">
            <AnimatedSection>
                <div className="mx-auto max-w-4xl space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter text-center md:text-4xl">Skills & Technologies</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <AnimatedSection key={category} delay={index * 150} animation="scale">
                                <Card className="card-hover overflow-hidden group">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Target className="h-5 w-5" />
                                            {category}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {skillList.map((skill, idx) => (
                                                <AnimatedSection key={skill} delay={index * 150 + idx * 50} animation="fadeIn">
                                                    <Badge
                                                        variant="secondary"
                                                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
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
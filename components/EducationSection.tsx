import { AnimatedSection } from "./animated-section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
    return (
        <section id="education" className="container py-24 bg-muted/50">
            <AnimatedSection>
                <div className="mx-auto max-w-4xl space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter text-center md:text-4xl">Education</h2>
                    <AnimatedSection delay={300} animation="scale">
                        <Card className="card-hover overflow-hidden group">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <CardTitle className="flex items-center gap-2">
                                            <GraduationCap className="h-5 w-5" />
                                            Bachelor of Technology in Information Technology
                                        </CardTitle>
                                        <CardDescription className="text-base">
                                            Goel Institute of Technology and Management, Lucknow, Uttar Pradesh, India
                                        </CardDescription>
                                    </div>
                                    <Badge variant="secondary" className="animate-pulse">
                                        CGPA: 7.5
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>October 2021 – May 2025</span>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedSection>
                </div>
            </AnimatedSection>
        </section>
    )
} 
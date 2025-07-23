import { AnimatedSection } from "./animated-section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Briefcase, Calendar, Zap } from "lucide-react"

export function ExperienceSection() {
    return (
        <section id="experience" className="container py-24">
            <AnimatedSection>
                <div className="mx-auto max-w-4xl space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter text-center md:text-4xl">Experience</h2>
                    <AnimatedSection delay={300} animation="slideLeft">
                        <Card className="card-hover overflow-hidden group">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <CardTitle className="flex items-center gap-2">
                                            <Briefcase className="h-5 w-5" />
                                            Software Development Intern
                                        </CardTitle>
                                        <CardDescription className="text-base">GoRoots (Remote)</CardDescription>
                                    </div>
                                    <Badge className="animate-pulse">Current</Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>January 2025 – Present</span>
                                </div>
                                <ul className="space-y-3 text-sm">
                                    {[
                                        {
                                            text: "Developed responsive and reusable UI components using React and TypeScript, enhancing user engagement and reducing load time by 30%",
                                            color: "text-blue-500",
                                        },
                                        {
                                            text: "Engineered scalable backend APIs with Node.js and MongoDB to handle bookings, appointments, and reviews, cutting response latency by 25%",
                                            color: "text-green-500",
                                        },
                                        {
                                            text: "Incorporated BigCalendar in the admin dashboard for real-time appointment tracking and management, improving scheduling efficiency by 35%",
                                            color: "text-purple-500",
                                        },
                                        {
                                            text: "Constructed a complete booking workflow with robust validation, availability checks, and appointment logic, handling 500+ bookings/week with 99.9% accuracy",
                                            color: "text-orange-500",
                                        },
                                        {
                                            text: "Rolled out a review module with secure input handling and protected routes to gather user feedback effectively, increasing review submissions by 40%",
                                            color: "text-red-500",
                                        },
                                    ].map((item, idx) => (
                                        <AnimatedSection key={idx} delay={500 + idx * 200} animation="slideRight">
                                            <li className={`flex items-start gap-2`}>
                                                <Zap className={`h-4 w-4 mt-0.5 ${item.color}`} />
                                                <span>{item.text}</span>
                                            </li>
                                        </AnimatedSection>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </AnimatedSection>
                </div>
            </AnimatedSection>
        </section>
    )
} 
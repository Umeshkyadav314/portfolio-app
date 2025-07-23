import { AnimatedSection } from "./animated-section"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Github, Linkedin, Mail, Phone, Trophy, Code } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
    return (
        <section id="contact" className="container py-24">
            <AnimatedSection>
                <div className="mx-auto max-w-2xl text-center space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
                    <p className="text-muted-foreground">
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                        technology and competitive programming.
                    </p>
                    <AnimatedSection delay={300} animation="fadeUp">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                            >
                                <Link href="mailto:yku314@gmail.com" className="flex items-center">
                                    <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                                    Send Email
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="group border-2 hover:bg-primary hover:text-primary-foreground bg-transparent"
                            >
                                <Link
                                    href="https://www.linkedin.com/in/umeshkyadav314/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                                    LinkedIn
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="group border-2 hover:bg-primary hover:text-primary-foreground bg-transparent"
                            >
                                <Link href="tel:+919016823361" className="flex items-center">
                                    <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                                    Call Me
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                    <Separator />
                    <AnimatedSection delay={600} animation="fadeIn">
                        <div className="flex justify-center space-x-6">
                            <Link
                                href="https://github.com/Umeshkyadav314"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                            >
                                <Github className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/umeshkyadav314/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                            >
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://leetcode.com/u/umeshkyadav314/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                            >
                                <Code className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://www.codechef.com/users/yku314"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                            >
                                <Trophy className="h-6 w-6" />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </AnimatedSection>
        </section>
    )
} 
import { AnimatedSection } from "./animated-section"
import { TypingAnimation } from "./typing-animation"
import { Button } from "./ui/button"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Code, Trophy, ChevronDown, Download, MapPin, Phone } from "lucide-react"

export function HeroSection() {
    return (
        <section className="container py-16 md:py-24 lg:py-32">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Profile Image */}
                <AnimatedSection animation="slideLeft" className="lg:w-1/3 flex-shrink-0">
                    <div className="relative">
                        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl mx-auto">
                            <Image
                                src="/images/umesh-photo.jpeg"
                                alt="Umesh Kumar Yadav"
                                width={320}
                                height={320}
                                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                                priority
                            />
                        </div>
                        {/* Floating elements with Tailwind animations */}
                        <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full animate-pulse-slow"></div>
                        <div className="absolute top-1/2 -left-8 w-3 h-3 bg-green-500 rounded-full animate-float"></div>
                    </div>
                </AnimatedSection>
                {/* Hero Content */}
                <AnimatedSection animation="slideRight" className="lg:w-2/3 text-center lg:text-left space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight">
                            <TypingAnimation text="Hi, I'm " delay={500} speed={100} />
                            <br />
                            <span className="text-gradient">Umesh Kumar Yadav</span>
                        </h1>
                        <AnimatedSection delay={1500} animation="fadeIn">
                            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Full Stack Developer & Software Development Intern at GoRoots, passionate about creating innovative
                                web applications and solving complex algorithmic problems.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={2000} animation="fadeIn">
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                                    <MapPin className="h-4 w-4 text-blue-500" />
                                    <span>Lucknow, Uttar Pradesh, India</span>
                                </div>
                                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                                    <Phone className="h-4 w-4 text-green-500" />
                                    <span>+91 9016823361</span>
                                </div>
                                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                                    <Mail className="h-4 w-4 text-purple-500" />
                                    <span>yku314@gmail.com</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <AnimatedSection delay={2500} animation="fadeUp">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                            >
                                <Link href="#projects" className="flex items-center">
                                    View My Work
                                    <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="group border-2 hover:bg-primary hover:text-primary-foreground bg-transparent"
                            >
                                <Link href="#contact" className="flex items-center">
                                    <Download className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                                    Download Resume
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                    {/* <AnimatedSection delay={3000} animation="fadeIn">
                        <div className="flex items-center space-x-4 justify-center lg:justify-start">
                            <Button variant="ghost" size="icon" className="btn-hover rounded-full hover:bg-primary/10" asChild>
                                <Link href="https://github.com/Umeshkyadav314" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" className="btn-hover rounded-full hover:bg-primary/10" asChild>
                                <Link href="https://www.linkedin.com/in/umeshkyadav314/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" className="btn-hover rounded-full hover:bg-primary/10" asChild>
                                <Link href="https://leetcode.com/u/umeshkyadav314/" target="_blank" rel="noopener noreferrer">
                                    <Code className="h-5 w-5" />
                                    <span className="sr-only">LeetCode</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" className="btn-hover rounded-full hover:bg-primary/10" asChild>
                                <Link href="https://www.codechef.com/users/yku314" target="_blank" rel="noopener noreferrer">
                                    <Trophy className="h-5 w-5" />
                                    <span className="sr-only">CodeChef</span>
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection> */}
                </AnimatedSection>
            </div>
        </section>
    )
} 
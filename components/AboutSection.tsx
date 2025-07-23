import { AnimatedSection } from "./animated-section"

export function AboutSection() {
    return (
        <section id="about" className="container py-24">
            <AnimatedSection>
                <div className="mx-auto max-w-3xl text-center space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Me</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <AnimatedSection delay={200} animation="fadeUp">
                            <p className="text-lg">
                                I'm a passionate Full Stack Developer currently pursuing B.Tech in Information Technology with a CGPA
                                of 7.5. Currently working as a Software Development Intern at GoRoots, where I've enhanced user
                                engagement by 30% through responsive UI components and reduced response latency by 25% with scalable
                                backend APIs.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={400} animation="fadeUp">
                            <p className="text-lg">
                                With expertise in React, Next.js, Node.js, and MongoDB, I've successfully handled 500+ bookings per
                                week with 99.9% accuracy and improved scheduling efficiency by 35% through innovative dashboard
                                solutions.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={600} animation="fadeUp">
                            <p className="text-lg">
                                Beyond development, I'm an active competitive programmer with 500+ problems solved across platforms,
                                achieving a 1409 rating on LeetCode and 2-star rating on CodeChef. I've also secured top positions in
                                national hackathons including Luminous Techno-X and Flipkart GRID 6.0.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
} 
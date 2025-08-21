import { AnimatedSection } from "./animated-section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Code, Trophy, Award } from "lucide-react"

export function AchievementsSection() {
    const achievements = [
        {
            title: "Broad Coding Practice",
            description: "Solved over 500+ problems across various competitive programming platforms",
            icon: <Code className="h-5 w-5" />,
            stats: [
                {
                    platform: "LeetCode",
                    count: "300+ problems",
                    rating: "1409",
                    link: "https://leetcode.com/u/umeshkyadav1207/",
                },
                {
                    platform: "CodeChef",
                    count: "2-star rating",
                    rating: "1497",
                    link: "https://www.codechef.com/users/umeshyadav1207"
                },
            ],
        },
        {
            title: "Contest Achievements",
            description: "Strong performance in competitive programming contests",
            icon: <Trophy className="h-5 w-5" />,
            stats: [
                {
                    platform: "Starters 170",
                    count: "Global Rank",
                    rating: "281",
                    link: "#"
                },
                {
                    platform: "Starters 199",
                    count: "Worldwide Rank",
                    rating: "82",
                    link: "#"
                },
            ],
        },
        {
            title: "Hackathon Success",
            description: "Recognition in national-level competitions",
            icon: <Award className="h-5 w-5" />,
            stats: [
                { platform: "Luminous Techno-X", count: "Top 86", rating: "1 Lakh teams", link: "#" },
                { platform: "Flipkart GRID 6.0", count: "Top 90K", rating: "490K participants", link: "#" },
            ],
        },
    ]
    return (
        <section id="achievements" className="container py-16">
            <AnimatedSection>
                <div className="mx-auto max-w-4xl space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter text-center md:text-4xl">Achievements</h2>
                    <div className="grid gap-6 md:grid-cols-1">
                        {achievements.map((achievement, index) => (
                            <AnimatedSection key={index} delay={index * 200} animation="slideLeft">
                                <Card className="card-hover overflow-hidden group">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            {achievement.icon}
                                            {achievement.title}
                                        </CardTitle>
                                        <CardDescription>{achievement.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            {achievement.stats.map((stat, idx) => (
                                                <AnimatedSection key={idx} delay={index * 200 + idx * 150} animation="scale">
                                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                                                        <div>
                                                            <div className="font-semibold">{stat.platform}</div>
                                                            <div className="text-sm text-muted-foreground">{stat.count}</div>
                                                        </div>
                                                        <Badge variant="secondary" className="animate-pulse">
                                                            {stat.rating}
                                                        </Badge>
                                                    </div>
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
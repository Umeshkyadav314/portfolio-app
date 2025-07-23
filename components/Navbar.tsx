import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Home } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
]

// For mobile navbar, only show Home, About, Contact
const mobileNavLinks = [
    { href: "/", label: "Home", icon: <Home className="h-6 w-6" /> },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
]

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const sidebarRef = useRef<HTMLDivElement>(null)

    // Close sidebar on outside click
    useEffect(() => {
        if (!menuOpen) return
        function handleClick(e: MouseEvent) {
            if (sidebarRef.current && !(sidebarRef.current as Node).contains(e.target as Node)) {
                setMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, [menuOpen])

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between w-full px-2 md:px-0">
                {/* Mobile: Hamburger, Home, About, Contact, Dark mode */}
                <div className="flex items-center gap-2 md:hidden w-full justify-between">
                    <div className="flex items-center gap-x-4">
                        <button
                            className="flex items-center p-2 focus:outline-none"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                        <Link href="/" className="flex items-center gap-1 font-bold text-base">
                            <Home className="h-6 w-6" />
                            Home
                        </Link>
                        <Link href="#about" className="font-bold text-base">
                            About
                        </Link>
                        <Link href="#contact" className="font-bold text-base">
                            Contact
                        </Link>
                    </div>
                    <div className="text-xl">
                        <ThemeToggle />
                    </div>
                </div>
                {/* Desktop: Home icon and text, Nav, ThemeToggle */}
                <div className="hidden md:flex items-center space-x-4 w-full justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                        <Home className="h-6 w-6" />
                        Home
                    </Link>
                    <div className="flex items-center space-x-6 text-sm font-medium ml-6">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground/80">
                                {link.label}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </div>
                </div>
            </div>
            {/* Mobile Sidebar Drawer */}
            <div
                className={`fixed inset-0 z-50 transition-all duration-300 ${menuOpen ? "" : "pointer-events-none"}`}
                aria-hidden={!menuOpen}
            >
                {/* Overlay */}
                <div
                    className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
                />
                {/* Sidebar */}
                <aside
                    ref={sidebarRef}
                    className={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg border-r z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex items-center justify-between p-4 border-b">
                        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                            <Home className="h-6 w-6" />
                            Home
                        </Link>
                        <button
                            className="p-2 ml-2"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-2 p-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="py-2 px-2 rounded hover:bg-muted text-base font-medium transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <ThemeToggle />
                        </div>
                    </nav>
                </aside>
            </div>
        </nav>
    )
} 
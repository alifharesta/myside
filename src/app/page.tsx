import Image from "next/image";
import alif from "../../public/alipofoto.jpg";
import github from "../../public/github-sign.png";
import Aurora from "../../Aurora/Aurora";
import SplashCursor from "../../SplashCursor/SplashCursor";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Code, Database, Smartphone } from "lucide-react";
import Link from "next/link";
import "./globals.css";
export default function Home() {
  return (
    <>
      <Aurora />
      <SplashCursor />
      <div className="min-h-screen bg-white text-black">
        {/* Header */}
        <header className="sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="text-xl font-bold">Alif's Portfolio</div>
              <div className="hidden md:flex space-x-6">
                <Link
                  href="#about"
                  className="hover:text-gray-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="hover:text-gray-600 transition-colors"
                >
                  Skills
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-gray-600 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-black">Alif Agsakli Haresta</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Junior Fullstack Developer
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                Passionate about creating innovative web and mobile solutions
                using Laravel, React, and Flutter. I love turning ideas into
                reality through clean, efficient code.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                </Button>
                </div> */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-64 h-64 mx-auto bg-gray-200 rounded-full flex -translate-x-2.5 items-center justify-center">
                    <Image
                      src={alif}
                      alt="Alif Agsakli Haresta"
                      width={256}
                      height={256}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I'm a passionate junior fullstack developer with a strong
                    foundation in modern web and mobile technologies. My journey
                    in software development has led me to specialize in Laravel
                    for backend development, React for frontend applications,
                    and Flutter for cross-platform mobile solutions.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I believe in writing clean, maintainable code and staying
                    up-to-date with the latest industry trends. I'm always eager
                    to learn new technologies and take on challenging projects
                    that push my skills to the next level.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="border-black text-black"
                    >
                      Problem Solver
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-black text-black"
                    >
                      Team Player
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-black text-black"
                    >
                      Quick Learner
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-black text-black"
                    >
                      Detail Oriented
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Skills & Technologies
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardHeader className="text-center">
                    <Database className="h-12 w-12 mx-auto mb-4" />
                    <CardTitle>Laravel</CardTitle>
                    <CardDescription>Backend Development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600">
                      Building robust APIs, web applications, and server-side
                      logic with Laravel's elegant syntax and powerful features.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">RESTful APIs</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardHeader className="text-center">
                    <Code className="h-12 w-12 mx-auto mb-4" />
                    <CardTitle>React</CardTitle>
                    <CardDescription>Frontend Development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600">
                      Creating dynamic, responsive user interfaces with React,
                      focusing on component-based architecture and modern
                      JavaScript.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardHeader className="text-center">
                    <Smartphone className="h-12 w-12 mx-auto mb-4" />
                    <CardTitle>Flutter</CardTitle>
                    <CardDescription>Mobile Development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600">
                      Developing cross-platform mobile applications with
                      Flutter, delivering native performance on both iOS and
                      Android.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">Dart</Badge>
                      <Badge variant="secondary">Android</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Separator className="my-12" />

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-6">
                  Additional Technologies
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge variant="outline" className="border-black text-black">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Git
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    HTML/CSS
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    Firebase
                  </Badge>
                  <Badge variant="outline" className="border-black text-black">
                    REST APIs
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Let's Work Together
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                I'm always interested in new opportunities and exciting
                projects. Let's discuss how we can bring your ideas to life.
              </p>

              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <Mail className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">alifagsaklih4@gmail.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+62 813 - 2546 - 1363</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">Indonesia, Semarang</p>
                </div>
                <div className="flex flex-col items-center">
                  <a
                    href="https://github.com/alifharesta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={github}
                      alt="GitHub"
                      width={32}
                      height={32}
                      className="mb-4"
                    />
                  </a>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-600">Indonesia, Semarang</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 font-bold">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-gray-500 mt-4 font-bold">
              Built with React & Next.js
            </p>
          </div>
        </footer>
        <Aurora />
      </div>
    </>
  );
}

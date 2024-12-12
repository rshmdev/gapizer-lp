import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Zap, Shield, FileJson } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const MotionDiv = motion.div;

export default function LandingPage() {
  const installationRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);

  const scrollToInstallation = () => {
    installationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <header className="px-4 lg:px-6 py-4 backdrop-blur-sm bg-black/30 fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          <a className="flex items-center justify-center" href="#">
            <Zap className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              GAPIzer
            </span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a
              className="text-sm font-medium hover:text-blue-400 transition-colors"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-sm font-medium hover:text-blue-400 transition-colors"
              href="#installation"
            >
              Installation
            </a>
            <a
              className="text-sm font-medium hover:text-blue-400 transition-colors"
              href="#documentation"
            >
              Docs
            </a>
          </nav>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={scrollToInstallation}
          >
            Get Started
          </Button>
        </div>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
                  Generate APIs in Seconds
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                  GAPIzer is a powerful CLI tool that generates complete Go APIs
                  from YAML configurations. Streamline your development process
                  today.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                  onClick={scrollToInstallation}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
                  onClick={scrollToFeatures}
                >
                  Learn More
                </Button>
              </div>
            </MotionDiv>
          </div>
        </section>
        <section
          id="features"
          ref={featuresRef}
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <Terminal className="h-12 w-12 mb-2 text-blue-400" />
                <h3 className="text-xl font-bold text-blue-400">CLI-based</h3>
                <p className="text-sm text-zinc-200 text-center">
                  Simple command-line interface for quick API generation
                </p>
              </MotionDiv>
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <FileJson className="h-12 w-12 mb-2 text-purple-400" />
                <h3 className="text-xl font-bold text-purple-400">
                  YAML Configuration
                </h3>
                <p className="text-sm text-zinc-200 text-center">
                  Define your API structure using simple YAML files
                </p>
              </MotionDiv>
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <Shield className="h-12 w-12 mb-2 text-pink-400" />
                <h3 className="text-xl font-bold text-pink-400">
                  Built-in Authentication
                </h3>
                <p className="text-sm text-zinc-200 text-center">
                  Includes JWT authentication out of the box
                </p>
              </MotionDiv>
            </div>
          </div>
        </section>
        <section
          id="installation"
          ref={installationRef}
          className="w-full py-12 md:py-24 lg:py-32 bg-black/30 backdrop-blur-sm"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Quick Installation
            </h2>
            <div className="max-w-[700px] mx-auto space-y-4">
              <p className="text-zinc-200">
                Install GAPIzer globally using npm: 
              </p>
              <MotionDiv
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 p-4 rounded-lg overflow-x-auto"
              >
                <code className="text-blue-300">npm install -g gapizer</code>
              </MotionDiv>
              <p className="text-zinc-200">
                Or download the installer for Windows from our GitHub releases.
              </p>
              <a
                href="https://github.com/rshmdev/gapizer/releases/latest/download/gapizer.exe"
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
                >
                  Download for Windows
                </Button>
              </a>
            </div>
          </div>
        </section>
        <section id="documentation" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Comprehensive Documentation
            </h2>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl mb-8">
              Our detailed documentation covers everything from basic usage to
              advanced configurations.
            </p>
            <a target="_blank" href="https://github.com/rshmdev/gapizer">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
                View Documentation
              </Button>
            </a>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-400">
            © 2023 GAPIzer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

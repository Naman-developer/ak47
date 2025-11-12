import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Target, Zap, Shield, Brain, Camera } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Automate Your Portfolio with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ATPFOLIO AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get an ATS-friendly, AI-optimized portfolio with a higher chance of recruiter selection. 
              Build, optimize, and perfect your career presence with cutting-edge AI technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/builder">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                  Get Started for Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-border/40 shadow-glow-primary">
              <img 
                src={heroImage} 
                alt="AI Portfolio Automation Platform" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose ATPFOLIO?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of portfolio automation with our AI-powered platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow-primary transition-all duration-300">
              <Brain className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Optimization</h3>
            <p className="text-muted-foreground">
              ChatGPT integration provides smart content optimization, keyword enhancement, and career advice
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:shadow-glow-accent transition-all duration-300">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">ATS-Friendly</h3>
            <p className="text-muted-foreground">
              Optimized for Applicant Tracking Systems to maximize your chances of getting shortlisted
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow-primary transition-all duration-300">
              <Camera className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expression Analyzer</h3>
            <p className="text-muted-foreground">
              ML-powered facial expression analysis to improve your interview confidence and presentation
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:shadow-glow-accent transition-all duration-300">
              <Sparkles className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Modern Templates</h3>
            <p className="text-muted-foreground">
              Professional, eye-catching designs that stand out to recruiters while maintaining ATS compatibility
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow-primary transition-all duration-300">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant Generation</h3>
            <p className="text-muted-foreground">
              Upload or input your details and get a complete, optimized portfolio in seconds
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:shadow-glow-accent transition-all duration-300">
              <Shield className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your data is encrypted and secure. We never share your information with third parties
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 to-accent/20 p-12 md:p-16 text-center backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already upgraded their portfolios with ATPFOLIO AI
          </p>
          <Link to="/builder">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
              Start Building Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

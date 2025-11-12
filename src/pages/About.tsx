import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About ATPFOLIO
            </h1>
            <p className="text-lg text-muted-foreground">
              Empowering professionals with AI-powered portfolio automation
            </p>
          </div>

          <div className="prose prose-invert max-w-none mb-16">
            <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                ATPFOLIO was created to solve a critical problem in today's job market: the difficulty 
                of creating portfolios and resumes that stand out to both human recruiters and 
                Applicant Tracking Systems (ATS). We believe that every professional deserves the 
                best chance at their dream job, and our AI-powered platform makes that possible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To become the leading AI automation platform for career professionals worldwide
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm text-center">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Leveraging cutting-edge AI and ML technologies to deliver the best results
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building a supportive community of professionals helping each other succeed
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI-First Approach</h3>
                  <p className="text-muted-foreground">
                    We use advanced AI models to analyze, optimize, and generate portfolios that 
                    actually get results. Our technology learns from successful applications to 
                    continuously improve recommendations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Solution</h3>
                  <p className="text-muted-foreground">
                    From portfolio creation to interview preparation with our expression analyzer, 
                    we provide end-to-end support for your career journey.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Real Results</h3>
                  <p className="text-muted-foreground">
                    Our users report higher callback rates and better interview performance thanks 
                    to our ATS optimization and AI-powered recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

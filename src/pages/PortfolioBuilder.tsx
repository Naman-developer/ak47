import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";

const PortfolioBuilder = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Build Your AI-Optimized Portfolio
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload your existing portfolio or fill in details to let AI create a stunning, ATS-friendly portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow-primary transition-all duration-300">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Upload Portfolio</h3>
            <p className="text-muted-foreground mb-6">
              Upload your existing resume or portfolio (PDF, DOC, or link) and let AI enhance it
            </p>
            <Button className="w-full bg-gradient-primary hover:shadow-glow-primary">
              Choose File
            </Button>
          </div>

          <div className="p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:shadow-glow-accent transition-all duration-300">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Start from Scratch</h3>
            <p className="text-muted-foreground mb-6">
              Fill in your details manually and AI will generate an optimized portfolio for you
            </p>
            <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Create New
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">What You'll Get</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">ATS-Optimized</h3>
              <p className="text-sm text-muted-foreground">
                Your portfolio will be optimized for Applicant Tracking Systems
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Keyword Enhanced</h3>
              <p className="text-sm text-muted-foreground">
                AI adds industry-standard keywords to improve visibility
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Modern Design</h3>
              <p className="text-sm text-muted-foreground">
                Professional templates that stand out to recruiters
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioBuilder;

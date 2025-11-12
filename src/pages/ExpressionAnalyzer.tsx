import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Camera, Video } from "lucide-react";

const ExpressionAnalyzer = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Expression Analyzer
            </h1>
            <p className="text-lg text-muted-foreground">
              Improve your interview skills with AI-powered facial expression and emotion analysis
            </p>
          </div>

          <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-8">
            <div className="aspect-video bg-secondary/30 rounded-xl mb-8 flex items-center justify-center">
              <Camera className="w-24 h-24 text-muted-foreground/30" />
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Button className="bg-gradient-primary hover:shadow-glow-primary">
                <Camera className="w-5 h-5 mr-2" />
                Upload Photo
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Video className="w-5 h-5 mr-2" />
                Upload Video
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Upload a photo or short video to receive detailed feedback on your facial expressions,
                confidence levels, and communication effectiveness
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Confidence Score</h3>
              <p className="text-sm text-muted-foreground">
                Get a detailed confidence rating based on your expressions
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Emotion Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Understand the emotions you're conveying in your expressions
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Interview Readiness</h3>
              <p className="text-sm text-muted-foreground">
                Receive feedback to improve your interview presentation
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExpressionAnalyzer;

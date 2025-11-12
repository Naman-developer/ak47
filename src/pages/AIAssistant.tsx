import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";

const AIAssistant = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Career Assistant
            </h1>
            <p className="text-lg text-muted-foreground">
              Get expert advice on portfolio optimization, resume writing, and career guidance
            </p>
          </div>

          <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto mb-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="bg-secondary/50 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                  <p className="text-sm">
                    Hello! I'm your AI career assistant. I can help you optimize your portfolio, 
                    improve your resume, suggest better keywords, and provide career advice. 
                    How can I assist you today?
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Input 
                placeholder="Ask me anything about your portfolio or career..."
                className="flex-1 bg-secondary/50 border-border/40"
              />
              <Button size="icon" className="bg-gradient-primary hover:shadow-glow-primary">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Content Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Get suggestions to improve your portfolio content and make it more impactful
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Keyword Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Discover industry-standard keywords to add to your resume
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Career Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Receive personalized advice for your career growth and job search
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIAssistant;

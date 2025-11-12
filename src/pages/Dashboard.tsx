import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Download, BarChart3, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome back!</h1>
            <p className="text-lg text-muted-foreground">
              Here's your portfolio performance and recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">ATS Score</h3>
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <p className="text-sm text-muted-foreground">Excellent optimization</p>
            </div>

            <div className="p-6 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Portfolios</h3>
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <p className="text-sm text-muted-foreground">Active versions</p>
            </div>

            <div className="p-6 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Downloads</h3>
                <Download className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">12</div>
              <p className="text-sm text-muted-foreground">This month</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Your Portfolios</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <FileText className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Portfolio v{i}</h3>
                      <p className="text-sm text-muted-foreground">Last updated 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button size="sm" className="bg-gradient-primary hover:shadow-glow-primary">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 to-accent/10 p-8">
            <h2 className="text-2xl font-semibold mb-4">AI Recommendations</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  Add more quantifiable achievements to your experience section
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <p className="text-muted-foreground">
                  Include keywords like "machine learning" and "data analysis" for better ATS score
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  Your LinkedIn profile could benefit from updated project descriptions
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;

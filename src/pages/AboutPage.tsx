import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import makeAWishLogo from "@/assets/make-a-wish-logo.png";
import uncLogo from "@/assets/unc-business-school.png";
import brandLogo from "@/assets/chapel-chill-brand-logo.jpg";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Co-Founder & Marketing Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      instagram: "https://instagram.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
    {
      name: "Michael Chen",
      role: "Co-Founder & Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      instagram: "https://instagram.com/michaelchen",
      linkedin: "https://linkedin.com/in/michaelchen",
    },
    {
      name: "Emily Rodriguez",
      role: "Co-Founder & Product Development",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      instagram: "https://instagram.com/emilyrodriguez",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              About Chapel Chill
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chapel Chill is a student-led entrepreneurial project created for{" "}
              <span className="text-primary font-semibold">BUSI 500H: Entrepreneurship and Business Planning</span>{" "}
              at UNC Kenan-Flagler Business School. Our mission is to bring premium protein ice cream 
              to the community while making a meaningful impact.
            </p>
          </div>
        </section>

        {/* Make-A-Wish Section */}
        <section className="bg-primary/10 py-16 my-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Supporting Make-A-Wish
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-primary">100% of proceeds</span> from Chapel Chill 
                  go directly to Make-A-Wish Foundation, an organization dedicated to granting the wishes 
                  of children with critical illnesses.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Make-A-Wish Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Together, we create life-changing wishes for children with critical illnesses. 
                    A wish experience can be a game-changer for a child with a critical illness, 
                    giving them the strength to fight harder, the hope to dream bigger, and the 
                    resilience to overcome life's greatest obstacles.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src={makeAWishLogo} 
                  alt="Make-A-Wish Foundation" 
                  className="max-w-md w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three passionate UNC business students working together to make a difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden hover:shadow-card transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(member.instagram, '_blank')}
                    >
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(member.linkedin, '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-gradient-hero rounded-2xl p-12 text-center text-hero-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Every Scoop Makes a Difference
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              When you choose Chapel Chill, you're not just enjoying premium protein ice cream—
              you're helping grant wishes and bring joy to children facing critical illnesses.
            </p>
          </div>
        </section>

        {/* UNC Section */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-8">
            <img 
              src={brandLogo} 
              alt="Chapel Chill Brand" 
              className="h-24 w-24 object-contain"
            />
            <img 
              src={uncLogo} 
              alt="UNC Kenan-Flagler Business School" 
              className="h-24 object-contain"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-hero-foreground mb-6 animate-scale-in">
          Protein Ice Cream
          <span className="block text-3xl md:text-5xl mt-2 text-primary-glow">
            Guilt-Free Indulgence
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-hero-foreground/90 mb-8 max-w-2xl mx-auto animate-scale-in">
          Premium protein ice cream crafted for fitness enthusiasts. 
          20g+ protein, low calories, maximum flavor.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToProducts}
            className="text-lg px-8 py-6 h-auto"
          >
            Shop Now
          </Button>

        </div>
        
        <div className="animate-float">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToProducts}
            className="rounded-full text-hero-foreground hover:bg-hero-foreground/10"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  flavors: string[];
  price: number;
  protein: number;
  calories: number;
  image: string;
  description: string;
}

export const ProductCard = ({ 
  name, 
  flavors, 
  price, 
  protein, 
  calories, 
  image, 
  description 
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:scale-105 animate-scale-in">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
            <Badge variant="secondary" className="bg-cream text-chocolate font-semibold">
              {protein}g protein
            </Badge>
          </div>
          
          <p className="text-muted-foreground mb-4 text-sm">{description}</p>
          
          <div className="mb-4">
            <p className="text-sm font-medium text-foreground mb-2">Available Flavors:</p>
            <div className="flex flex-wrap gap-2">
              {flavors.map((flavor, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {flavor}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-muted-foreground">
              <span>{calories} cal per serving</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <span className="text-2xl font-bold text-primary">${price}</span>
              <span className="text-sm text-muted-foreground ml-1">per half-pint</span>
            </div>
            <Link to="/contact" className="block">
              <Button className="w-full gap-2">
                <ShoppingCart className="w-4 h-4" />
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
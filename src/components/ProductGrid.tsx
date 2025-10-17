import { ProductCard } from "./ProductCard";
import vanillaImage from "@/assets/vanilla.png";
import chocolateImage from "@/assets/chocolate.png";
import strawberryImage from "@/assets/strawberry.png";
import cookiesImage from "@/assets/cookies.png";
import appleImage from "@/assets/apple_pie.png";
import pumpkinImage from "@/assets/pumpkin.png";
import mysteryImage from "@/assets/mystery.jpg";

const products = [
  {
    name: "Vanilla Dream",
    flavors: [],
    price: 20,
    protein: 60,
    calories: 120,
    image: vanillaImage,
    description: "Rich, creamy vanilla protein ice cream made with premium whey protein."
  },
  {
    name: "Chocolate Bliss",
    flavors: [],
    price: 20,
    protein: 60,
    calories: 150,
    image: chocolateImage,
    description: "Decadent chocolate protein ice cream with intense cocoa flavor and smooth, velvety texture."
  },
  {
    name: "Strawberry Fields",
    flavors: [],
    price: 20,
    protein: 60,
    calories: 150,
    image: strawberryImage,
    description: "Fresh strawberry protein ice cream packed with natural strawberry flavor."
  },
  {
    name: "Cookies & Cream",
    flavors: [],
    price: 20,
    protein: 60,
    calories: 150,
    image: cookiesImage,
    description: "Rich vanilla ice cream created using a creamy and crunchy cookies-and-cream favorite."
  },
  {
    name: "Apple Pie",
    flavors: [],
    price: 20,
    protein: 60,
    calories: 150,
    image: appleImage,
    description: "A creamy ice cream swirled with tender apple pieces, and buttery pie crust crumbles that taste just like a slice of apple pie."
  },
  {
    name: "Pumpkin Spice",
    flavors: [],
    price: 25,
    protein: 60,
    calories: 150,
    image: pumpkinImage,
    description: "A smooth, autumn-inspired ice cream infused with pumpkin, cinnamon, nutmeg, and cloves for a cozy pumpkin spice flavor."
  }, 
  {
    name: "Custom Flavor",
    flavors: [],
    price: 25,
    protein: 60,
    calories: 150,
    image: mysteryImage,
    description: "Contact us to ask us about any custom flavors you have in mind"
  }
];

export const ProductGrid = () => {
  return (
    <section id="products" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Protein Ice Cream Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every flavor is packed with high-quality protein and crafted to satisfy your cravings 
            while supporting your fitness goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            All our protein ice creams are made with premium ingredients, no artificial preservatives, 
            and are gluten-free.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              20+ grams protein per serving
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              Low calorie formula
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Gluten-free
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-strawberry rounded-full"></span>
              No artificial preservatives
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
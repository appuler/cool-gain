import { ProductCard } from "./ProductCard";
import vanillaImage from "@/assets/vanilla-protein-ice-cream.jpg";
import chocolateImage from "@/assets/chocolate-protein-ice-cream.jpg";
import strawberryImage from "@/assets/strawberry-protein-ice-cream.jpg";
import mintImage from "@/assets/mint-protein-ice-cream.jpg";

const products = [
  {
    name: "Vanilla Dream",
    flavors: ["Classic Vanilla", "Vanilla Bean", "French Vanilla"],
    price: 12.99,
    protein: 22,
    calories: 120,
    image: vanillaImage,
    description: "Rich, creamy vanilla protein ice cream made with real vanilla beans and premium whey protein."
  },
  {
    name: "Chocolate Bliss",
    flavors: ["Dark Chocolate", "Milk Chocolate", "Double Chocolate"],
    price: 13.99,
    protein: 24,
    calories: 140,
    image: chocolateImage,
    description: "Decadent chocolate protein ice cream with intense cocoa flavor and smooth, velvety texture."
  },
  {
    name: "Strawberry Fields",
    flavors: ["Fresh Strawberry", "Strawberry Cheesecake", "Wild Berry"],
    price: 13.49,
    protein: 20,
    calories: 110,
    image: strawberryImage,
    description: "Fresh strawberry protein ice cream packed with real fruit pieces and natural strawberry flavor."
  },
  {
    name: "Mint Chip Marvel",
    flavors: ["Mint Chocolate Chip", "Peppermint", "Mint Oreo"],
    price: 14.49,
    protein: 21,
    calories: 125,
    image: mintImage,
    description: "Refreshing mint protein ice cream with dark chocolate chips for the perfect cool treat."
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
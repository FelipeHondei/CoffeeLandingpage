import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Coffee, Users, Award } from "lucide-react"

export default function CoffeeShopLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Brew & Bean</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">
              Menu
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#location" className="text-foreground hover:text-primary transition-colors">
              Location
            </a>
            <Button variant="default" size="sm">
              Order Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/cozy-coffee-shop-interior-with-warm-lighting--stea.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Experience the Art of Coffee</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">
            Where every cup tells a story and every moment becomes a memory
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Explore Our Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Visit Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="menu" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Signature
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Crafted with Passion</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Each drink is carefully crafted using premium beans sourced from the finest coffee regions around the
              world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Signature Espresso",
                description: "Rich, bold, and perfectly balanced with notes of dark chocolate",
                price: "$4.50",
                image: "artisanal espresso shot in elegant white cup with perfect crema",
              },
              {
                name: "Caramel Macchiato",
                description: "Smooth espresso with steamed milk and sweet caramel drizzle",
                price: "$5.75",
                image: "caramel macchiato with beautiful latte art and caramel drizzle",
              },
              {
                name: "Cold Brew Delight",
                description: "Smooth, refreshing cold brew with a hint of vanilla",
                price: "$4.25",
                image: "tall glass of cold brew coffee with ice and condensation",
              },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`/abstract-geometric-shapes.png?height=400&width=400&query=${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Add to Order
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Space
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">A Place to Belong</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Step into our warm, inviting space where comfort meets style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cozy Seating",
                image: "comfortable leather armchairs and wooden tables in warm coffee shop lighting",
              },
              {
                title: "Artisan Bar",
                image: "professional coffee bar with espresso machine and skilled barista at work",
              },
              {
                title: "Reading Nook",
                image: "quiet corner with bookshelves, soft lighting, and comfortable reading chairs",
              },
              {
                title: "Community Table",
                image: "large wooden communal table with people working on laptops and chatting",
              },
              {
                title: "Outdoor Patio",
                image: "charming outdoor seating area with plants and string lights",
              },
              {
                title: "Coffee Roasting",
                image: "coffee roasting equipment and fresh coffee beans in burlap sacks",
              },
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={`/abstract-geometric-shapes.png?height=400&width=400&query=${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Coffee, number: "50K+", label: "Cups Served" },
              { icon: Users, number: "10K+", label: "Happy Customers" },
              { icon: Award, number: "15+", label: "Awards Won" },
              { icon: Star, number: "4.9", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <stat.icon className="h-12 w-12 mb-4 opacity-90" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Regular Customer",
                content:
                  "The best coffee in town! The atmosphere is perfect for both work and relaxation. I come here every morning.",
                rating: 5,
              },
              {
                name: "Mike Chen",
                role: "Coffee Enthusiast",
                content:
                  "Exceptional quality and service. The baristas really know their craft, and you can taste the difference in every cup.",
                rating: 5,
              },
              {
                name: "Emily Davis",
                role: "Local Resident",
                content:
                  "This place has become my second home. Great coffee, friendly staff, and a wonderful community atmosphere.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Visit Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Find Your Perfect Cup</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">123 Coffee Street, Downtown District, City 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                      <p>Saturday - Sunday: 7:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="mr-4">
                  Get Directions
                </Button>
                <Button size="lg" variant="outline">
                  Call Us
                </Button>
              </div>
            </div>
            <div className="aspect-square lg:aspect-auto lg:h-96 rounded-lg overflow-hidden">
              <img src="/coffee-shop-exterior-with-large-windows--outdoor-s.jpg" alt="Coffee shop exterior" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Stay Connected</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Subscribe to our newsletter for exclusive offers, new menu items, and coffee brewing tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:ring-2 focus:ring-accent"
            />
            <Button variant="secondary" size="lg" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Brew & Bean</span>
              </div>
              <p className="text-muted-foreground text-pretty">
                Crafting exceptional coffee experiences since 2010. Where every cup tells a story.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Coffee
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Tea
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pastries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sandwiches
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>123 Coffee Street</li>
                <li>Downtown District</li>
                <li>City 12345</li>
                <li>(555) 123-BREW</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Brew & Bean. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

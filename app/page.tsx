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
            <span className="text-2xl font-bold text-foreground">Dogtown Coffee</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">
              Menu
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#location" className="text-foreground hover:text-primary transition-colors">
              Localização
            </a>
            <Button variant="default" size="sm">
              Peça agora
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/Hero.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="backdrop-blur-sm bg-black/30 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance drop-shadow-2xl">
              Conheça a arte do café
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty drop-shadow-lg">
              Um bom copo virá uma boa memoria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-xl">
                <a href="#menu">Veja nosso menu</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 shadow-xl">
                <a href="#location">Faça uma visita</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="menu" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Mais vendidos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Feito com amor</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Toda bebida é feita com grãos selecionados e paixão por café
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Vincent",
                description: " Uma combinação explosiva de chocolate amargo com caramelo (Signature Espresso caramel)",
                price: "R$ 5,90",
                image: "/V.png",
              },
              {
                name: " johnny Silverhand",
                description: "Intensidade e loucura, café expresso com leite com caramelo (Caramel Macchiato)",
                price: "R$ 8,50",
                image: "/johnny.png",
              },
              {
                name: " Adam smasher ",
                description: "Forte, gelado e uma ganancia de sabor com um toque de vanilla (Cold Brew Delight)",
                price: "R$ 5,00",
                image: "/smasher.png",
              },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty flex-1">{product.description}</p>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Adicione o pedido
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Showcase */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Nosso espaço
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sinta-se em casa</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Fique a vontade para relaxar, onde o estilo e o conforto se encontram
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Espaço de convivência",
                image: "/Interna.png",
              },
              {
                title: "Área do barista",
                image: "/Barista.png",
              },
              {
                title: "Cantinho do livro",
                image: "/Livro.png",
              },
              {
                title: "Mesa Comunitária",
                image: "/Mesa.png",
              },
              {
                title: "Área Externa",
                image: "Externa.png",
              },
              {
                title: "Café em Grão",
                image: "/Grao.png",
              },
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={item.image}
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
              { icon: Coffee, number: "50K+", label: "Copos servidos" },
              { icon: Users, number: "10K+", label: "Clientes felizes" },
              { icon: Award, number: "15+", label: "Conquistas de reconhecimento" },
              { icon: Star, number: "4.9/5", label: "Média de avaliação" },
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
              Avaliações
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">O que nossos clientes dizem sobre nós</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "David Martinez",
                role: "Cliente Fiel",
                content:
                  "O melhor café da cidade, com espaço aconchegante e atendimento impecável. Recomendo a todos os amantes de café!",
                rating: 5,
              },
              {
                name: "Jackie Welles",
                role: "Entusiasta de Café",
                content:
                  "Qualidae excepcional e ambiente acolhedor. O barista realmente entende de café e faz cada xícara com perfeição.",
                rating: 5,
              },
              {
                name: "Song So Mi",
                role: "Frequentadora",
                content:
                  "Virou minha segunda casa! Adoro o ambiente relaxante e a variedade de opções no menu. Sempre saio satisfeita.",
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
                Faça uma visita
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Encontre seu copo perfeito</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Localização</h3>
                    <p className="text-muted-foreground">123 Rua do café, Dogtown, Nightcity 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Horas</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda - Sexta: 8:00 - 19:00 </p>
                      <p>Sábado - Domingo: 9:00 - 16:00 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="mr-4">
                  Mapa
                </Button>
                <Button size="lg" variant="outline">
                  Contato
                </Button>
              </div>
            </div>
            <div className="aspect-square lg:aspect-auto lg:h-96 rounded-lg overflow-hidden">
              <img src="/Externa.png" alt="Coffee shop exterior" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Fique por dentro das novidades</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Inscreva-se na nossa newsletter para receber ofertas exclusivas, novidades e dicas de café diretamente na sua caixa de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:ring-2 focus:ring-accent"
            />
            <Button variant="secondary" size="lg" className="px-8">
              Inscreva-se
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
                <span className="text-xl font-bold">Dogtown Coffee</span>
              </div>
              <p className="text-muted-foreground text-pretty">
                Criando café memoráveis desde 2077. Conheça nossa hisroria e paixão por café.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Café
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Chá
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Lanches
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Sobre</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Nossa história
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sustentabilidade
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>123 Rua do café</li>
                <li>Dogtown</li>
                <li> Nightcity 12345</li>
                <li>(555) 123-890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2077 Dogtown coffee. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

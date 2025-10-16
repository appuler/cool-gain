import { Header } from "@/components/Header";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Fill out the form below and we'll get back to you soon.
            </p>
          </div>
          
          <div className="flex justify-center">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfm9J0RS2FZT-zwoVOP0tORmvef2A70lwr7CYUSkUOkrr-GZA/viewform?embedded=true" 
              width="640" 
              height="1048" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full max-w-2xl border border-border rounded-lg shadow-card"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;

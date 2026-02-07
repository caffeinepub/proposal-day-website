function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Large warm gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-accent/15 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-accent/20 via-primary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Additional accent orbs for depth */}
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-2xl" />
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/80" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display leading-[1.1]">
          <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-sm">
            Five Years
          </span>
          <br />
          <span className="text-foreground drop-shadow-sm">of Love</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
          A journey that began with a simple request and blossomed into something beautiful
        </p>
        
        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 pt-4">
          <span className="text-primary/40 text-2xl animate-pulse">❤️</span>
          <span className="text-accent/40 text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>💕</span>
          <span className="text-primary/40 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>❤️</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

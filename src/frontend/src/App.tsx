import HeroSection from './components/sections/HeroSection';
import TimelineSection from './components/sections/TimelineSection';
import ProposalSection from './components/sections/ProposalSection';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TimelineSection />
      <ProposalSection />
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        <p>
          © 2026. Built with <span className="text-primary">♥</span> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

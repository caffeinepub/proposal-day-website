import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useHorizontalTimelineNav } from '@/hooks/useHorizontalTimelineNav';
import { Button } from '@/components/ui/button';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    date: '27 Sep 2021',
    title: 'Instagram request sent',
    description: 'The first small step that started everything',
  },
  {
    date: '9 Oct 2021',
    title: 'First meeting',
    description: 'Nervous hearts, real smiles',
  },
  {
    date: '11 Oct 2021',
    title: 'First WhatsApp message',
    description: 'Endless chats began',
  },
  {
    date: '23 Oct 2021',
    title: 'Snacks with FD',
    description: 'Simple moments, big happiness',
  },
  {
    date: '5 Mar 2022',
    title: 'First kiss',
    description: 'A moment frozen in time',
  },
  {
    date: '29 Apr 2022',
    title: 'First time she came to my home',
    description: 'It felt like home already',
  },
  {
    date: '16 Nov 2024',
    title: 'Proper lunch date',
    description: 'Love, laughter, and us',
  },
];

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`flex-shrink-0 w-80 snap-center ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-full">
        {/* Timeline dot */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg ring-2 ring-background">
            <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
          </div>
        </div>

        {/* Content card */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full">
          <time className="text-base font-bold text-primary tabular-nums tracking-tight">
            {event.date}
          </time>
          <h3 className="text-lg font-semibold text-foreground mt-3 leading-snug">{event.title}</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{event.description}</p>
        </div>
      </div>
    </div>
  );
}

function TimelineSection() {
  const { containerRef, canScrollLeft, canScrollRight, scrollLeft, scrollRight, hasInteracted } =
    useHorizontalTimelineNav();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground font-display">Our Story</h2>
          <p className="text-muted-foreground text-lg">Every moment that brought us closer</p>
        </div>

        <div className="relative">
          {/* Horizontal timeline line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          {/* Scroll hint - fades out after interaction */}
          <div
            className={`text-center mb-4 transition-opacity duration-500 ${
              hasInteracted ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span>Scroll to explore</span>
              <ChevronRight className="w-4 h-4 animate-pulse" />
            </p>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="rounded-full shadow-sm disabled:opacity-30 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="rounded-full shadow-sm disabled:opacity-30 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Scrollable timeline with edge fades */}
          <div className="relative timeline-scroll-container">
            {/* Left fade overlay */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
                canScrollLeft ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Right fade overlay */}
            <div
              className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
                canScrollRight ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Scrollable content */}
            <div
              ref={containerRef}
              className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
            >
              <div className="flex gap-8 px-4 pt-12 min-w-max">
                {events.map((event, index) => (
                  <TimelineItem key={index} event={event} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;

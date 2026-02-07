import { Heart } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

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
    title: 'First time you came to my home',
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
      className={`${isInView ? 'animate-timeline-reveal' : 'opacity-0'}`}
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
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground font-display">Our Story</h2>
          <p className="text-muted-foreground text-lg">Every moment that brought us closer</p>
        </div>

        <div className="relative">
          {/* Decorative timeline line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          {/* Responsive grid layout */}
          <div className="pt-12 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
              {events.map((event, index) => (
                <TimelineItem key={index} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;

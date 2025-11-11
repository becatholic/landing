import { BookOpen, Clock, Heart, Sparkles, CheckCircle, Calendar } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Pray the Rosary",
    description: "Interactive guided prayers to help you connect with God anytime, anywhere",
  },
  {
    icon: CheckCircle,
    title: "Build Holy Habits",
    description: "Track your daily spiritual practices and watch your faith journey grow",
  },
  {
    icon: Sparkles,
    title: "Keep Faith at Your Fingertips",
    description: "Access prayers, scriptures, and devotionals instantly throughout your day",
  },
  {
    icon: BookOpen,
    title: "Discover the Daily Gospel",
    description: "Reflect on today's Gospel reading with insights and contemplation",
  },
  {
    icon: Calendar,
    title: "Track Your Obligations",
    description: "Never miss important feast days, holy days, and spiritual commitments",
  },
  {
    icon: Clock,
    title: "Read the Bible with Clarity",
    description: "Explore scripture with helpful context and daily reading plans",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Strengthen Your Faith Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to grow closer to God, all in one beautiful app
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border bg-card hover:bg-accent/5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

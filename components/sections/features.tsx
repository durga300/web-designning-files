'use client';

import { Dumbbell, Users, Calendar, Target, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Dumbbell,
    title: 'Personalized Training',
    description: 'Custom workout plans tailored to your fitness level, goals, and schedule. Our AI-powered system adapts as you progress.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Users,
    title: 'Expert Coaches',
    description: 'Work with certified trainers who provide guidance, motivation, and accountability every step of your journey.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Book classes anytime, anywhere. Access 24/7 facilities or join live virtual sessions that fit your lifestyle.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Monitor your progress with detailed analytics, milestone celebrations, and insights to keep you motivated.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Nutrition Plans',
    description: 'Receive personalized meal plans and nutrition coaching to fuel your workouts and optimize your results.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'Wellness Support',
    description: 'Comprehensive approach including recovery, mindfulness, and mental health resources for holistic wellness.',
    color: 'from-pink-500 to-rose-500',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-slate-600">
            World-class facilities, expert guidance, and cutting-edge technology to help you reach your fitness goals faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

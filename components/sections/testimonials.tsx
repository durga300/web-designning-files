'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'This gym changed my life! Lost 30 pounds in 4 months with the personalized training program. The coaches are incredibly supportive and knowledgeable.',
    rating: 5,
    initials: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    avatar: 'https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'As someone with a busy schedule, the flexible class times and virtual options are perfect. The app makes tracking progress so easy and motivating.',
    rating: 5,
    initials: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Entrepreneur',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'The community here is amazing. Everyone is so encouraging and the trainers genuinely care about your progress. Best investment in myself I\'ve ever made.',
    rating: 5,
    initials: 'ER',
  },
  {
    name: 'David Park',
    role: 'Teacher',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'From complete beginner to running my first marathon - this program made it possible. The nutrition coaching was a game-changer for my energy levels.',
    rating: 5,
    initials: 'DP',
  },
  {
    name: 'Jessica Williams',
    role: 'Nurse',
    avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'After two kids, I needed to prioritize my health. The trainers created a safe and effective postpartum program. I feel stronger than ever!',
    rating: 5,
    initials: 'JW',
  },
  {
    name: 'Alex Thompson',
    role: 'Graphic Designer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'The variety of classes keeps things interesting. From HIIT to yoga to strength training - there\'s something for every mood and fitness goal.',
    rating: 5,
    initials: 'AT',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Success Stories from Our Members
          </h2>
          <p className="text-xl text-slate-600">
            Join thousands who have transformed their lives through fitness. Your success story starts here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-emerald-500 text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '2400',
    period: 'month',
    description: 'Perfect for getting started on your fitness journey',
    features: [
      'Access to gym facilities',
      'Basic workout plans',
      'Locker room access',
      'Mobile app access',
      '2 guest passes per month',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '4900',
    period: 'month',
    description: 'For serious fitness enthusiasts',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      'Personal trainer (2 sessions/month)',
      'Nutrition consultation',
      'Priority class booking',
      'Free guest passes',
      'Access to premium equipment',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '8200',
    period: 'month',
    description: 'Ultimate transformation package',
    features: [
      'Everything in Pro',
      'Personal trainer (8 sessions/month)',
      'Custom meal plans',
      'Body composition analysis',
      '24/7 facility access',
      'Spa & recovery services',
      'Dedicated fitness coach',
      'VIP lounge access',
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-600">
            Flexible pricing options to match your fitness goals and budget. All plans include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? 'border-emerald-500 shadow-xl scale-105'
                  : 'border-slate-200 hover:border-emerald-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-full shadow-lg">
                    <Zap className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </CardTitle>
                <p className="text-slate-600 text-sm mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-slate-900">
                    ₹{plan.price}
                  </span>
                  <span className="text-slate-600">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pb-8">
                <Button
                  className={`w-full mb-8 py-6 text-lg rounded-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/50'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Get Started
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                      <span className="text-slate-700 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            All plans include a 7-day money-back guarantee
          </p>
          <p className="text-sm text-slate-500">
            Need a custom plan for your team or corporation? <span className="text-emerald-600 font-semibold cursor-pointer hover:underline">Contact us</span>
          </p>
        </div>
      </div>
    </section>
  );
}
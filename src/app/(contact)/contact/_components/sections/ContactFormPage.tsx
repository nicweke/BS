'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

const servicesList = [
  'Web Design & Development',
  'Mobile App Development',
  'Brand Identity & Design',
  'Photography / Creative Direction',
  'Social Media Strategy',
  'Other',
];

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    projectDetails: '',
    inspiration: '',
    budget: '',
    timeline: '',
    referral: '',
    additional: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCheckbox = (service: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast({
        title: 'Thank you!',
        description: 'We’ve received your inquiry. Redirecting you home...',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        services: [],
        projectDetails: '',
        inspiration: '',
        budget: '',
        timeline: '',
        referral: '',
        additional: '',
      });
      setTimeout(() => router.push('/'), 3000);
    } else {
      const { error } = await res.json();
      toast({
        title: 'Submission failed',
        description: error || 'Something went wrong.',
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Let’s Build Something Great</h1>
        <p className="text-muted-foreground">Fill out the form so we can understand your vision.</p>
      </div>

      {/* Name & Email Row */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="space-y-2 w-full">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="space-y-2 w-full">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="Enter a valid email address" value={formData.email} onChange={handleChange} required />
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (optional)</Label>
        <Input id="phone" placeholder="WhatsApp or call-back number" value={formData.phone} onChange={handleChange} />
      </div>

      {/* Services */}
      <div className="space-y-2">
        <Label>What services are you interested in?</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {servicesList.map(service => (
            <label key={service} className="flex items-center gap-2">
              <Checkbox
                checked={formData.services.includes(service)}
                onCheckedChange={() => handleCheckbox(service)}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <Label htmlFor="projectDetails">Tell us about your project</Label>
        <Textarea
          id="projectDetails"
          placeholder="Briefly describe your goals and what you'd like us to help with"
          value={formData.projectDetails}
          onChange={handleChange}
          className="min-h-[100px]"
          required
        />
      </div>

      {/* Inspiration */}
      <div className="space-y-2">
        <Label htmlFor="inspiration">Any references or inspiration?</Label>
        <Textarea
          id="inspiration"
          placeholder="Share links to websites, apps, or styles you like"
          value={formData.inspiration}
          onChange={handleChange}
        />
      </div>

      {/* Budget */}
      <div className="space-y-2">
        <Label htmlFor="budget">What is your budget range?</Label>
        <Input
          id="budget"
          placeholder="e.g., Kshs 10,000–Kshs 50,000 or 'Not sure yet'"
          value={formData.budget}
          onChange={handleChange}
        />
      </div>

      {/* Timeline */}
      <div className="space-y-2">
        <Label htmlFor="timeline">Preferred timeline</Label>
        <Input
          id="timeline"
          placeholder="When would you like to start or launch?"
          value={formData.timeline}
          onChange={handleChange}
        />
      </div>

      {/* Referral */}
      <div className="space-y-2">
        <Label htmlFor="referral">How did you hear about us?</Label>
        <Input
          id="referral"
          placeholder="e.g., Google, Instagram, referral..."
          value={formData.referral}
          onChange={handleChange}
        />
      </div>

      {/* Additional Notes */}
      <div className="space-y-2">
        <Label htmlFor="additional">Anything else you'd like us to know?</Label>
        <Textarea
          id="additional"
          placeholder="Let us know any specific needs or ideas"
          value={formData.additional}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </Button>
    </form>
  );
}

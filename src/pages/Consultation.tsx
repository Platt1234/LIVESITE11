import React from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import { ConsultationBackground } from '../components/consultation/ConsultationBackground';

export function Consultation() {
  return (
    <div className="min-h-screen pt-20 relative">
      <ConsultationBackground />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
}
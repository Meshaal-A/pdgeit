import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import type { VolunteerPackage } from '../../types';

interface PackageCardProps {
  package: VolunteerPackage;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-xl shadow-md p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">{pkg.name}</h2>
          <p className="text-orange-100">{pkg.description}</p>
        </div>
        <Award className="w-8 h-8" />
      </div>

      <div className="space-y-3">
        {pkg.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-5 h-5 text-orange-200" />
            <span className="text-sm">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
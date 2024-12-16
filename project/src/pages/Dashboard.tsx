import React from 'react';
import { useStore } from '../store/useStore';
import { StatsGrid } from '../components/dashboard/StatsGrid';
import { ProgressCard } from '../components/dashboard/ProgressCard';
import { PackageCard } from '../components/dashboard/PackageCard';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { RecommendedEvents } from '../components/dashboard/RecommendedEvents';

export function Dashboard() {
  const { user, packages } = useStore();

  if (!user) {
    return null;
  }

  const currentPackage = packages.find((pkg) => pkg.level === user.level);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name}!</h1>
          <p className="text-gray-600 mt-1">Track your impact and find new opportunities.</p>
        </div>
      </div>
      
      <StatsGrid user={user} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        <div className="space-y-6">
          <ProgressCard user={user} />
          {currentPackage && <PackageCard package={currentPackage} />}
        </div>
      </div>

      <div className="mt-8">
        <RecommendedEvents />
      </div>
    </div>
  );
}
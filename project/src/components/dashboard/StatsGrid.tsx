import React from 'react';
import { Users, Calendar, Award, Clock } from 'lucide-react';
import type { User } from '../../types';

interface StatsGridProps {
  user: User;
}

export function StatsGrid({ user }: StatsGridProps) {
  const stats = [
    {
      label: 'Events Joined',
      value: user.completedEvents,
      icon: Calendar,
      color: 'bg-blue-500',
    },
    {
      label: 'Current Level',
      value: user.level,
      icon: Award,
      color: 'bg-orange-500',
    },
    {
      label: 'Total Points',
      value: user.points,
      icon: Clock,
      color: 'bg-green-500',
    },
    {
      label: 'Impact Made',
      value: user.completedEvents * 10,
      icon: Users,
      color: 'bg-purple-500',
      suffix: 'people',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold mt-1">
                {stat.value}
                {stat.suffix && <span className="text-sm ml-1">{stat.suffix}</span>}
              </p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
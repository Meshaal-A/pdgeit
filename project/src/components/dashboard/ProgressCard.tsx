import React from 'react';
import { Trophy, Star, Calendar } from 'lucide-react';
import type { User } from '../../types';

interface ProgressCardProps {
  user: User;
}

export function ProgressCard({ user }: ProgressCardProps) {
  const nextLevelPoints = (user.level + 1) * 100;
  const progress = (user.points / nextLevelPoints) * 100;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Progress</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <Trophy className="w-5 h-5 text-orange-600" />
            <span>Level {user.level}</span>
          </div>
          <span className="text-sm text-gray-500">{user.points} points</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-600 rounded-full h-2 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{user.points} points</span>
          <span>{nextLevelPoints} points</span>
        </div>

        <div className="pt-4 space-y-2">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-orange-600" />
            <span className="text-gray-600">{user.completedEvents} events completed</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-600" />
            <span className="text-gray-600">Next event in 2 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
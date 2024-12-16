import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'event_joined',
    title: 'Beach Cleanup in Galle',
    date: '2024-03-20',
    location: 'Galle',
    points: 50,
  },
  {
    id: 2,
    type: 'level_up',
    title: 'Reached Level 2',
    date: '2024-03-18',
    points: 100,
  },
  {
    id: 3,
    type: 'badge_earned',
    title: 'Environmental Champion Badge',
    date: '2024-03-15',
    points: 25,
  },
];

export function ActivityFeed() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{activity.title}</p>
              <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                <span>{activity.date}</span>
                {activity.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{activity.location}</span>
                  </div>
                )}
                <span className="text-orange-600">+{activity.points} points</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
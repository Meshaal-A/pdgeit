import type { VolunteerPackage } from '../../types';

export interface PackageSlice {
  packages: VolunteerPackage[];
}

export const createPackageSlice = (): PackageSlice => ({
  packages: [
    {
      id: '1',
      name: 'Ayubowan Novice',
      description: 'Begin your volunteering journey with basic opportunities',
      level: 1,
      benefits: ['Access to basic events', 'Community forum access', 'Digital badge'],
      requiredPoints: 0,
    },
    {
      id: '2',
      name: 'Lanka Lion',
      description: 'Intermediate volunteer with proven dedication',
      level: 2,
      benefits: ['Priority event registration', 'Mentorship opportunities', 'Special recognition'],
      requiredPoints: 100,
    },
    {
      id: '3',
      name: 'Serendib Sage',
      description: 'Expert volunteer and community leader',
      level: 3,
      benefits: ['Event leadership roles', 'Training workshops access', 'Premium badge'],
      requiredPoints: 300,
    },
  ],
});
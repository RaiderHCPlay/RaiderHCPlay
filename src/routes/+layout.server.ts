import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
  let daysToFullMoon: number;

  const response = await fetch('/api/moons', { method: 'GET' });
  const data = await response.json();

  const cycleDays = 29.53058867;
  const fullMoonAge = cycleDays / 2;
  if (data.phaseName === 'Full Moon') {
    daysToFullMoon = 0;
  } else if (data.age < fullMoonAge) {
    daysToFullMoon = fullMoonAge - data.age;
  } else {
    daysToFullMoon = cycleDays - data.age + fullMoonAge;
  }
  return {
    moon: {
      ...data,
      daysToFullMoon,
      theme: data.phaseName === 'Full Moon' ? 'moon' : 'normal'
    }
  };
};

export default function getMoonData() {
  const knownNewMoonDate = Date.UTC(2000, 0, 6, 18, 14, 0);
  const cycleDays = 29.53058867;
  const now = Date.now();
  const substractedDate = now - knownNewMoonDate;
  const daysSince = substractedDate / (1000 * 60 * 60 * 24);
  const moonAge = ((daysSince % cycleDays) + cycleDays) % cycleDays;
  const phase = (moonAge / cycleDays) * 2 * Math.PI;

  const illumination = (1 - Math.cos(phase)) / 2;

  return {
    age: moonAge,
    phase,
    illumination,
    isWaxing: phase < 0.5
  };
}

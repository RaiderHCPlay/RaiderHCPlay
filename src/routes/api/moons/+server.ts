import getMoonData from '$lib/server/getMoonInfo';

export async function GET() {
  const { age, phase, illumination, isWaxing } = getMoonData();
  let phaseName: string;

  if (age <= 1.845) {
    phaseName = 'New Moon';
  } else if (age <= 5.536 && age > 1.845) {
    phaseName = 'Waxing Crescent';
  } else if (age <= 9.228 && age > 5.536) {
    phaseName = 'First Quarter';
  } else if (age <= 12.919 && age > 9.228) {
    phaseName = 'Waxing Gibbous';
  } else if (age <= 16.61 && age > 12.919) {
    phaseName = 'Full Moon';
  } else if (age <= 20.301 && age > 16.61) {
    phaseName = 'Waning Gibbous';
  } else if (age <= 23.992 && age > 20.301) {
    phaseName = 'Last Quarter';
  } else if (age <= 29.53 && age > 23.992) {
    phaseName = 'Waning Crescent';
  } else {
    phaseName = 'New Moon';
  }

  const data = JSON.stringify({
    phaseName: phaseName,
    phase: phase,
    age: age,
    illumination: illumination,
    isWaxing: isWaxing
  });
  return new Response(data, {
    headers: { 'Content-Type': 'application/json' }
  });
}

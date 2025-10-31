import { getCurrentMoonAge } from '$lib/getCurrentMoonAge';

export async function GET() {
	const age = getCurrentMoonAge();

	let phase = '';
	if (age <= 1.845) {
		phase = 'New Moon';
	} else if (age <= 5.536 && age > 1.845) {
		phase = 'Waxing Crescent';
	} else if (age <= 9.228 && age > 5.536) {
		phase = 'First Quarter';
	} else if (age <= 12.919 && age > 9.228) {
		phase = 'Waxing Gibbous';
	} else if (age <= 16.61 && age > 12.919) {
		phase = 'Full Moon';
	} else if (age <= 20.301 && age > 16.61) {
		phase = 'Waning Gibbous';
	} else if (age <= 23.992 && age > 20.301) {
		phase = 'Last Quarter';
	} else if (age <= 29.53 && age > 23.992) {
		phase = 'Waning Crescent';
	} else {
		phase = 'New Moon';
	}

	const data = JSON.stringify({
		phase: phase,
		age: age
	});
	return new Response(data, {
		headers: { 'Content-Type': 'application/json' }
	});
}

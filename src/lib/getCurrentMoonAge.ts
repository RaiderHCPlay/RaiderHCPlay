export function getCurrentMoonAge() {
	const knownNewMoonDate = Date.UTC(2000, 0, 6, 18, 14, 0);
	const cycleDays = 29.53058867;
	const now = Date.now();
	const substractedDate = now - knownNewMoonDate;
	const daysSince = substractedDate / (1000 * 60 * 60 * 24);
	const moonAge = ((daysSince % cycleDays) + cycleDays) % cycleDays;

	return moonAge;
}

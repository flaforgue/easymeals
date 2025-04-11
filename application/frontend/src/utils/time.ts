export function addSecondsLeadingZero(nbSeconds: number): string {
  return nbSeconds < 10 ? `0${nbSeconds}` : `${nbSeconds}`;
}

export function addMinutesLeadingZero(nbMinutes: number): string {
  return nbMinutes < 60 ? `0${nbMinutes}` : `${nbMinutes}`;
}

export function formatSecondsToTime(durationInSeconds: number): string {
  const totalTimeInMinutes = Math.floor(durationInSeconds / 60);
  const totalTimeRemainingSeconds = Math.floor(durationInSeconds % 60);

  return `${addMinutesLeadingZero(totalTimeInMinutes)}:${addSecondsLeadingZero(totalTimeRemainingSeconds)}`;
}

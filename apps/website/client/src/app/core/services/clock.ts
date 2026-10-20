import { Injectable } from '@angular/core';

/** Provides the current date, so that date-dependent logic can be tested with a fixed day. */
@Injectable({ providedIn: 'root' })
export class Clock {
  /** Today's local date in ISO format (yyyy-MM-dd). */
  today(): string {
    const now: Date = new Date();
    const month: string = String(now.getMonth() + 1).padStart(2, '0');
    const day: string = String(now.getDate()).padStart(2, '0');
    return `${now.getFullYear()}-${month}-${day}`;
  }
}

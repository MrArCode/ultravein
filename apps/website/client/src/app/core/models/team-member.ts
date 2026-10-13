/** An instructor or board member presented on the website. */
export interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly credentials: string;
  /** Longer biography shown on the team page; null when only the credentials are known. */
  readonly bio: string | null;
  /** Path to the portrait relative to the public folder; null when no portrait is published. */
  readonly photo: string | null;
}

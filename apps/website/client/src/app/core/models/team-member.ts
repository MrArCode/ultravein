/** An instructor or board member presented on the website. */
export interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly credentials: string;
  /** Path to the portrait relative to the public folder. */
  readonly photo: string;
}

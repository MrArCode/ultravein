import { Component } from '@angular/core';

/** A short, verifiable fact that builds trust. */
interface TrustFact {
  readonly value: string;
  readonly label: string;
}

@Component({
  selector: 'uv-trust-bar',
  templateUrl: './trust-bar.html',
  styleUrl: './trust-bar.scss',
})
export class TrustBar {
  protected readonly facts: readonly TrustFact[] = [
    { value: '6–8 pkt', label: 'edukacyjnych NRPiP za wybrane kursy stacjonarne' },
    { value: '50+', label: 'publikacji naukowych zespołu w latach 2015–2026' },
    { value: 'VA-BC™', label: 'międzynarodowy certyfikat w dziedzinie dostępu naczyniowego' },
    { value: '2020', label: 'współtworzyliśmy pierwszy w Polsce zespół dostępów naczyniowych' },
  ];
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('render_WhenCreated_ContainsHeaderMainAndFooter', async () => {
    // arrange
    const fixture: ComponentFixture<App> = TestBed.createComponent(App);

    // act
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement as HTMLElement;

    // assert
    expect(element.querySelector('uv-site-header')).not.toBeNull();
    expect(element.querySelector('main#tresc')).not.toBeNull();
    expect(element.querySelector('uv-site-footer')).not.toBeNull();
  });
});

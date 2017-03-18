import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {KontakdaruratComponent} from "./kontakdarurat.component";

describe('KontakdaruratComponent', () => {
  let component: KontakdaruratComponent;
  let fixture: ComponentFixture<KontakdaruratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KontakdaruratComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontakdaruratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

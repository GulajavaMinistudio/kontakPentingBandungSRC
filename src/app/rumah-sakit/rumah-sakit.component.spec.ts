import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RumahSakitComponent} from "./rumah-sakit.component";

describe('RumahSakitComponent', () => {
  let component: RumahSakitComponent;
  let fixture: ComponentFixture<RumahSakitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RumahSakitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RumahSakitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

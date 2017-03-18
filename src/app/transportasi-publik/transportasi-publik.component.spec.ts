import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {TransportasiPublikComponent} from "./transportasi-publik.component";

describe('TransportasiPublikComponent', () => {
  let component: TransportasiPublikComponent;
  let fixture: ComponentFixture<TransportasiPublikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransportasiPublikComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportasiPublikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { addition } from '../addition/addition';
import { UiComponent } from  './ui.component';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
    //Arrange
    let result = 0;
    component.operator1 = 3;
    component.operator2 = 2;
    
    //Act
    component.addition();
    result = component.result;

    //Assert
    expect(result).toBe(5);
  });

  it('should add operator1 and operator2 when i click the addition button', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.addition-button'));
    
    // Act
    //component.addition();
    //fixture.detectChanges();
    additionButton.triggerEventHandler('click', null);
    
    // Assert
    expect(component.result).toBe(7.5);
    
  }); 
  
  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
      
    // Act
    component.addition();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;
      
    // Assert
    expect(el.innerText).toContain('10');    
  });

  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });

});

//describe('Ui Substraction - Component', () => {
//  let component: UiComponent;
//  let fixture: ComponentFixture<UiComponent>;

//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      declarations: [ UiComponent ]
//    })
//    .compileComponents();
//  });

//  beforeEach(() => {
//    fixture = TestBed.createComponent(UiComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });

//  it('Should call substraction method', () => {
//    expect(component).toBeFalsy();
//  });
//  it('Should render subs in TxtResut', () => {
//    expect(component).toBeFalsy();
//  });
//});

//describe('Ui Multiplication - Component', () => {
//  let component: UiComponent;
//  let fixture: ComponentFixture<UiComponent>;

//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      declarations: [ UiComponent ]
//    })
//    .compileComponents();
//  });

//  beforeEach(() => {
//    fixture = TestBed.createComponent(UiComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });

//  it('Should call multiplication method', () => {
//    expect(component).toBeFalsy();
//  });
//  it('Should render mul in TxtResut', () => {
//    expect(component).toBeFalsy();
//  });
//});

//describe('Ui Division - Component', () => {
//  let component: UiComponent;
//  let fixture: ComponentFixture<UiComponent>;

//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      declarations: [ UiComponent ]
//    })
//    .compileComponents();
//  });

//  beforeEach(() => {
//    fixture = TestBed.createComponent(UiComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });

//  it('Should call division method', () => {
//    expect(component).toBeFalsy();
//  });
//  it('Should render div in TxtResut', () => {
//    expect(component).toBeFalsy();
//  });
//});

//describe('Ui Exp - Component', () => {
//  let component: UiComponent;
//  let fixture: ComponentFixture<UiComponent>;

//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      declarations: [ UiComponent ]
//    })
//    .compileComponents();
//  });

//  beforeEach(() => {
//    fixture = TestBed.createComponent(UiComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });

//  it('Should call exp method', () => {
//    expect(component).toBeFalsy();
//  });
//  it('Should render exp in TxtResut', () => {
//    expect(component).toBeFalsy();
//  });
//});

//describe('Ui Sqr - Component', () => {
//  let component: UiComponent;
//  let fixture: ComponentFixture<UiComponent>;

//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      declarations: [ UiComponent ]
//    })
//    .compileComponents();
//  });

//  beforeEach(() => {
//    fixture = TestBed.createComponent(UiComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });

//  it('Should call sqr method', () => {
//    expect(component).toBeFalsy();
//  });
//  it('Should render sqr in TxtResut', () => {
//    expect(component).toBeFalsy();
//  });
//});

//describe('Ui Sqrt - Component', () => {
//  let component: UiComponent;
//  let fixture: ComponentFixture<UiComponent>;

//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      declarations: [ UiComponent ]
//    })
//    .compileComponents();
//  });

//  beforeEach(() => {
//    fixture = TestBed.createComponent(UiComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });

//  it('Should call sqrt method', () => {
//    expect(component).toBeFalsy();
//  });
//  it('Should render sqrt in TxtResut', () => {
//    expect(component).toBeFalsy();
//  });
//});
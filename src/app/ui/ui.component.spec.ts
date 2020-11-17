import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { addition } from '../addition/addition';
import { substraction } from '../substraction/substraction';
import { multiplication } from '../multiplication/multiplication';
import { division } from '../division/division';
import { exp } from '../exp/exp';
//import { sqr } from '../sqr/sqr';
//import { sqrt } from '../sqrt/sqrt';
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

  it('Should add operator1 and operator2 when i click the addition button', () => {
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

describe('Ui Substraction - Component', () => {
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

  it('Should call substraction method', () => {
    //Arrange
    let result = 0;
    component.operator1 = 3;
    component.operator2 = 2;
  
    //Act
    component.substraction();
    result = component.result;

    //Assert
    expect(result).toBe(1);
  });

  it('Should subs operator1 and operator2 when i click the substraction button', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let substractionButton = fixture.debugElement.query(By.css('.substraction-button'));
  
    // Act
    component.substraction();
    fixture.detectChanges();
    substractionButton.triggerEventHandler('click', null);
  
    // Assert
    expect(component.result).toBe(2.5);
  
  }); 

  it('Should render subs in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
    
    // Act
    component.substraction();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;
    
    // Assert
    expect(el.innerText).toContain('0');    
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

describe('Ui Multiplication - Component', () => {
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

  it('Should call multiplication method', () => {
    //Arrange
    let result = 0;
    component.operator1 = 3;
    component.operator2 = 2;
  
    //Act
    component.multiplication();
    result = component.result;

    //Assert
    expect(result).toBe(6);
  });

  it('Should mul operator1 and operator2 when i click the multiplication button', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let multiplicationButton = fixture.debugElement.query(By.css('.multiplication-button'));
  
    // Act
    component.multiplication();
    fixture.detectChanges();
    multiplicationButton.triggerEventHandler('click', null);
  
    // Assert
    expect(component.result).toBe(12.5);
  
  }); 

  it('Should render mul in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
    
    // Act
    component.multiplication();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;
    
    // Assert
    expect(el.innerText).toContain('25');    
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

describe('Ui Division - Component', () => {
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

  it('Should call division method', () => {
    //Arrange
    let result = 0;
    component.operator1 = 3;
    component.operator2 = 2;
  
    //Act
    component.division();
    result = component.result;

    //Assert
    expect(result).toBe(1.5);
  });

  it('Should div operator1 and operator2 when i click the division button', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let divisionButton = fixture.debugElement.query(By.css('.division-button'));
  
    // Act
    component.division();
    fixture.detectChanges();
    divisionButton.triggerEventHandler('click', null);
  
    // Assert
    expect(component.result).toBe(2);
  
  }); 

  it('Should render div in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
    
    // Act
    component.division();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;
    
    // Assert
    expect(el.innerText).toContain('1');    
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

describe('Ui Exp - Component', () => {
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

  it('Should call exp method', () => {
    //Arrange
    let result = 0;
    component.operator1 = 3;
    component.operator2 = 2;
  
    //Act
    component.exp();
    result = component.result;

    //Assert
    expect(result).toBe(9);
  });

  it('Should exp operator1 and operator2 when i click the exp button', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.0;
    let expButton = fixture.debugElement.query(By.css('.exp-button'));
  
    // Act
    component.exp();
    fixture.detectChanges();
    expButton.triggerEventHandler('click', null);
  
    // Assert
    expect(component.result).toBe(25);
  
  }); 

  it('Should render exp in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
    
    // Act
    component.exp();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;
    
    // Assert
    expect(el.innerText).toContain('3125');    
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

//Sirven las pruebas, los botones igual solo se ven feos...

//describe('Ui Sqr - Component', () => {
//  let component: UiComponent;
//  let fixture: ComponentFixture<UiComponent>;

//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      declarations: [ UiComponent ],
//      imports: [FormsModule]
//    })
//    .compileComponents();
//  });

//  beforeEach(() => {
//    fixture = TestBed.createComponent(UiComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });

//  it('Should call sqr method', () => {
    //Arrange
//    let result = 0;
//    component.operator1 = 3;
  
    //Act
//    component.sqr();
//    result = component.result;

    //Assert
//    expect(result).toBe(9);
//  });

//  it('Should sqr operator1 and operator2 when i click the sqr button', () => {
    // Arrange 
//    component.operator1 = 5.0;
//    let sqrButton = fixture.debugElement.query(By.css('.sqr-button'));
  
    // Act
//    component.sqr();
//    fixture.detectChanges();
//    sqrButton.triggerEventHandler('click', null);
  
    // Assert
//    expect(component.result).toBe(25);
  
//  }); 

//  it('Should render sqr in result div', () => {
    // Arrange
//    component.operator1 = 5;
    
    // Act
//    component.sqr();
//    fixture.detectChanges();

//    let de = fixture.debugElement.query(By.css('.result'));
//    let el : HTMLElement = de.nativeElement;
    
    // Assert
//    expect(el.innerText).toContain('25');    
//  });

//  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
//    await fixture.whenStable();
//    fixture.detectChanges();
//    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
//    inputElement.value = '3.1416';
//    inputElement.dispatchEvent(new Event('input'));
//    fixture.detectChanges();

    // Assert 
//    expect(component.operator1).toEqual(3.1416);
//  });

//  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
//    await fixture.whenStable();
//    fixture.detectChanges();
//    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
//    inputElement.value = '2.71';
//    inputElement.dispatchEvent(new Event('input'));
//    fixture.detectChanges();

    // Assert 
//    expect(component.operator2).toEqual(2.71);
//  });
//});

//describe('Ui Sqrt - Component', () => {
//  let component: UiComponent;
//  let fixture: ComponentFixture<UiComponent>;

//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      declarations: [ UiComponent ],
//      imports: [FormsModule]
//    })
//    .compileComponents();
//  });

//  beforeEach(() => {
//    fixture = TestBed.createComponent(UiComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });

//  it('Should call sqrt method', () => {
    //Arrange
//    let result = 0;
//    component.operator1 = 9;
  
    //Act
//    component.sqrt();
//    result = component.result;

    //Assert
//    expect(result).toBe(3);
//  });

//  it('Should sqrt operator1 and operator2 when i click the sqrt button', () => {
    // Arrange 
//    component.operator1 = 25;
//    let sqrtButton = fixture.debugElement.query(By.css('.sqrt-button'));
  
    // Act
//    component.sqrt();
//    fixture.detectChanges();
//    sqrtButton.triggerEventHandler('click', null);
  
    // Assert
//    expect(component.result).toBe(5);
  
//  }); 

//  it('Should render sqrt in result div', () => {
    // Arrange
//    component.operator1 = 16;
    
    // Act
//    component.sqrt();
//    fixture.detectChanges();

//    let de = fixture.debugElement.query(By.css('.result'));
//    let el : HTMLElement = de.nativeElement;
    
    // Assert
//    expect(el.innerText).toContain('4');    
//  });

//  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
//    await fixture.whenStable();
//    fixture.detectChanges();
//    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
//    inputElement.value = '3.1416';
//    inputElement.dispatchEvent(new Event('input'));
//    fixture.detectChanges();

    // Assert 
//    expect(component.operator1).toEqual(3.1416);
//  });

//  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
//    await fixture.whenStable();
//    fixture.detectChanges();
//    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
//    inputElement.value = '2.71';
//    inputElement.dispatchEvent(new Event('input'));
//    fixture.detectChanges();

    // Assert 
//    expect(component.operator2).toEqual(2.71);
//  });

//});
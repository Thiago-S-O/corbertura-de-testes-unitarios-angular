import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;
  /*
  O fixture embrulha, e dentro dele vai ter a instância do componente,
  onde é possível chamar métodos, acessar propriedade do componente,
  mas também trás com ele uma série de métodos utilitários que vai ajudar durante o teste
  */

  beforeEach(async () => {
    await TestBed.configureTestingModule({ // como aqui é um módulo dos teste, então precisa declarar os mesmo declarations, privides e imports (de acordo com a necessidade) do module do componente testado
      // declarations: [ LikeWidgetComponent ],
      // providers: [UniqueIdService],
      // imports: [FontAwesomeModule]

      imports: [LikeWidgetModule] // ou pode importar diretamente o próprio módulo do componente testado
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance; // instancia
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInput when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate ID during ngOnInput when (@Input id) is assigned', () => {
    const someId = 'someId'
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  })

  it(`${LikeWidgetComponent.prototype.like.name}
    should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  })
});

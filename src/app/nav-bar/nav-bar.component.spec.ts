import { async, ComponentFixture, TestBed, fakeAsync, } from '@angular/core/testing';
import { Router } from "@angular/router";
// import { RouterTestingModule } from '@angular/router/testing';
import { NavBarComponent } from './nav-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/routine/dataservice.service';

describe('NavBarComponent', () => {
    let component: NavBarComponent;
    let fixture: ComponentFixture<NavBarComponent>;
    let mockRouter = {
        navigate: jasmine.createSpy('navigate')
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavBarComponent],
            imports: [HttpClientTestingModule, FormsModule, HttpClientTestingModule],
            providers: [DataService, { provide: Router, useValue: mockRouter }],
        })
        fixture = TestBed.createComponent(NavBarComponent);

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
   
    
    it('should call ngOnInit', fakeAsync(() => {
        expect(component.ngOnInit).toBeTruthy();
        component.ngOnInit()
        expect(sessionStorage.getItem('token')).toBe('token')
        expect(component.loggedIn).toBeTruthy();
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/routine']);
        expect(component.showbutton).toBeTruthy();

    }))

    // it('should call  logout function', () => {
    //     expect(component.logout).toBeTruthy();
    //     component.logout()
    //     expect(sessionStorage.removeItem('token')).toBeUndefined(); // undefined
    //     expect(mockRouter.navigate).toHaveBeenCalledWith(['/routine']);
    //     expect(component.showbutton).toBeFalsy();
    // })



});

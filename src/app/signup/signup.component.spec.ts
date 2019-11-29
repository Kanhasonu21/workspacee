import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../routine/dataservice.service';
import { HomeService } from '../home/home.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';


describe('SignupComponent', () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    let homeservice: HomeService
    let mockRouter = {
        navigate: jasmine.createSpy('navigate')
    }

    const validUser = {
        firstName: 'Anoop',
        lastName: 'jain',
        userName: 'anoop2.jain',
        emailId: 'anoop2.jain@gmail.com',
        mobileNumber: '5248541589',
        password: 'Abcd@1234',
        confirmPassword: 'Abcd@1234'
    }


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignupComponent],
            imports: [HttpClientTestingModule, FormsModule, HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule],
            providers: [DataService, HomeService, FormBuilder, { provide: Router, useValue: mockRouter }],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should match data with registarion', fakeAsync(() => {
        component.userRegistraton.controls['firstName'].setValue('Anoop')
        component.userRegistraton.controls['lastName'].setValue('jain')
        component.userRegistraton.controls['userName'].setValue('anoop2.jain')
        component.userRegistraton.controls['emailId'].setValue('anoop2.jain@gmail.com')
        component.userRegistraton.controls['mobileNumber'].setValue('5248541589')
        component.userRegistraton.controls['password'].setValue('Abcd@1234')
        component.userRegistraton.controls['confirmPassword'].setValue('Abcd@1234')

    })
    )
    it('should call f function', () => {
        expect(component.f).toBeTruthy();
    })
    it('should call onSubmit function', () => {
        expect(component.userRegistraton.valid).toBeFalsy();
        expect(component.userRegistraton.invalid).toBeTruthy();
        component.userRegistraton.controls['firstName'].setValue('Anoop')
        component.userRegistraton.controls['lastName'].setValue('jain')
        component.userRegistraton.controls['userName'].setValue('anoop2.jain')
        component.userRegistraton.controls['emailId'].setValue('anoop2.jain@gmail.com')
        component.userRegistraton.controls['mobileNumber'].setValue('5248541589')
        component.userRegistraton.controls['password'].setValue('Abcd@1234')
        component.userRegistraton.controls['confirmPassword'].setValue('Abcd@1234');
        component.onSubmit();
        component.loading=false;
    })

   it('should subscribe',()=>{
    expect(component.userRegistraton.valid).toBeFalsy()
    component.userRegistraton.controls['firstName'].setValue('Anoop')
    component.userRegistraton.controls['lastName'].setValue('jain')
    component.userRegistraton.controls['userName'].setValue('anoop2.jain')
    component.userRegistraton.controls['emailId'].setValue('anoop2.jain@gmail.com')
    component.userRegistraton.controls['mobileNumber'].setValue('5248541589')
    component.userRegistraton.controls['password'].setValue('Abcd@1234')
    component.userRegistraton.controls['confirmPassword'].setValue('Abcd@1234');
    let app = component._HomeService
    spyOn(app, 'userRegistration').and.returnValues(of({
        result: {
            httpStatus: 200
        }
    }));
    component.onSubmit();
    spyOn(component, 'onSubmit').and.callThrough()
    expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
    })

});

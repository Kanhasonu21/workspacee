import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { AuthenticateComponent } from './authenticate.component';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HomeService } from 'src/app/home/home.service';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/routine/dataservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from "@angular/router";

import { Observable, of, from } from 'rxjs';

describe("Authenticate Component", () => {
    let component: AuthenticateComponent
    let fixture: ComponentFixture<AuthenticateComponent>;

    let service: HomeService;
    let dataService: DataService;
    let router: RouterTestingModule;
    let form: FormGroup;

    // beforeEach(async( () => {
    //   TestBed.configureTestingModule({
    //     declarations: [AuthenticateComponent],
    //     imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule],
    //     providers: [DataService,HomeService]
    //   })
    //   fixture = TestBed.createComponent(AuthenticateComponent);
    //   component = fixture.componentInstance;
    //   dataService=TestBed.get(DataService);
    //   service = TestBed.get(HomeService);
    // }))

    const validUser = {
        userName: 'anoop2.jain',
        password: 'Abcd@1234'
    }
    const blankUser = {
        userName: '',
        password: ''
    }
    describe('AuthenticateComponent', () => {
        let component: AuthenticateComponent;
        let fixture: ComponentFixture<AuthenticateComponent>;
        let service: HomeService;
        let serviceNotification: DataService;
        let mockRouter = {
            navigate: jasmine.createSpy('navigate')
        }
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [AuthenticateComponent],
                imports: [HttpClientTestingModule, FormsModule, HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule],
                providers: [DataService, HomeService, FormBuilder, { provide: Router, useValue: mockRouter }],
            }).compileComponents().then(() => {
                fixture = TestBed.createComponent(AuthenticateComponent);
                component = fixture.componentInstance;
            });
            fixture = TestBed.createComponent(AuthenticateComponent);
            component = fixture.componentInstance;
            component.ngOnInit();
            service = TestBed.get(HomeService);
            serviceNotification = TestBed.get(DataService);
        }));
        it('should create', () => {
            expect(component).toBeTruthy();
        });
        it('should set products property with the items returned from the server', fakeAsync(() => {
            component.form.controls['userName'].setValue('anoop2.jain')
            component.form.controls['password'].setValue('Abcd@1234')
            expect(component.form.value).toEqual(validUser);
        })
        )
        xit('should validate the user', fakeAsync(() => {
            expect(component.form.valid).toBeTruthy();
        }))
        it('should have default props', fakeAsync(() => {
            expect(component.form.value).toEqual(blankUser);
        }));
        xit('isValid should be false when form is invalid', fakeAsync(() => {
            expect(component.form).toBeFalsy();
        }));
        it('should call function', fakeAsync(() => {
            expect(component.f).toBeTruthy();
            expect(component.registerClick).toBeTruthy();
            expect(component.onSubmit).toBeTruthy();
        }))
        it('should call regsiter click', () => {
            component.registerClick();
            expect(component).toBeTruthy();
        })
        const mockErrorResponse = {
            status: 400, statusText: 'Invalid Credentials',
            status1: 404, statusText1: `Invalid Credentials`,
            status2: 501, statusText2: `Server Error`,
            status3: '', statusText3: `Data Server Error`,
        };
        it('should call print Error', () => {
            expect(component).toBeTruthy();
            component.printError(mockErrorResponse.status);
            expect(component.error).toEqual(mockErrorResponse.statusText)
            component.printError(mockErrorResponse.status2);
            expect(component.error).toEqual(mockErrorResponse.statusText2)
            component.printError(mockErrorResponse.status1);
            expect(component.error).toEqual(mockErrorResponse.statusText1)
            component.printError(mockErrorResponse.status3);
            expect(component.error).toEqual(mockErrorResponse.statusText3)
        })
        it('should call ng on INIT', () => {
            component.onSubmit()
            expect(component).toBeTruthy();
            expect(component.loading).toBeFalsy()

        })

        it('should call onSubmit function', () => {
            expect(component.form.valid).toBeFalsy()
            component.form.controls['userName'].setValue('anoop2.jain')
            component.form.controls['password'].setValue('Abcd@1234')
            let app = component.homeservice
            spyOn(app, 'authenticate').and.returnValues(of({
                result: {
                    httpStatus: 200
                }
            }));
            component.onSubmit();
            spyOn(component, 'onSubmit').and.callThrough()
            spyOn(component, 'response').and.callThrough()
            expect(component.response).toBeTruthy()
            expect(mockRouter.navigate).toHaveBeenCalledWith(['/routine']);



        })
        xit('should call noresponse', () => {
            expect(component.form.valid).toBeFalsy()
            component.form.controls['userName'].setValue('anoop')
            component.form.controls['password'].setValue('7gjhjhg')
            let app = component.homeservice
            spyOn(app, 'authenticate').and.returnValues(of({
                result: {
                    httpStatus: 500
                }
            }));
            component.onSubmit();
            spyOn(component, 'onSubmit').and.callThrough()
            spyOn(component, 'noresponse').and.callThrough()
            expect(component.noresponse).toBeTruthy()

        })



    })
})

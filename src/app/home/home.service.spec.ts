import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HomeService, Customer } from '../home/home.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('HomeService', () => {
    let httpMock: HttpTestingController;

    let testService: HomeService;
    let fixture: ComponentFixture<HomeService>

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HomeService],
        })
            .compileComponents();
        const testService = TestBed.get(HomeService);
        httpMock = TestBed.get(HttpTestingController);
    })


    it('should be created', () => {
        const service: HomeService = TestBed.get(HomeService);
        expect(service).toBeTruthy();
    });
    // it('should call downloadExcelFile', () => {
    //     const service: HomeService = TestBed.get(HomeService);
    //     spyOn(service, 'downloadExcelFile').and.callFake(service.downloadExcelFile)
    //     expect(service.downloadExcelFile).toBeTruthy()
    // });

    // it(' downloadExcelFile() should http GET names', () => {
    //     const service: HomeService = TestBed.get(HomeService);
    //     let receive: {
    //         size: 4265,
    //         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    //         __proto__: Blob
    //     }
    //     service.downloadExcelFile().subscribe(data => {
    //         console.log(data)
    //         expect(data).toEqual(receive);
    //     });
    //     let urll = `http://192.168.96.222:8080/schedule/download/matchschedule.xlsx`
    //     const req = httpMock.expectOne(req => req.method === 'GET' && req.url === urll);
        
    //     expect(req.request.method).toEqual("GET");
    //     req.flush(Blob);

    //     httpMock.verify();
    // });

});

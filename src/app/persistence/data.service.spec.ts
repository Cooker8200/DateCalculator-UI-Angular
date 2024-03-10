import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let dateService: DataService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  describe('getAllDates', () => {
    describe('good api call', () => {
      beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            DataService,
          ],
          imports: [HttpClientTestingModule]
        });
        dateService = TestBed.inject(DataService);
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
      });
      it('should return an array of dates', (done: DoneFn) => {
        const expectedResponse = [
          {
            name: 'Zuul',
            type: 'Birthday',
            date: 'Jan 1',
          },
          {
            name: 'Stay Puff',
            type: 'Birthday',
            date: 'Jan 1',
          },
        ];
        
        dateService.getAllDates().subscribe({
          next: (dates) => {
            expect(dates).toEqual(expectedResponse);
            done();
          },
          error: done.fail,
        });
        expect(httpClientSpy.get.calls.count()).toBe(1);
      });
    });
  });
  describe('putNewDate', () => {
    describe('good api call', () => {
      beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['put'])
        dateService = TestBed.inject(DataService);
      });
      it('should return the new date', (done: DoneFn) => {
        const newDate = {
          name: 'date',
          type: 'date',
          date: 'date'
        };
        dateService.putNewDate(newDate).subscribe({
          next: (date) => {
            expect(date).withContext('expected response').toEqual(newDate);
            done();
          },
          error: done.fail
        });
        expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
      });
    })
  });
  describe('deleteDate', () => {
    describe('good api call', () => {
      beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['delete'])
        dateService = TestBed.inject(DataService);
      });
      it('should return a good response', (done: DoneFn) => {
        const expectedResponse = 'date removed';
        dateService.deleteDate('badDate').subscribe({
          next: (resp) => {
            expect(resp).withContext('expected response').toEqual(expectedResponse);
            done();
          },
          error: done.fail
        });
        expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
      });
    });
  });
});

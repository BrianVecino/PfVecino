import { TestBed } from "@angular/core/testing";
import { ApiService } from "./api.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
    let service: ApiService;
    let httpMock: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ApiService],
      });
      service = TestBed.inject(ApiService);
      httpMock = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpMock.verify();
    });
  
    it('servicio creado', () => {
      expect(service).toBeTruthy();
    });
  
    it('verifica el metodo getdata', () => {
      const dummyData = {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
        location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/1'],
        url: 'https://rickandmortyapi.com/api/character/1',
        created: '2017-11-04T18:48:46.250Z'
      };
  
      service.getData().subscribe(data => {
        expect(data).toEqual(dummyData);
      });
  
      const datos = httpMock.expectOne(service['urlData']);
      expect(datos.request.method).toBe('GET');
      datos.flush(dummyData);
    });
  });
import { TestBed } from '@angular/core/testing';

import { BasicauthInterceptorService } from './basicauth-interceptor.service';

describe('BasicauthInterceptorService', () => {
  let service: BasicauthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicauthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ParameterInterceptor } from './parameter.interceptor';

describe('ParameterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ParameterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ParameterInterceptor = TestBed.inject(ParameterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

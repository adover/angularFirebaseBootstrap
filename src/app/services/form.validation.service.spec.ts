import { TestBed, inject } from '@angular/core/testing';

import { Form.ValidationService } from './form.validation.service';

describe('Form.ValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Form.ValidationService]
    });
  });

  it('should be created', inject([Form.ValidationService], (service: Form.ValidationService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { LoginSceneService } from './login-scene.service';

describe('LoginSceneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSceneService]
    });
  });

  it('should be created', inject([LoginSceneService], (service: LoginSceneService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    service = new UniqueIdService();
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(UniqueIdService);
  });

  it(`${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  })

  it(`${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
    const service = new UniqueIdService();
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  })

  it(`${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number generated IDs when called`, () => {
    const service = new UniqueIdService();
    service.generatedUniqueIdWithPrefix('app');
    service.generatedUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  })

  it(`${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should throw when called empty`, () => {
      const emptyValue = [null, undefined, '', '0', '1'];
      emptyValue.forEach(emptyValue => {
        expect(() => service.generatedUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value: ${emptyValue}`).toThrow();
      })
      // expect(() => service.generatedUniqueIdWithPrefix(null)).toThrow();
      // expect(() => service.generatedUniqueIdWithPrefix('')).toThrow();
      // expect(() => service.generatedUniqueIdWithPrefix(undefined)).toThrow();
  })
});

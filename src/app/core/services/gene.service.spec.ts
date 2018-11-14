import {
    TestBed
} from '@angular/core/testing';

import {
    GeneServiceStub
} from '../../testing';

import { GeneService } from './';

describe('Service: Gene: TestBed', () => {
    let geneService: GeneServiceStub;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: GeneService, useValue: new GeneServiceStub() }
            ]
        });

        geneService = TestBed.get(GeneService);
    });

    it('should create an instance', () => {
        expect(geneService).toBeDefined();
    });
});

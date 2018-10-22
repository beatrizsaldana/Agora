import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Gene, GeneInfo } from '../../../../models';

import { GeneService } from '../../../../core/services';

@Component({
    selector: 'rna',
    templateUrl: './rna.component.html',
    styleUrls: [ './rna.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class RNAComponent implements OnInit {
    @Input() gene: Gene;
    @Input() geneInfo: GeneInfo;
    @Input() id: string;
    @Input() placeholderUrl: string = '/assets/img/placeholder_member.png';

    dataLoaded: boolean = false;
    memberImages: any[] = [];

    constructor(
        private router: Router,
        private geneService: GeneService
    ) {}

    ngOnInit() {
        //
    }

    getInfoState() {
        return this.geneService.getInfoDataState();
    }

    goToRoute(path: string, outlets?: any) {
        console.log(this.router);
        console.log(outlets);
        (outlets) ? this.router.navigate([path, outlets]) : this.router.navigate([path]);
    }
}

import { Component, Input, OnInit } from '@angular/core';

import { Gene, ResourceCard } from '../../../../models';

@Component({
  selector: 'gene-resources',
  templateUrl: './gene-resources.component.html',
  styleUrls: ['./gene-resources.component.scss'],
})
export class GeneResourcesComponent implements OnInit {
  @Input() gene: Gene | undefined;
  
  additionalResources: ResourceCard[] = [];
  drugDevelopmentResources: ResourceCard[] = [];

  ngOnInit(): void {
    this.init();
  }

  getPubADLink() {
    // Pub AD links should have hgnc symbol
    if (this.gene?.hgnc_symbol) {
      return `https://adexplorer.medicine.iu.edu/pubad/external/${ this.gene.hgnc_symbol }`;
    }
    return 'https://adexplorer.medicine.iu.edu/pubad';
  }

  init() {
    if (!this.gene) {
      return;
    }

    this.drugDevelopmentResources = [
      {
        title: 'Chemical Probes',
        description:
          'View expert reviews and evaluations of chemical probes.',
        linkText: 'Visit Chemical Probes',
        link: `https://www.chemicalprobes.org/?q=${this.gene?.hgnc_symbol}`,
      },
      {
        title: 'Open Targets',
        description:
          'View this gene on Open Targets, a resource that provides evidence on the validity of therapeutic targets based on genome-scale experiments and analysis.',
        linkText: 'Visit Open Targets',
        link: `https://platform.opentargets.org/target/${this.gene?.ensembl_gene_id}`,
      },
      {
        title: 'PharmGKB',
        description:
          'Search PharmGKB for information on gene-drug and gene-phenotype relationships.',
        linkText: 'Visit PharmGKB',
        link: 'https://www.pharmgkb.org',
      },
      {
        title: 'Pharos',
        description:
          'View this gene on Pharos, a resource that provides access to the integrated knowledge-base from the Illuminating the Druggable Genome program.',
        linkText: 'Visit Pharos',
        link: `https://pharos.nih.gov/targets?q=${this.gene?.ensembl_gene_id}`,
      },
      {
        title: 'Probe Miner',
        description:
          'Search Probe Miner for information on chemical probes for this gene.',
        linkText: 'Visit Probe Miner',
        link: 'https://probeminer.icr.ac.uk/#/',
      },
      {
        title: 'Protein Data Bank',
        description:
          'Search PDB for experimental and computed protin structure information.',
        linkText: 'Search PDB',
        link: 'https://www.rcsb.org',
      },
    ];

    this.additionalResources = [
      {
        title: 'AD Atlas',
        description:
          'View this gene on the AD Atlas site, a network-based resource for investigating AD in a multi-omic context.',
        linkText: 'Visit AD Atlas',
        link: `https://adatlas.org/?geneID=${this.gene?.ensembl_gene_id}`,
      },
      {
        title: 'Allen Institute Transcriptomics',
        description:
          'View single nucleus RNAseq data for this gene using the Allen Institute’s Transcriptomics Comparative Viewer.',
        linkText: 'Visit AD Transcriptomics Viewer',
        link: `https://knowledge.brain-map.org/data/5IU4U8BP711TR6KZ843/2CD0HDC5PS6A58T0P6E/compare?geneOption=${this.gene?.hgnc_symbol ?? this.gene?.ensembl_gene_id}`,
      },
      {
        title: 'Alzforum',
        description:
          'Visit Alzforum for news and information resources about AD and related disorders.',
        linkText: 'Visit Alzforum',
        link: 'https://www.alzforum.org',
      },
      {
        title: 'AlzPED',
        description:
          'Search AlzPED for information on preclinical efficacy studies of candidate AD therapeutics.',
        linkText: 'Visit AlzPED',
        link: 'https://alzped.nia.nih.gov',
      },
      {
        title: 'AMP-PD Target Explorer', 
        description: 'View this gene in the AMP-PD Target Explorer, a resource that hosts evidence about whether genes are associated with Parkinson\'s Disease.', 
        linkText: 'Visit AMP-PD',
        link: `https://target-explorer.amp-pd.org/genes/target-search?gene=${this.gene?.ensembl_gene_id}`
      },
      {
        title: 'Gene Ontology',
        description:
          'View the gene ontology information for this gene on Ensembl.',
        linkText: 'Visit Ensembl',
        link: `https://www.ensembl.org/Homo_sapiens/Gene/Ontologies/molecular_function?g=${this.gene?.ensembl_gene_id}`,
      },
      {
        title: 'GeneCards',
        description:
          'Visit GeneCards to view integrated information about this gene.',
        linkText: 'Visit GeneCards',
        link: `https://www.genecards.org/Search/Keyword?queryString=${this.gene?.ensembl_gene_id}`,
      },
      {
        title: 'Genomics DB',
        description:
          'View this gene on the National Institute on Aging Genetics of Alzheimer\'s Disease Data Storage Site (NIAGADS) Genomics Database.',
        linkText: 'Visit Genomics DB',
        link: `https://www.niagads.org/genomics/app/record/gene/${this.gene?.ensembl_gene_id}`,
      },
      {
        title: 'Pub AD',
        description:
          'View dementia-related publication information for this gene on PubAD.',
        linkText: 'Visit PubAD',
        link: `${ this.getPubADLink() }`,
      },
      {
        title: 'Reactome Pathways',
        description:
          'View the reactome pathway information for this gene on Ensembl.',
        linkText: 'Visit Ensembl',
        link: `https://www.ensembl.org/Homo_sapiens/Gene/Pathway?g=${this.gene?.ensembl_gene_id}`,
      },
      {
        title: 'SEA-AD',
        description:
          'Explore the Seattle Alzheimer’s Disease Brain Cell Atlas resources.',
        linkText: 'Visit SEA-AD',
        link: 'https://portal.brain-map.org/explore/seattle-alzheimers-disease',
      },
      {
        title: 'UniProtKB',
        description:
          'View sequence and functional information about the protein(s) encoded by this gene.',
        linkText: 'Visit UniProtKB',
        link: `https://www.uniprot.org/uniprotkb?query=${this.gene?.ensembl_gene_id}`,
      },
    ];
  }
}

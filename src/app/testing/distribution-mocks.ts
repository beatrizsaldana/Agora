import { Distribution, OverallScoresDistribution } from '../models';

export const distributionMock: Distribution = {
  rna_differential_expression: [
    {
      _id: '628d0fde0e8d04279fcb33b7',
      model: 'AD Diagnosis (males and females)',
      tissue: 'ACC',
      min: -0.256,
      max: 0.2503,
      first_quartile: -0.0661,
      median: -0.0036,
      third_quartile: 0.0604,
    },
    {
      _id: '628d0fde0e8d04279fcb33b8',
      model: 'AD Diagnosis x AOD (males and females)',
      tissue: 'ACC',
      min: -0.0988,
      max: 0.0965,
      first_quartile: -0.0256,
      median: -0.002,
      third_quartile: 0.0232,
    },
    {
      _id: '628d0fde0e8d04279fcb33b9',
      model: 'AD Diagnosis x Sex (females only)',
      tissue: 'ACC',
      min: -0.259,
      max: 0.2549,
      first_quartile: -0.0663,
      median: -0.0036,
      third_quartile: 0.0622,
    },
    {
      _id: '628d0fde0e8d04279fcb33ba',
      model: 'AD Diagnosis x Sex (males only)',
      tissue: 'ACC',
      min: -0.2973,
      max: 0.2879,
      first_quartile: -0.0778,
      median: -0.0041,
      third_quartile: 0.0685,
    },
    {
      _id: '628d0fde0e8d04279fcb33bb',
      model: 'AD Diagnosis (males and females)',
      tissue: 'CBE',
      min: -0.4613,
      max: 0.4575,
      first_quartile: -0.1168,
      median: 0.0018,
      third_quartile: 0.1129,
    },
    {
      _id: '628d0fde0e8d04279fcb33bc',
      model: 'AD Diagnosis x AOD (males and females)',
      tissue: 'CBE',
      min: -0.1637,
      max: 0.1587,
      first_quartile: -0.0428,
      median: -0.0003,
      third_quartile: 0.0378,
    },
    {
      _id: '628d0fde0e8d04279fcb33bd',
      model: 'AD Diagnosis x Sex (females only)',
      tissue: 'CBE',
      min: -0.4565,
      max: 0.4539,
      first_quartile: -0.1151,
      median: 0.0014,
      third_quartile: 0.1125,
    },
    {
      _id: '628d0fde0e8d04279fcb33be',
      model: 'AD Diagnosis x Sex (males only)',
      tissue: 'CBE',
      min: -0.5192,
      max: 0.5195,
      first_quartile: -0.1297,
      median: 0.0059,
      third_quartile: 0.13,
    },
    {
      _id: '628d0fde0e8d04279fcb33bf',
      model: 'AD Diagnosis (males and females)',
      tissue: 'DLPFC',
      min: -0.2383,
      max: 0.2247,
      first_quartile: -0.0647,
      median: -0.008,
      third_quartile: 0.0511,
    },
    {
      _id: '628d0fde0e8d04279fcb33c0',
      model: 'AD Diagnosis x AOD (males and females)',
      tissue: 'DLPFC',
      min: -0.1016,
      max: 0.0886,
      first_quartile: -0.0303,
      median: -0.005,
      third_quartile: 0.0173,
    },
    {
      _id: '628d0fde0e8d04279fcb33c1',
      model: 'AD Diagnosis x Sex (females only)',
      tissue: 'DLPFC',
      min: -0.2795,
      max: 0.2754,
      first_quartile: -0.0714,
      median: -0.0049,
      third_quartile: 0.0673,
    },
    {
      _id: '628d0fde0e8d04279fcb33c2',
      model: 'AD Diagnosis x Sex (males only)',
      tissue: 'DLPFC',
      min: -0.2386,
      max: 0.2163,
      first_quartile: -0.068,
      median: -0.0083,
      third_quartile: 0.0457,
    },
    {
      _id: '628d0fde0e8d04279fcb33c3',
      model: 'AD Diagnosis (males and females)',
      tissue: 'FP',
      min: -0.3372,
      max: 0.2586,
      first_quartile: -0.1138,
      median: -0.035,
      third_quartile: 0.0351,
    },
    {
      _id: '628d0fde0e8d04279fcb33c4',
      model: 'AD Diagnosis x AOD (males and females)',
      tissue: 'FP',
      min: -0.1108,
      max: 0.094,
      first_quartile: -0.034,
      median: -0.0078,
      third_quartile: 0.0172,
    },
    {
      _id: '628d0fde0e8d04279fcb33c5',
      model: 'AD Diagnosis x Sex (females only)',
      tissue: 'FP',
      min: -0.332,
      max: 0.2502,
      first_quartile: -0.1137,
      median: -0.0357,
      third_quartile: 0.0319,
    },
    {
      _id: '628d0fde0e8d04279fcb33c6',
      model: 'AD Diagnosis x Sex (males only)',
      tissue: 'FP',
      min: -0.4088,
      max: 0.3243,
      first_quartile: -0.1339,
      median: -0.0364,
      third_quartile: 0.0494,
    },
    {
      _id: '628d0fde0e8d04279fcb33c7',
      model: 'AD Diagnosis (males and females)',
      tissue: 'IFG',
      min: -0.3957,
      max: 0.353,
      first_quartile: -0.1149,
      median: -0.0204,
      third_quartile: 0.0722,
    },
    {
      _id: '628d0fde0e8d04279fcb33c8',
      model: 'AD Diagnosis x AOD (males and females)',
      tissue: 'IFG',
      min: -0.127,
      max: 0.1167,
      first_quartile: -0.0356,
      median: -0.0052,
      third_quartile: 0.0253,
    },
    {
      _id: '628d0fde0e8d04279fcb33c9',
      model: 'AD Diagnosis x Sex (females only)',
      tissue: 'IFG',
      min: -0.3917,
      max: 0.3212,
      first_quartile: -0.1244,
      median: -0.0335,
      third_quartile: 0.0538,
    },
    {
      _id: '628d0fde0e8d04279fcb33ca',
      model: 'AD Diagnosis x Sex (males only)',
      tissue: 'IFG',
      min: -0.5094,
      max: 0.4691,
      first_quartile: -0.1425,
      median: -0.0182,
      third_quartile: 0.1022,
    },
    {
      _id: '628d0fde0e8d04279fcb33cb',
      model: 'AD Diagnosis (males and females)',
      tissue: 'PCC',
      min: -0.2772,
      max: 0.2639,
      first_quartile: -0.0743,
      median: -0.0097,
      third_quartile: 0.061,
    },
    {
      _id: '628d0fde0e8d04279fcb33cc',
      model: 'AD Diagnosis x AOD (males and females)',
      tissue: 'PCC',
      min: -0.0651,
      max: 0.0552,
      first_quartile: -0.02,
      median: -0.0047,
      third_quartile: 0.0101,
    },
    {
      _id: '628d0fde0e8d04279fcb33cd',
      model: 'AD Diagnosis x Sex (females only)',
      tissue: 'PCC',
      min: -0.296,
      max: 0.2863,
      first_quartile: -0.0776,
      median: -0.0075,
      third_quartile: 0.0679,
    },
    {
      _id: '628d0fde0e8d04279fcb33ce',
      model: 'AD Diagnosis x Sex (males only)',
      tissue: 'PCC',
      min: -0.2924,
      max: 0.2748,
      first_quartile: -0.0797,
      median: -0.0113,
      third_quartile: 0.0621,
    },
    {
      _id: '628d0fde0e8d04279fcb33cf',
      model: 'AD Diagnosis (males and females)',
      tissue: 'PHG',
      min: -0.5675,
      max: 0.6049,
      first_quartile: -0.1278,
      median: 0.0142,
      third_quartile: 0.1653,
    },
    {
      _id: '628d0fde0e8d04279fcb33d0',
      model: 'AD Diagnosis x AOD (males and females)',
      tissue: 'PHG',
      min: -0.2082,
      max: 0.2261,
      first_quartile: -0.0453,
      median: 0.0078,
      third_quartile: 0.0632,
    },
    {
      _id: '628d0fde0e8d04279fcb33d1',
      model: 'AD Diagnosis x Sex (females only)',
      tissue: 'PHG',
      min: -0.5896,
      max: 0.649,
      first_quartile: -0.1251,
      median: 0.029,
      third_quartile: 0.1846,
    },
    {
      _id: '628d0fde0e8d04279fcb33d2',
      model: 'AD Diagnosis x Sex (males only)',
      tissue: 'PHG',
      min: -0.5629,
      max: 0.544,
      first_quartile: -0.1478,
      median: -0.0142,
      third_quartile: 0.1289,
    },
    {
      _id: '628d0fde0e8d04279fcb33d3',
      model: 'AD Diagnosis (males and females)',
      tissue: 'STG',
      min: -0.3787,
      max: 0.3589,
      first_quartile: -0.1021,
      median: -0.0101,
      third_quartile: 0.0823,
    },
    {
      _id: '628d0fde0e8d04279fcb33d4',
      model: 'AD Diagnosis x AOD (males and females)',
      tissue: 'STG',
      min: -0.1524,
      max: 0.1509,
      first_quartile: -0.0387,
      median: -0.0018,
      third_quartile: 0.0371,
    },
    {
      _id: '628d0fde0e8d04279fcb33d5',
      model: 'AD Diagnosis x Sex (females only)',
      tissue: 'STG',
      min: -0.3695,
      max: 0.3516,
      first_quartile: -0.0991,
      median: -0.0126,
      third_quartile: 0.0812,
    },
    {
      _id: '628d0fde0e8d04279fcb33d6',
      model: 'AD Diagnosis x Sex (males only)',
      tissue: 'STG',
      min: -0.4638,
      max: 0.4224,
      first_quartile: -0.1314,
      median: -0.0179,
      third_quartile: 0.0901,
    },
    {
      _id: '628d0fde0e8d04279fcb33d7',
      model: 'AD Diagnosis (males and females)',
      tissue: 'TCX',
      min: -0.635,
      max: 0.6173,
      first_quartile: -0.1653,
      median: -0.0097,
      third_quartile: 0.1477,
    },
    {
      _id: '628d0fde0e8d04279fcb33d8',
      model: 'AD Diagnosis x AOD (males and females)',
      tissue: 'TCX',
      min: -0.2272,
      max: 0.2164,
      first_quartile: -0.0608,
      median: -0.0057,
      third_quartile: 0.0501,
    },
    {
      _id: '628d0fde0e8d04279fcb33d9',
      model: 'AD Diagnosis x Sex (females only)',
      tissue: 'TCX',
      min: -0.6689,
      max: 0.6459,
      first_quartile: -0.1759,
      median: -0.0113,
      third_quartile: 0.1528,
    },
    {
      _id: '628d0fde0e8d04279fcb33da',
      model: 'AD Diagnosis x Sex (males only)',
      tissue: 'TCX',
      min: -0.6545,
      max: 0.6445,
      first_quartile: -0.1674,
      median: -0.0074,
      third_quartile: 0.1574,
    },
    {
      _id: '628fa7e66816d1da8e8dceb1',
      model: 'AD Diagnosis (males and females)',
      tissue: 'ACC',
      min: -0.256,
      max: 0.2503,
      first_quartile: -0.0661,
      median: -0.0036,
      third_quartile: 0.0604,
    },
  ],
  proteomics_LFQ: [
    {
      _id: '62d7a4a5ad65935190ad880e',
      tissue: 'AntPFC',
      min: -0.2289,
      max: 0.239,
      first_quartile: -0.0534,
      median: 0.0028,
      third_quartile: 0.0635,
      type: 'LFQ',
    },
    {
      _id: '62d7a4a5ad65935190ad880f',
      tissue: 'DLPFC',
      min: -0.2453,
      max: 0.248,
      first_quartile: -0.0603,
      median: -0.0001,
      third_quartile: 0.063,
      type: 'LFQ',
    },
    {
      _id: '62d7a4a5ad65935190ad8810',
      tissue: 'MFG',
      min: -0.4398,
      max: 0.4055,
      first_quartile: -0.1228,
      median: -0.0241,
      third_quartile: 0.0885,
      type: 'LFQ',
    },
    {
      _id: '62d7a4a5ad65935190ad8811',
      tissue: 'TCX',
      min: -0.2492,
      max: 0.2165,
      first_quartile: -0.0745,
      median: -0.0167,
      third_quartile: 0.0419,
      type: 'LFQ',
    },
  ],
  proteomics_SRM: [
    {
      _id: '62d7a4a5ad65935190ad8812',
      tissue: 'DLPFC',
      min: -8.8431,
      max: 9.0714,
      first_quartile: -2.1252,
      median: -0.0592,
      third_quartile: 2.3535,
      type: 'SRM',
    },
  ],
  proteomics_TMT: [
    {
      _id: '62d7a4a5ad65935190ad8812',
      tissue: 'DLPFC',
      min: -8.8431,
      max: 9.0714,
      first_quartile: -2.1252,
      median: -0.0592,
      third_quartile: 2.3535,
      type: 'TMT',
    },
  ],
  overall_scores: [
    {
      distribution: [5225, 4872, 4868, 3587, 2376, 1293, 576, 431, 80, 11],
      bins: [
        [0, 0.3],
        [0.3, 0.6],
        [0.6, 0.9],
        [0.9, 1.2],
        [1.2, 1.5],
        [1.5, 1.8],
        [1.8, 2.1],
        [2.1, 2.4],
        [2.4, 2.7],
        [2.7, 3],
      ],
      min: 0.0016,
      max: 3,
      mean: 1.2439,
      first_quartile: 1,
      third_quartile: 2,
      name: 'Genetics Score',
      syn_id: 'syn25913473',
      wiki_id: '613104',
    },
    {
      distribution: [10151, 2975, 2702, 1834, 1361, 1173, 1075, 1061, 829, 715],
      bins: [
        [0, 0.2],
        [0.2, 0.4],
        [0.4, 0.6],
        [0.6, 0.8],
        [0.8, 1],
        [1, 1.2],
        [1.2, 1.4],
        [1.4, 1.6],
        [1.6, 1.8],
        [1.8, 2],
      ],
      min: 0,
      max: 2,
      mean: 0.7336,
      first_quartile: 0,
      third_quartile: 1,
      name: 'Genomics Score',
      syn_id: 'syn25913473',
      wiki_id: '613106',
    },
    {
      distribution: [8272, 1435, 1138, 1114, 749, 749, 740, 730, 376, 353],
      bins: [
        [0, 0.2],
        [0.2, 0.4],
        [0.4, 0.6],
        [0.6, 0.8],
        [0.8, 1],
        [1, 1.2],
        [1.2, 1.4],
        [1.4, 1.6],
        [1.6, 1.8],
        [1.8, 2],
      ],
      min: 0,
      max: 2,
      mean: 0.5014,
      first_quartile: 0,
      third_quartile: 1,
      name: 'Literature Score',
      syn_id: 'syn25913473',
      wiki_id: '613105',
    },
    {
      distribution: [4670, 4601, 3675, 3636, 3518, 2345, 1358, 741, 114, 1],
      bins: [
        [0, 0.7],
        [0.7, 1.4],
        [1.4, 2.1],
        [2.1, 2.8],
        [2.8, 3.5],
        [3.5, 4.2],
        [4.2, 4.9],
        [4.9, 5.6],
        [5.6, 6.3],
        [6.3, 7],
      ],
      min: 0,
      max: 6.36,
      mean: 2.2049,
      first_quartile: 1,
      third_quartile: 3,
      name: 'Overall Score',
      syn_id: 'syn25913473',
      wiki_id: '613107',
    },
  ],
};

export const overallScoresMock1: OverallScoresDistribution[] = [
  {
    'distribution':[
      766,
      4804,
      4198,
      4001,
      3172,
      2880,
      3097,
      1562,
      323,
      19
    ],
    'bins':[
      [
        0,
        0.5
      ],
      [
        0.5,
        1
      ],
      [
        1,
        1.5
      ],
      [
        1.5,
        2
      ],
      [
        2,
        2.5
      ],
      [
        2.5,
        3
      ],
      [
        3,
        3.5
      ],
      [
        3.5,
        4
      ],
      [
        4,
        4.5
      ],
      [
        4.5,
        5
      ]
    ],
    'min':0,
    'max':4.7438,
    'mean':1.9484,
    'first_quartile':1,
    'third_quartile':3,
    'name':'Target Risk Score',
    'syn_id':'syn25913473',
    'wiki_id':'621071'
  },
  {
    'distribution':[
      377,
      1758,
      5265,
      3993,
      4184,
      4440,
      3028,
      1053,
      190,
      26
    ],
    'bins':[
      [
        0,
        0.3
      ],
      [
        0.3,
        0.6
      ],
      [
        0.6,
        0.9
      ],
      [
        0.9,
        1.2
      ],
      [
        1.2,
        1.5
      ],
      [
        1.5,
        1.8
      ],
      [
        1.8,
        2.1
      ],
      [
        2.1,
        2.4
      ],
      [
        2.4,
        2.7
      ],
      [
        2.7,
        3
      ]
    ],
    'min':0,
    'max':3,
    'mean':1.2673,
    'first_quartile':1,
    'third_quartile':2,
    'name':'Genetic Risk Score',
    'syn_id':'syn25913473',
    'wiki_id':'621069'
  },
  {
    'distribution':[
      10159,
      830,
      1061,
      1076,
      1175,
      1362,
      1836,
      2709,
      716,
      2983
    ],
    'bins':[
      [
        0,
        0.2
      ],
      [
        0.2,
        0.4
      ],
      [
        0.4,
        0.6
      ],
      [
        0.6,
        0.8
      ],
      [
        0.8,
        1
      ],
      [
        1,
        1.2
      ],
      [
        1.2,
        1.4
      ],
      [
        1.4,
        1.6
      ],
      [
        1.6,
        1.8
      ],
      [
        1.8,
        2
      ]
    ],
    'min':0,
    'max':2,
    'mean':0.7341,
    'first_quartile':0,
    'third_quartile':1,
    'name':'Multi-omic Risk Score',
    'syn_id':'syn25913473',
    'wiki_id':'621070'
  },
  {
    'distribution':[
      3015,
      0,
      105,
      424,
      714,
      709,
      2167,
      903,
      534,
      43
    ],
    'bins':[
      [
        0,
        0.2
      ],
      [
        0.2,
        0.4
      ],
      [
        0.4,
        0.6
      ],
      [
        0.6,
        0.8
      ],
      [
        0.8,
        1
      ],
      [
        1,
        1.2
      ],
      [
        1.2,
        1.4
      ],
      [
        1.4,
        1.6
      ],
      [
        1.6,
        1.8
      ],
      [
        1.8,
        2
      ]
    ],
    'min':0,
    'max':2,
    'mean':0.8093,
    'first_quartile':0,
    'third_quartile':1,
    'name':'Literature Score',
    'syn_id':'syn25913473',
    'wiki_id':'613105'
  }
];

export const overallScoresMock2: OverallScoresDistribution[] = [
  {
    'distribution':[
      377,
      1758,
      5265,
      3993,
      4184,
      4440,
      3028,
      1053,
      190,
      26
    ],
    'bins':[
      [
        0,
        0.3
      ],
      [
        0.3,
        0.6
      ],
      [
        0.6,
        0.9
      ],
      [
        0.9,
        1.2
      ],
      [
        1.2,
        1.5
      ],
      [
        1.5,
        1.8
      ],
      [
        1.8,
        2.1
      ],
      [
        2.1,
        2.4
      ],
      [
        2.4,
        2.7
      ],
      [
        2.7,
        3
      ]
    ],
    'min':0,
    'max':3,
    'mean':1.2673,
    'first_quartile':1,
    'third_quartile':2,
    'name':'Genetic Risk Score',
    'syn_id':'syn25913473',
    'wiki_id':'621069'
  },
  {
    'distribution':[
      766,
      4804,
      4198,
      4001,
      3172,
      2880,
      3097,
      1562,
      323,
      19
    ],
    'bins':[
      [
        0,
        0.5
      ],
      [
        0.5,
        1
      ],
      [
        1,
        1.5
      ],
      [
        1.5,
        2
      ],
      [
        2,
        2.5
      ],
      [
        2.5,
        3
      ],
      [
        3,
        3.5
      ],
      [
        3.5,
        4
      ],
      [
        4,
        4.5
      ],
      [
        4.5,
        5
      ]
    ],
    'min':0,
    'max':4.7438,
    'mean':1.9484,
    'first_quartile':1,
    'third_quartile':3,
    'name':'Target Risk Score',
    'syn_id':'syn25913473',
    'wiki_id':'621071'
  },
  {
    'distribution':[
      3015,
      0,
      105,
      424,
      714,
      709,
      2167,
      903,
      534,
      43
    ],
    'bins':[
      [
        0,
        0.2
      ],
      [
        0.2,
        0.4
      ],
      [
        0.4,
        0.6
      ],
      [
        0.6,
        0.8
      ],
      [
        0.8,
        1
      ],
      [
        1,
        1.2
      ],
      [
        1.2,
        1.4
      ],
      [
        1.4,
        1.6
      ],
      [
        1.6,
        1.8
      ],
      [
        1.8,
        2
      ]
    ],
    'min':0,
    'max':2,
    'mean':0.8093,
    'first_quartile':0,
    'third_quartile':1,
    'name':'Literature Score',
    'syn_id':'syn25913473',
    'wiki_id':'613105'
  },
  {
    'distribution':[
      10159,
      830,
      1061,
      1076,
      1175,
      1362,
      1836,
      2709,
      716,
      2983
    ],
    'bins':[
      [
        0,
        0.2
      ],
      [
        0.2,
        0.4
      ],
      [
        0.4,
        0.6
      ],
      [
        0.6,
        0.8
      ],
      [
        0.8,
        1
      ],
      [
        1,
        1.2
      ],
      [
        1.2,
        1.4
      ],
      [
        1.4,
        1.6
      ],
      [
        1.6,
        1.8
      ],
      [
        1.8,
        2
      ]
    ],
    'min':0,
    'max':2,
    'mean':0.7341,
    'first_quartile':0,
    'third_quartile':1,
    'name':'Multi-omic Risk Score',
    'syn_id':'syn25913473',
    'wiki_id':'621070'
  },
];
import flwrsOneImg from '../images/flowers1.webp';
import flwrsOneSquareImg from '../images/flowers1-square.webp';
import flwrsTwoImg from '../images/flowers2.webp';
import flwrsThreeImg from '../images/flowers3.webp';

const visionApiFlwrsOne = {
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 126
            },
            {
              "x": 3023,
              "y": 126
            },
            {
              "x": 3023,
              "y": 3906
            },
            {
              "y": 3906
            }
          ]
        },
        "confidence": 0.5208333,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 504
            },
            {
              "x": 3023,
              "y": 504
            },
            {
              "x": 3023,
              "y": 3528
            },
            {
              "y": 3528
            }
          ]
        },
        "confidence": 0.625,
        "importanceFraction": 0.96
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 756
            },
            {
              "x": 3023,
              "y": 756
            },
            {
              "x": 3023,
              "y": 3276
            },
            {
              "y": 3276
            }
          ]
        },
        "confidence": 0.625,
        "importanceFraction": 0.8
      }
    ]
  },
  "fullTextAnnotation": {
    "pages": [
      {
        "blocks": [
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 2591,
                  "y": 3776
                },
                {
                  "x": 2719,
                  "y": 3926
                },
                {
                  "x": 2599,
                  "y": 4028
                },
                {
                  "x": 2471,
                  "y": 3878
                }
              ]
            },
            "confidence": 0.3291231,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 2591,
                      "y": 3776
                    },
                    {
                      "x": 2719,
                      "y": 3926
                    },
                    {
                      "x": 2599,
                      "y": 4028
                    },
                    {
                      "x": 2471,
                      "y": 3878
                    }
                  ]
                },
                "confidence": 0.3291231,
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 2591,
                          "y": 3776
                        },
                        {
                          "x": 2719,
                          "y": 3926
                        },
                        {
                          "x": 2599,
                          "y": 4028
                        },
                        {
                          "x": 2471,
                          "y": 3878
                        }
                      ]
                    },
                    "confidence": 0.3291231,
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 2591,
                              "y": 3776
                            },
                            {
                              "x": 2719,
                              "y": 3926
                            },
                            {
                              "x": 2599,
                              "y": 4028
                            },
                            {
                              "x": 2471,
                              "y": 3878
                            }
                          ]
                        },
                        "confidence": 0.3291231,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          }
                        },
                        "text": "7"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "confidence": 0.3291231,
        "height": 4032,
        "width": 3024
      }
    ],
    "text": "7"
  },
  "imagePropertiesAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 126
            },
            {
              "x": 3023,
              "y": 126
            },
            {
              "x": 3023,
              "y": 3906
            },
            {
              "y": 3906
            }
          ]
        },
        "confidence": 0.5208333,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 504
            },
            {
              "x": 3023,
              "y": 504
            },
            {
              "x": 3023,
              "y": 3528
            },
            {
              "y": 3528
            }
          ]
        },
        "confidence": 0.625,
        "importanceFraction": 0.96
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 756
            },
            {
              "x": 3023,
              "y": 756
            },
            {
              "x": 3023,
              "y": 3276
            },
            {
              "y": 3276
            }
          ]
        },
        "confidence": 0.625,
        "importanceFraction": 0.8
      }
    ],
    "dominantColors": {
      "colors": [
        {
          "color": {
            "blue": 227,
            "green": 229,
            "red": 224
          },
          "hex": "E0E5E3",
          "percent": 32.82344682764663,
          "percentRounded": 33,
          "pixelFraction": 0.08920354,
          "rgb": "224, 229,\n 227",
          "score": 0.26027766
        },
        {
          "color": {
            "blue": 61,
            "green": 72,
            "red": 116
          },
          "hex": "74483D",
          "percent": 5.39736042635695,
          "percentRounded": 5,
          "pixelFraction": 0.07014749,
          "rgb": "116, 72,\n 61",
          "score": 0.04279905
        },
        {
          "color": {
            "blue": 46,
            "green": 50,
            "red": 61
          },
          "hex": "3D322E",
          "percent": 1.708779186218576,
          "percentRounded": 2,
          "pixelFraction": 0.02979351,
          "rgb": "61, 50,\n 46",
          "score": 0.01354998
        },
        {
          "color": {
            "blue": 201,
            "green": 202,
            "red": 198
          },
          "hex": "C6CAC9",
          "percent": 24.411414617421652,
          "percentRounded": 24,
          "pixelFraction": 0.057463128,
          "rgb": "198, 202,\n 201",
          "score": 0.19357339
        },
        {
          "color": {
            "blue": 150,
            "green": 156,
            "red": 166
          },
          "hex": "A69C96",
          "percent": 13.732825344016723,
          "percentRounded": 14,
          "pixelFraction": 0.047669616,
          "rgb": "166, 156,\n 150",
          "score": 0.10889617
        },
        {
          "color": {
            "blue": 136,
            "green": 152,
            "red": 168
          },
          "hex": "A89888",
          "percent": 5.236051685302164,
          "percentRounded": 5,
          "pixelFraction": 0.011091446,
          "rgb": "168, 152,\n 136",
          "score": 0.041519932
        },
        {
          "color": {
            "blue": 33,
            "green": 43,
            "red": 83
          },
          "hex": "532B21",
          "percent": 4.934696365909852,
          "percentRounded": 5,
          "pixelFraction": 0.15244837,
          "rgb": "83, 43,\n 33",
          "score": 0.039130297
        },
        {
          "color": {
            "blue": 116,
            "green": 120,
            "red": 126
          },
          "hex": "7E7874",
          "percent": 4.702847854838572,
          "percentRounded": 5,
          "pixelFraction": 0.02979351,
          "rgb": "126, 120,\n 116",
          "score": 0.037291825
        },
        {
          "color": {
            "blue": 96,
            "green": 110,
            "red": 153
          },
          "hex": "996E60",
          "percent": 3.6182963371206016,
          "percentRounded": 4,
          "pixelFraction": 0.01681416,
          "rgb": "153, 110,\n 96",
          "score": 0.028691737
        },
        {
          "color": {
            "blue": 100,
            "green": 118,
            "red": 135
          },
          "hex": "877664",
          "percent": 3.4342813551682623,
          "percentRounded": 3,
          "pixelFraction": 0.012448378,
          "rgb": "135, 118,\n 100",
          "score": 0.027232567
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "description": "Brown",
      "mid": "/m/09q2t",
      "score": 0.98046786,
      "topicality": 0.98046786
    },
    {
      "description": "Flower",
      "mid": "/m/0c9ph5",
      "score": 0.9589634,
      "topicality": 0.9589634
    },
    {
      "description": "Petal",
      "mid": "/m/016q19",
      "score": 0.88631517,
      "topicality": 0.88631517
    },
    {
      "description": "Twig",
      "mid": "/m/016nqt",
      "score": 0.87820274,
      "topicality": 0.87820274
    },
    {
      "description": "Branch",
      "mid": "/m/0b5gs",
      "score": 0.8686246,
      "topicality": 0.8686246
    },
    {
      "description": "Plant",
      "mid": "/m/05s2s",
      "score": 0.81790745,
      "topicality": 0.81790745
    },
    {
      "description": "Terrestrial plant",
      "mid": "/m/0fbflw",
      "score": 0.77358997,
      "topicality": 0.77358997
    },
    {
      "description": "Tints and shades",
      "mid": "/m/02q_bfg",
      "score": 0.766754,
      "topicality": 0.766754
    },
    {
      "description": "Flowering plant",
      "mid": "/m/04sjm",
      "score": 0.73971665,
      "topicality": 0.73971665
    },
    {
      "description": "Deciduous",
      "mid": "/m/0hlzt",
      "score": 0.7336052,
      "topicality": 0.7336052
    },
    {
      "description": "Blossom",
      "mid": "/m/0j7ty",
      "score": 0.7094654,
      "topicality": 0.7094654
    },
    {
      "description": "Sky",
      "mid": "/m/01bqvp",
      "score": 0.65813845,
      "topicality": 0.65813845
    },
    {
      "description": "Tree",
      "mid": "/m/07j7r",
      "score": 0.5966557,
      "topicality": 0.5966557
    },
    {
      "description": "Plant stem",
      "mid": "/m/01ttd6",
      "score": 0.57228595,
      "topicality": 0.57228595
    },
    {
      "description": "Prunus",
      "mid": "/m/0hs32",
      "score": 0.542756,
      "topicality": 0.542756
    },
    {
      "description": "Natural landscape",
      "mid": "/m/03d28y3",
      "score": 0.50587505,
      "topicality": 0.50587505
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.41904178,
            "y": 0.45809147
          },
          {
            "x": 0.63175887,
            "y": 0.45809147
          },
          {
            "x": 0.63175887,
            "y": 0.62802905
          },
          {
            "x": 0.41904178,
            "y": 0.62802905
          }
        ]
      },
      "mid": "/m/0c9ph5",
      "name": "Flower",
      "score": 0.9234783
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.08335799,
            "y": 0.73737925
          },
          {
            "x": 0.21434772,
            "y": 0.73737925
          },
          {
            "x": 0.21434772,
            "y": 0.83740664
          },
          {
            "x": 0.08335799,
            "y": 0.83740664
          }
        ]
      },
      "mid": "/m/0c9ph5",
      "name": "Flower",
      "score": 0.7205648
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.14978787,
            "y": 0.7398169
          },
          {
            "x": 0.28149664,
            "y": 0.7398169
          },
          {
            "x": 0.28149664,
            "y": 0.83514076
          },
          {
            "x": 0.14978787,
            "y": 0.83514076
          }
        ]
      },
      "mid": "/m/0c9ph5",
      "name": "Flower",
      "score": 0.62373364
    }
  ],
  "safeSearchAnnotation": {
    "adult": "VERY_UNLIKELY",
    "medical": "VERY_UNLIKELY",
    "racy": "VERY_UNLIKELY",
    "spoof": "VERY_UNLIKELY",
    "violence": "VERY_UNLIKELY"
  },
  "textAnnotations": [
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 2471,
            "y": 3776
          },
          {
            "x": 2718,
            "y": 3776
          },
          {
            "x": 2718,
            "y": 4028
          },
          {
            "x": 2471,
            "y": 4028
          }
        ]
      },
      "description": "7",
      "locale": "und"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 2591,
            "y": 3776
          },
          {
            "x": 2719,
            "y": 3926
          },
          {
            "x": 2599,
            "y": 4028
          },
          {
            "x": 2471,
            "y": 3878
          }
        ]
      },
      "description": "7"
    }
  ]
}

const visionApiFlwrsTwo = {
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 126
            },
            {
              "x": 3023,
              "y": 126
            },
            {
              "x": 3023,
              "y": 3906
            },
            {
              "y": 3906
            }
          ]
        },
        "confidence": 0.30104166,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 504
            },
            {
              "x": 3023,
              "y": 504
            },
            {
              "x": 3023,
              "y": 3528
            },
            {
              "y": 3528
            }
          ]
        },
        "confidence": 0.3763021,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 756
            },
            {
              "x": 3023,
              "y": 756
            },
            {
              "x": 3023,
              "y": 3276
            },
            {
              "y": 3276
            }
          ]
        },
        "confidence": 0.4515625,
        "importanceFraction": 1
      }
    ]
  },
  "imagePropertiesAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 126
            },
            {
              "x": 3023,
              "y": 126
            },
            {
              "x": 3023,
              "y": 3906
            },
            {
              "y": 3906
            }
          ]
        },
        "confidence": 0.30104166,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 504
            },
            {
              "x": 3023,
              "y": 504
            },
            {
              "x": 3023,
              "y": 3528
            },
            {
              "y": 3528
            }
          ]
        },
        "confidence": 0.3763021,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 756
            },
            {
              "x": 3023,
              "y": 756
            },
            {
              "x": 3023,
              "y": 3276
            },
            {
              "y": 3276
            }
          ]
        },
        "confidence": 0.4515625,
        "importanceFraction": 1
      }
    ],
    "dominantColors": {
      "colors": [
        {
          "color": {
            "blue": 161,
            "green": 153,
            "red": 187
          },
          "hex": "BB99A1",
          "percent": 25.811366328080414,
          "percentRounded": 26,
          "pixelFraction": 0.036165193,
          "rgb": "187, 153,\n 161",
          "score": 0.21361323
        },
        {
          "color": {
            "blue": 148,
            "green": 166,
            "red": 177
          },
          "hex": "B1A694",
          "percent": 11.978815859819516,
          "percentRounded": 12,
          "pixelFraction": 0.09946903,
          "rgb": "177, 166,\n 148",
          "score": 0.09913592
        },
        {
          "color": {
            "blue": 20,
            "green": 21,
            "red": 31
          },
          "hex": "1F1514",
          "percent": 7.3002839781317554,
          "percentRounded": 7,
          "pixelFraction": 0.16377582,
          "rgb": "31, 21,\n 20",
          "score": 0.060416687
        },
        {
          "color": {
            "blue": 55,
            "green": 80,
            "red": 94
          },
          "hex": "5E5037",
          "percent": 3.5914970856077906,
          "percentRounded": 4,
          "pixelFraction": 0.019528024,
          "rgb": "94, 80,\n 55",
          "score": 0.029723002
        },
        {
          "color": {
            "blue": 187,
            "green": 178,
            "red": 211
          },
          "hex": "D3B2BB",
          "percent": 19.998813306513327,
          "percentRounded": 20,
          "pixelFraction": 0.017935103,
          "rgb": "211, 178,\n 187",
          "score": 0.16550891
        },
        {
          "color": {
            "blue": 161,
            "green": 180,
            "red": 188
          },
          "hex": "BCB4A1",
          "percent": 8.246511991443434,
          "percentRounded": 8,
          "pixelFraction": 0.04843658,
          "rgb": "188, 180,\n 161",
          "score": 0.06824761
        },
        {
          "color": {
            "blue": 179,
            "green": 181,
            "red": 197
          },
          "hex": "C5B5B3",
          "percent": 6.548209338313499,
          "percentRounded": 7,
          "pixelFraction": 0.037050147,
          "rgb": "197, 181,\n 179",
          "score": 0.054192565
        },
        {
          "color": {
            "blue": 121,
            "green": 111,
            "red": 150
          },
          "hex": "966F79",
          "percent": 6.439631777988922,
          "percentRounded": 6,
          "pixelFraction": 0.016283186,
          "rgb": "150, 111,\n 121",
          "score": 0.053293984
        },
        {
          "color": {
            "blue": 156,
            "green": 159,
            "red": 175
          },
          "hex": "AF9F9C",
          "percent": 6.271668431290715,
          "percentRounded": 6,
          "pixelFraction": 0.06979351,
          "rgb": "175, 159,\n 156",
          "score": 0.05190393
        },
        {
          "color": {
            "blue": 82,
            "green": 74,
            "red": 113
          },
          "hex": "714A52",
          "percent": 3.8132019028106248,
          "percentRounded": 4,
          "pixelFraction": 0.011091446,
          "rgb": "113, 74,\n 82",
          "score": 0.031557817
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "description": "Flower",
      "mid": "/m/0c9ph5",
      "score": 0.9810604,
      "topicality": 0.9810604
    },
    {
      "description": "Twig",
      "mid": "/m/016nqt",
      "score": 0.8854759,
      "topicality": 0.8854759
    },
    {
      "description": "Branch",
      "mid": "/m/0b5gs",
      "score": 0.88464075,
      "topicality": 0.88464075
    },
    {
      "description": "Petal",
      "mid": "/m/016q19",
      "score": 0.8750615,
      "topicality": 0.8750615
    },
    {
      "description": "Pink",
      "mid": "/m/01fklc",
      "score": 0.829448,
      "topicality": 0.829448
    },
    {
      "description": "Flowering plant",
      "mid": "/m/04sjm",
      "score": 0.7346792,
      "topicality": 0.7346792
    },
    {
      "description": "Terrestrial plant",
      "mid": "/m/0fbflw",
      "score": 0.71492136,
      "topicality": 0.71492136
    },
    {
      "description": "Blossom",
      "mid": "/m/0j7ty",
      "score": 0.6891069,
      "topicality": 0.6891069
    },
    {
      "description": "Tree",
      "mid": "/m/07j7r",
      "score": 0.68587095,
      "topicality": 0.68587095
    },
    {
      "description": "Trunk",
      "mid": "/m/02tcwp",
      "score": 0.67052245,
      "topicality": 0.67052245
    },
    {
      "description": "Cherry blossom",
      "mid": "/m/01wh_8",
      "score": 0.6391172,
      "topicality": 0.6391172
    },
    {
      "description": "Plant stem",
      "mid": "/m/01ttd6",
      "score": 0.6106247,
      "topicality": 0.6106247
    },
    {
      "description": "Prunus",
      "mid": "/m/0hs32",
      "score": 0.53275156,
      "topicality": 0.53275156
    },
    {
      "description": "Plant",
      "mid": "/m/05s2s",
      "score": 0.5252944,
      "topicality": 0.5252944
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.42660382,
            "y": 0.284652
          },
          {
            "x": 0.6809036,
            "y": 0.284652
          },
          {
            "x": 0.6809036,
            "y": 0.45669797
          },
          {
            "x": 0.42660382,
            "y": 0.45669797
          }
        ]
      },
      "mid": "/m/0c9ph5",
      "name": "Flower",
      "score": 0.70457447
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.3890177,
            "y": 0.46891275
          },
          {
            "x": 0.66626495,
            "y": 0.46891275
          },
          {
            "x": 0.66626495,
            "y": 0.68984944
          },
          {
            "x": 0.3890177,
            "y": 0.68984944
          }
        ]
      },
      "mid": "/m/0c9ph5",
      "name": "Flower",
      "score": 0.5813672
    }
  ],
  "safeSearchAnnotation": {
    "adult": "VERY_UNLIKELY",
    "medical": "VERY_UNLIKELY",
    "racy": "UNLIKELY",
    "spoof": "VERY_UNLIKELY",
    "violence": "UNLIKELY"
  }
}

const visionApiFlwrsThree = {
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 126
            },
            {
              "x": 3023,
              "y": 126
            },
            {
              "x": 3023,
              "y": 3906
            },
            {
              "y": 3906
            }
          ]
        },
        "confidence": 0.234375,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 504
            },
            {
              "x": 3023,
              "y": 504
            },
            {
              "x": 3023,
              "y": 3528
            },
            {
              "y": 3528
            }
          ]
        },
        "confidence": 0.29296875,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 756
            },
            {
              "x": 3023,
              "y": 756
            },
            {
              "x": 3023,
              "y": 3276
            },
            {
              "y": 3276
            }
          ]
        },
        "confidence": 0.3515625,
        "importanceFraction": 1
      }
    ]
  },
  "imagePropertiesAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 126
            },
            {
              "x": 3023,
              "y": 126
            },
            {
              "x": 3023,
              "y": 3906
            },
            {
              "y": 3906
            }
          ]
        },
        "confidence": 0.234375,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 504
            },
            {
              "x": 3023,
              "y": 504
            },
            {
              "x": 3023,
              "y": 3528
            },
            {
              "y": 3528
            }
          ]
        },
        "confidence": 0.29296875,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 756
            },
            {
              "x": 3023,
              "y": 756
            },
            {
              "x": 3023,
              "y": 3276
            },
            {
              "y": 3276
            }
          ]
        },
        "confidence": 0.3515625,
        "importanceFraction": 1
      }
    ],
    "dominantColors": {
      "colors": [
        {
          "color": {
            "blue": 151,
            "green": 109,
            "red": 131
          },
          "hex": "836D97",
          "percent": 21.518417866086576,
          "percentRounded": 22,
          "pixelFraction": 0.0147492625,
          "rgb": "131, 109,\n 151",
          "score": 0.16009845
        },
        {
          "color": {
            "blue": 239,
            "green": 243,
            "red": 243
          },
          "hex": "F3F3EF",
          "percent": 17.324366384253224,
          "percentRounded": 17,
          "pixelFraction": 0.09852508,
          "rgb": "243, 243,\n 239",
          "score": 0.12889443
        },
        {
          "color": {
            "blue": 57,
            "green": 82,
            "red": 84
          },
          "hex": "545239",
          "percent": 10.027656421178756,
          "percentRounded": 10,
          "pixelFraction": 0.18973452,
          "rgb": "84, 82,\n 57",
          "score": 0.074606426
        },
        {
          "color": {
            "blue": 141,
            "green": 72,
            "red": 105
          },
          "hex": "69488D",
          "percent": 7.096354214619311,
          "percentRounded": 7,
          "pixelFraction": 0.003480826,
          "rgb": "105, 72,\n 141",
          "score": 0.052797344
        },
        {
          "color": {
            "blue": 114,
            "green": 77,
            "red": 98
          },
          "hex": "624D72",
          "percent": 11.80399737419535,
          "percentRounded": 12,
          "pixelFraction": 0.019764012,
          "rgb": "98, 77,\n 114",
          "score": 0.08782252
        },
        {
          "color": {
            "blue": 164,
            "green": 104,
            "red": 130
          },
          "hex": "8268A4",
          "percent": 9.378811911728675,
          "percentRounded": 9,
          "pixelFraction": 0.0031268436,
          "rgb": "130, 104,\n 164",
          "score": 0.06977898
        },
        {
          "color": {
            "blue": 171,
            "green": 100,
            "red": 132
          },
          "hex": "8464AB",
          "percent": 6.651124833295162,
          "percentRounded": 7,
          "pixelFraction": 0.0015929204,
          "rgb": "132, 100,\n 171",
          "score": 0.049484808
        },
        {
          "color": {
            "blue": 190,
            "green": 196,
            "red": 196
          },
          "hex": "C4C4BE",
          "percent": 6.352091466112846,
          "percentRounded": 6,
          "pixelFraction": 0.059882008,
          "rgb": "196, 196,\n 190",
          "score": 0.04725998
        },
        {
          "color": {
            "blue": 179,
            "green": 138,
            "red": 160
          },
          "hex": "A08AB3",
          "percent": 5.173824505460975,
          "percentRounded": 5,
          "pixelFraction": 0.0027138642,
          "rgb": "160, 138,\n 179",
          "score": 0.038493596
        },
        {
          "color": {
            "blue": 35,
            "green": 60,
            "red": 60
          },
          "hex": "3C3C23",
          "percent": 4.6733550230691225,
          "percentRounded": 5,
          "pixelFraction": 0.21138643,
          "rgb": "60, 60,\n 35",
          "score": 0.03477007
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "description": "Flower",
      "mid": "/m/0c9ph5",
      "score": 0.97227794,
      "topicality": 0.97227794
    },
    {
      "description": "Plant",
      "mid": "/m/05s2s",
      "score": 0.9561831,
      "topicality": 0.9561831
    },
    {
      "description": "Purple",
      "mid": "/m/09ggk",
      "score": 0.89431137,
      "topicality": 0.89431137
    },
    {
      "description": "Petal",
      "mid": "/m/016q19",
      "score": 0.88592374,
      "topicality": 0.88592374
    },
    {
      "description": "Tree",
      "mid": "/m/07j7r",
      "score": 0.8476719,
      "topicality": 0.8476719
    },
    {
      "description": "Sky",
      "mid": "/m/01bqvp",
      "score": 0.8232099,
      "topicality": 0.8232099
    },
    {
      "description": "Herbaceous plant",
      "mid": "/m/01j03x",
      "score": 0.8026451,
      "topicality": 0.8026451
    },
    {
      "description": "Groundcover",
      "mid": "/m/018ssc",
      "score": 0.7847323,
      "topicality": 0.7847323
    },
    {
      "description": "Grass",
      "mid": "/m/08t9c_",
      "score": 0.77905554,
      "topicality": 0.77905554
    },
    {
      "description": "Shrub",
      "mid": "/m/0gqbt",
      "score": 0.75687385,
      "topicality": 0.75687385
    },
    {
      "description": "Flowering plant",
      "mid": "/m/04sjm",
      "score": 0.7267843,
      "topicality": 0.7267843
    },
    {
      "description": "Annual plant",
      "mid": "/m/0jqb",
      "score": 0.71247387,
      "topicality": 0.71247387
    },
    {
      "description": "Wood",
      "mid": "/m/083vt",
      "score": 0.7050736,
      "topicality": 0.7050736
    },
    {
      "description": "Subshrub",
      "mid": "/m/03j2zx",
      "score": 0.69754815,
      "topicality": 0.69754815
    },
    {
      "description": "Forb",
      "mid": "/m/02xsh_",
      "score": 0.67212,
      "topicality": 0.67212
    },
    {
      "description": "Twig",
      "mid": "/m/016nqt",
      "score": 0.60658234,
      "topicality": 0.60658234
    },
    {
      "description": "Garden",
      "mid": "/m/0bl0l",
      "score": 0.5954837,
      "topicality": 0.5954837
    },
    {
      "description": "Prairie",
      "mid": "/m/0hkvx",
      "score": 0.5900786,
      "topicality": 0.5900786
    },
    {
      "description": "Camas",
      "mid": "/m/03k3y1",
      "score": 0.58876795,
      "topicality": 0.58876795
    },
    {
      "description": "Perennial plant",
      "mid": "/m/036p57",
      "score": 0.5838131,
      "topicality": 0.5838131
    },
    {
      "description": "Plant stem",
      "mid": "/m/01ttd6",
      "score": 0.5816979,
      "topicality": 0.5816979
    },
    {
      "description": "Herb",
      "mid": "/m/03gq1",
      "score": 0.5615262,
      "topicality": 0.5615262
    },
    {
      "description": "Wildflower",
      "mid": "/m/03f35r",
      "score": 0.55371875,
      "topicality": 0.55371875
    },
    {
      "description": "Agapanthus",
      "mid": "/m/0207lr",
      "score": 0.53593445,
      "topicality": 0.53593445
    },
    {
      "description": "Bellflower family",
      "mid": "/m/03h6l4",
      "score": 0.52572525,
      "topicality": 0.52572525
    },
    {
      "description": "Daisy family",
      "mid": "/m/0l5r",
      "score": 0.51337206,
      "topicality": 0.51337206
    },
    {
      "description": "Woodland",
      "mid": "/m/0hnc1",
      "score": 0.511477,
      "topicality": 0.511477
    },
    {
      "description": "Gentian family",
      "mid": "/m/03rm05",
      "score": 0.50471777,
      "topicality": 0.50471777
    },
    {
      "description": "Lobelia",
      "mid": "/m/027nwv",
      "score": 0.5039425,
      "topicality": 0.5039425
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.29311278,
            "y": 0.5999896
          },
          {
            "x": 0.6767704,
            "y": 0.5999896
          },
          {
            "x": 0.6767704,
            "y": 0.8061642
          },
          {
            "x": 0.29311278,
            "y": 0.8061642
          }
        ]
      },
      "mid": "/m/0c9ph5",
      "name": "Flower",
      "score": 0.75360775
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.32126874,
            "y": 0.4493923
          },
          {
            "x": 0.688443,
            "y": 0.4493923
          },
          {
            "x": 0.688443,
            "y": 0.590844
          },
          {
            "x": 0.32126874,
            "y": 0.590844
          }
        ]
      },
      "mid": "/m/0c9ph5",
      "name": "Flower",
      "score": 0.6967908
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.7963047,
            "y": 0.45263025
          },
          {
            "x": 0.9973958,
            "y": 0.45263025
          },
          {
            "x": 0.9973958,
            "y": 0.5548238
          },
          {
            "x": 0.7963047,
            "y": 0.5548238
          }
        ]
      },
      "mid": "/m/0c9ph5",
      "name": "Flower",
      "score": 0.6508165
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.5475625,
            "y": 0.8400388
          },
          {
            "x": 0.6875679,
            "y": 0.8400388
          },
          {
            "x": 0.6875679,
            "y": 0.933147
          },
          {
            "x": 0.5475625,
            "y": 0.933147
          }
        ]
      },
      "mid": "/m/0c9ph5",
      "name": "Flower",
      "score": 0.5944269
    }
  ],
  "safeSearchAnnotation": {
    "adult": "VERY_UNLIKELY",
    "medical": "VERY_UNLIKELY",
    "racy": "VERY_UNLIKELY",
    "spoof": "VERY_UNLIKELY",
    "violence": "VERY_UNLIKELY"
  }
}

const flowersOnePhoto = {
  id: 'VcuKaNff',
  src: flwrsOneImg,
  squareSrc: flwrsOneSquareImg,
  alt: 'flowers1',
  vision: JSON.stringify(visionApiFlwrsOne),
  width: 3024,
  height: 4032,
}

const flowersTwoPhoto = {
  id: 'jBugBCht',
  src: flwrsTwoImg,
  alt: 'flowers2',
  vision: JSON.stringify(visionApiFlwrsTwo),
  width: 3024,
  height: 4032,
}

const flowersThreePhoto = {
  id: 'kKHLSSzQ',
  src: flwrsThreeImg,
  alt: 'flowers3',
  vision: JSON.stringify(visionApiFlwrsThree),
  width: 3024,
  height: 4032,
}

export const flowersPost = {
  id: 'LismmfBb',
  photos: [flowersOnePhoto, flowersTwoPhoto, flowersThreePhoto],
  description: 'Flowers',
  postedDate: '2021-01-18T08:00:00.000+00:00',
  likes: 12345,
  location: '',
  tags: ['flower']
}
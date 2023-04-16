import pixelImg from '../images/pixel.webp';
import pixelSquareImg from '../images/pixel-square.webp';

const visionApi = {
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 740
            },
            {
              "x": 2963
            },
            {
              "x": 2963,
              "y": 2777
            },
            {
              "x": 740,
              "y": 2777
            }
          ]
        },
        "confidence": 0.36328125,
        "importanceFraction": 0.9789474
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 463
            },
            {
              "x": 3241
            },
            {
              "x": 3241,
              "y": 2777
            },
            {
              "x": 463,
              "y": 2777
            }
          ]
        },
        "confidence": 0.296875,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 185
            },
            {
              "x": 3518
            },
            {
              "x": 3518,
              "y": 2777
            },
            {
              "x": 185,
              "y": 2777
            }
          ]
        },
        "confidence": 0.24739581,
        "importanceFraction": 1
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
                  "x": 735,
                  "y": 1447
                },
                {
                  "x": 2810,
                  "y": 1447
                },
                {
                  "x": 2810,
                  "y": 1817
                },
                {
                  "x": 735,
                  "y": 1817
                }
              ]
            },
            "confidence": 0.9862485,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 735,
                      "y": 1447
                    },
                    {
                      "x": 2810,
                      "y": 1447
                    },
                    {
                      "x": 2810,
                      "y": 1817
                    },
                    {
                      "x": 735,
                      "y": 1817
                    }
                  ]
                },
                "confidence": 0.9862485,
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 735,
                          "y": 1447
                        },
                        {
                          "x": 2810,
                          "y": 1447
                        },
                        {
                          "x": 2810,
                          "y": 1817
                        },
                        {
                          "x": 735,
                          "y": 1817
                        }
                      ]
                    },
                    "confidence": 0.9862485,
                    "property": {
                      "detectedLanguages": [
                        {
                          "confidence": 1,
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 735,
                              "y": 1447
                            },
                            {
                              "x": 980,
                              "y": 1447
                            },
                            {
                              "x": 980,
                              "y": 1817
                            },
                            {
                              "x": 735,
                              "y": 1817
                            }
                          ]
                        },
                        "confidence": 0.95488113,
                        "text": "#"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 992,
                              "y": 1447
                            },
                            {
                              "x": 1156,
                              "y": 1447
                            },
                            {
                              "x": 1156,
                              "y": 1817
                            },
                            {
                              "x": 992,
                              "y": 1817
                            }
                          ]
                        },
                        "confidence": 0.9846947,
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 1158,
                              "y": 1447
                            },
                            {
                              "x": 1366,
                              "y": 1447
                            },
                            {
                              "x": 1366,
                              "y": 1817
                            },
                            {
                              "x": 1158,
                              "y": 1817
                            }
                          ]
                        },
                        "confidence": 0.9947826,
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 1379,
                              "y": 1447
                            },
                            {
                              "x": 1579,
                              "y": 1447
                            },
                            {
                              "x": 1579,
                              "y": 1817
                            },
                            {
                              "x": 1379,
                              "y": 1817
                            }
                          ]
                        },
                        "confidence": 0.99271786,
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 1608,
                              "y": 1447
                            },
                            {
                              "x": 1912,
                              "y": 1447
                            },
                            {
                              "x": 1912,
                              "y": 1817
                            },
                            {
                              "x": 1608,
                              "y": 1817
                            }
                          ]
                        },
                        "confidence": 0.99370986,
                        "text": "m"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 1968,
                              "y": 1447
                            },
                            {
                              "x": 2173,
                              "y": 1447
                            },
                            {
                              "x": 2173,
                              "y": 1817
                            },
                            {
                              "x": 1968,
                              "y": 1817
                            }
                          ]
                        },
                        "confidence": 0.99432266,
                        "text": "p"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 2203,
                              "y": 1447
                            },
                            {
                              "x": 2280,
                              "y": 1447
                            },
                            {
                              "x": 2280,
                              "y": 1817
                            },
                            {
                              "x": 2203,
                              "y": 1817
                            }
                          ]
                        },
                        "confidence": 0.99181134,
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 2278,
                              "y": 1447
                            },
                            {
                              "x": 2474,
                              "y": 1447
                            },
                            {
                              "x": 2474,
                              "y": 1817
                            },
                            {
                              "x": 2278,
                              "y": 1817
                            }
                          ]
                        },
                        "confidence": 0.9914236,
                        "text": "x"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 2492,
                              "y": 1447
                            },
                            {
                              "x": 2700,
                              "y": 1447
                            },
                            {
                              "x": 2700,
                              "y": 1817
                            },
                            {
                              "x": 2492,
                              "y": 1817
                            }
                          ]
                        },
                        "confidence": 0.9935321,
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 2725,
                              "y": 1447
                            },
                            {
                              "x": 2810,
                              "y": 1447
                            },
                            {
                              "x": 2810,
                              "y": 1817
                            },
                            {
                              "x": 2725,
                              "y": 1817
                            }
                          ]
                        },
                        "confidence": 0.9706088,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          }
                        },
                        "text": "l"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "confidence": 0.9862485,
        "height": 2778,
        "property": {
          "detectedLanguages": [
            {
              "confidence": 1,
              "languageCode": "en"
            }
          ]
        },
        "width": 3704
      }
    ],
    "text": "#teampixel"
  },
  "imagePropertiesAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 740
            },
            {
              "x": 2963
            },
            {
              "x": 2963,
              "y": 2777
            },
            {
              "x": 740,
              "y": 2777
            }
          ]
        },
        "confidence": 0.36328125,
        "importanceFraction": 0.9789474
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 463
            },
            {
              "x": 3241
            },
            {
              "x": 3241,
              "y": 2777
            },
            {
              "x": 463,
              "y": 2777
            }
          ]
        },
        "confidence": 0.296875,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 185
            },
            {
              "x": 3518
            },
            {
              "x": 3518,
              "y": 2777
            },
            {
              "x": 185,
              "y": 2777
            }
          ]
        },
        "confidence": 0.24739581,
        "importanceFraction": 1
      }
    ],
    "dominantColors": {
      "colors": [
        {
          "color": {
            "blue": 57,
            "green": 57,
            "red": 57
          },
          "hex": "393939",
          "percent": 60.400940187242924,
          "percentRounded": 60,
          "pixelFraction": 0.35156342,
          "rgb": "57, 57,\n 57",
          "score": 0.6040094
        },
        {
          "color": {
            "blue": 237,
            "green": 237,
            "red": 237
          },
          "hex": "EDEDED",
          "percent": 21.18630606567755,
          "percentRounded": 21,
          "pixelFraction": 0.30548674,
          "rgb": "237, 237,\n 237",
          "score": 0.21186306
        },
        {
          "color": {
            "blue": 198,
            "green": 198,
            "red": 198
          },
          "hex": "C6C6C6",
          "percent": 8.192193025395799,
          "percentRounded": 8,
          "pixelFraction": 0.2340413,
          "rgb": "198, 198,\n 198",
          "score": 0.08192193
        },
        {
          "color": {
            "blue": 75,
            "green": 75,
            "red": 75
          },
          "hex": "4B4B4B",
          "percent": 5.284672616382484,
          "percentRounded": 5,
          "pixelFraction": 0.02418879,
          "rgb": "75, 75,\n 75",
          "score": 0.052846726
        },
        {
          "color": {
            "blue": 152,
            "green": 152,
            "red": 152
          },
          "hex": "989898",
          "percent": 3.184400509871642,
          "percentRounded": 3,
          "pixelFraction": 0.03297935,
          "rgb": "152, 152,\n 152",
          "score": 0.031844005
        },
        {
          "color": {
            "blue": 119,
            "green": 119,
            "red": 119
          },
          "hex": "777777",
          "percent": 1.6206628050240548,
          "percentRounded": 2,
          "pixelFraction": 0.016637169,
          "rgb": "119, 119,\n 119",
          "score": 0.016206628
        },
        {
          "color": {
            "blue": 33,
            "green": 33,
            "red": 33
          },
          "hex": "212121",
          "percent": 0.13082479040555686,
          "percentRounded": 0,
          "pixelFraction": 0.035103247,
          "rgb": "33, 33,\n 33",
          "score": 0.0013082479
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "description": "Granny smith",
      "mid": "/m/01_12b",
      "score": 0.8751253,
      "topicality": 0.8751253
    },
    {
      "description": "Computer",
      "mid": "/m/01m3v",
      "score": 0.8640066,
      "topicality": 0.8640066
    },
    {
      "description": "Gadget",
      "mid": "/m/02mf1n",
      "score": 0.8443552,
      "topicality": 0.8443552
    },
    {
      "description": "Font",
      "mid": "/m/03gq5hm",
      "score": 0.80528724,
      "topicality": 0.80528724
    },
    {
      "description": "Personal computer",
      "mid": "/m/0643t",
      "score": 0.77399135,
      "topicality": 0.77399135
    },
    {
      "description": "Cloud",
      "mid": "/m/0csby",
      "score": 0.77396685,
      "topicality": 0.77396685
    },
    {
      "description": "Rectangle",
      "mid": "/m/0j62f",
      "score": 0.7445669,
      "topicality": 0.7445669
    },
    {
      "description": "Output device",
      "mid": "/m/044_87",
      "score": 0.73538285,
      "topicality": 0.73538285
    },
    {
      "description": "Technology",
      "mid": "/m/07c1v",
      "score": 0.7343038,
      "topicality": 0.7343038
    },
    {
      "description": "Electronic device",
      "mid": "/m/0bs7_0t",
      "score": 0.73220885,
      "topicality": 0.73220885
    },
    {
      "description": "Display device",
      "mid": "/m/029zz6",
      "score": 0.68832004,
      "topicality": 0.68832004
    },
    {
      "description": "Brand",
      "mid": "/m/01cd9",
      "score": 0.6739711,
      "topicality": 0.6739711
    },
    {
      "description": "Graphics",
      "mid": "/m/021sdg",
      "score": 0.6656206,
      "topicality": 0.6656206
    },
    {
      "description": "Logo",
      "mid": "/m/0dwx7",
      "score": 0.6328177,
      "topicality": 0.6328177
    },
    {
      "description": "Apple",
      "mid": "/m/014j1m",
      "score": 0.6280021,
      "topicality": 0.6280021
    },
    {
      "description": "Multimedia",
      "mid": "/m/0541p",
      "score": 0.62144226,
      "topicality": 0.62144226
    },
    {
      "description": "Monochrome photography",
      "mid": "/m/03d49p1",
      "score": 0.6151959,
      "topicality": 0.6151959
    },
    {
      "description": "Signage",
      "mid": "/m/0bkqqh",
      "score": 0.6112712,
      "topicality": 0.6112712
    },
    {
      "description": "Art",
      "mid": "/m/0jjw",
      "score": 0.60041845,
      "topicality": 0.60041845
    },
    {
      "description": "Room",
      "mid": "/m/06ht1",
      "score": 0.5972673,
      "topicality": 0.5972673
    },
    {
      "description": "Malus",
      "mid": "/m/01qd72",
      "score": 0.5613105,
      "topicality": 0.5613105
    },
    {
      "description": "Darkness",
      "mid": "/m/01kyr8",
      "score": 0.55443686,
      "topicality": 0.55443686
    },
    {
      "description": "Monochrome",
      "mid": "/m/01mwkf",
      "score": 0.5432037,
      "topicality": 0.5432037
    },
    {
      "description": "Still life photography",
      "mid": "/m/027_ny3",
      "score": 0.5392126,
      "topicality": 0.5392126
    },
    {
      "description": "Graphic design",
      "mid": "/m/03c31",
      "score": 0.5319308,
      "topicality": 0.5319308
    },
    {
      "description": "Computer icon",
      "mid": "/m/01zrkr",
      "score": 0.53082424,
      "topicality": 0.53082424
    },
    {
      "description": "Cumulus",
      "mid": "/m/0csh5",
      "score": 0.50481814,
      "topicality": 0.50481814
    },
    {
      "description": "Fruit",
      "mid": "/m/02xwb",
      "score": 0.50260854,
      "topicality": 0.50260854
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.11785233,
            "y": 0.38941053
          },
          {
            "x": 0.9093199,
            "y": 0.38941053
          },
          {
            "x": 0.9093199,
            "y": 0.99739575
          },
          {
            "x": 0.11785233,
            "y": 0.99739575
          }
        ]
      },
      "mid": "/j/5qg9b8",
      "name": "Packaged goods",
      "score": 0.56970006
    }
  ],
  "logoAnnotations": [
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 1595,
            "y": 232
          },
          {
            "x": 2231,
            "y": 232
          },
          {
            "x": 2231,
            "y": 966
          },
          {
            "x": 1595,
            "y": 966
          }
        ]
      },
      "description": "MacBook",
      "mid": "/m/09tzjm",
      "score": 0.8501686
    }
  ],
  "safeSearchAnnotation": {
    "adult": "VERY_UNLIKELY",
    "medical": "UNLIKELY",
    "racy": "VERY_UNLIKELY",
    "spoof": "VERY_UNLIKELY",
    "violence": "UNLIKELY"
  },
  "textAnnotations": [
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 735,
            "y": 1447
          },
          {
            "x": 2810,
            "y": 1447
          },
          {
            "x": 2810,
            "y": 1817
          },
          {
            "x": 735,
            "y": 1817
          }
        ]
      },
      "description": "#teampixel",
      "locale": "en"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 735,
            "y": 1447
          },
          {
            "x": 2810,
            "y": 1447
          },
          {
            "x": 2810,
            "y": 1817
          },
          {
            "x": 735,
            "y": 1817
          }
        ]
      },
      "description": "#teampixel"
    }
  ]
}

const photo = {
  id: 'bbb023',
  src: pixelImg,
  squareSrc: pixelSquareImg,
  alt: 'Google vs Apple',
  vision: JSON.stringify(visionApi),
  width: 3704,
  height: 2778,
}

export const pixelPost = {
  id: 'aaa020',
  photos: [photo],
  description: 'Google vs Apple',
  postedDate: '2020-08-01T08:00:00.000+00:00',
  likes: 100,
  location: '',
  tags: ['cloud', 'grannysmith', 'computer']
}
import bridgeBirdImg from '../images/bridge-bird.webp'
import bridgeBirdSquareImg from '../images/bridge-bird-square.webp'

const visionApi = {
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 450
            },
            {
              "x": 2250
            },
            {
              "x": 2250,
              "y": 2249
            },
            {
              "x": 450,
              "y": 2249
            }
          ]
        },
        "confidence": 0.4394531,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 375
            },
            {
              "x": 2625
            },
            {
              "x": 2625,
              "y": 2249
            },
            {
              "x": 375,
              "y": 2249
            }
          ]
        },
        "confidence": 0.3515625,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 150
            },
            {
              "x": 2850
            },
            {
              "x": 2850,
              "y": 2249
            },
            {
              "x": 150,
              "y": 2249
            }
          ]
        },
        "confidence": 0.29296875,
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
                  "x": 830,
                  "y": 1500
                },
                {
                  "x": 749,
                  "y": 1502
                },
                {
                  "x": 749,
                  "y": 1492
                },
                {
                  "x": 830,
                  "y": 1490
                }
              ]
            },
            "confidence": 0.28691798,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 830,
                      "y": 1500
                    },
                    {
                      "x": 749,
                      "y": 1502
                    },
                    {
                      "x": 749,
                      "y": 1492
                    },
                    {
                      "x": 830,
                      "y": 1490
                    }
                  ]
                },
                "confidence": 0.28691798,
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 830,
                          "y": 1500
                        },
                        {
                          "x": 749,
                          "y": 1502
                        },
                        {
                          "x": 749,
                          "y": 1492
                        },
                        {
                          "x": 830,
                          "y": 1490
                        }
                      ]
                    },
                    "confidence": 0.28691798,
                    "property": {
                      "detectedLanguages": [
                        {
                          "confidence": 1,
                          "languageCode": "az"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 830,
                              "y": 1500
                            },
                            {
                              "x": 822,
                              "y": 1500
                            },
                            {
                              "x": 822,
                              "y": 1491
                            },
                            {
                              "x": 830,
                              "y": 1491
                            }
                          ]
                        },
                        "confidence": 0.2701619,
                        "text": "A"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 821,
                              "y": 1500
                            },
                            {
                              "x": 812,
                              "y": 1500
                            },
                            {
                              "x": 812,
                              "y": 1491
                            },
                            {
                              "x": 821,
                              "y": 1491
                            }
                          ]
                        },
                        "confidence": 0.25729364,
                        "text": "P"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 804,
                              "y": 1500
                            },
                            {
                              "x": 796,
                              "y": 1500
                            },
                            {
                              "x": 796,
                              "y": 1491
                            },
                            {
                              "x": 804,
                              "y": 1491
                            }
                          ]
                        },
                        "confidence": 0.28274262,
                        "text": "A"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 790,
                              "y": 1500
                            },
                            {
                              "x": 782,
                              "y": 1500
                            },
                            {
                              "x": 782,
                              "y": 1491
                            },
                            {
                              "x": 790,
                              "y": 1491
                            }
                          ]
                        },
                        "confidence": 0.25384024,
                        "text": "R"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 774,
                              "y": 1501
                            },
                            {
                              "x": 765,
                              "y": 1501
                            },
                            {
                              "x": 765,
                              "y": 1492
                            },
                            {
                              "x": 774,
                              "y": 1492
                            }
                          ]
                        },
                        "confidence": 0.30649003,
                        "text": "A"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 759,
                              "y": 1501
                            },
                            {
                              "x": 749,
                              "y": 1501
                            },
                            {
                              "x": 749,
                              "y": 1492
                            },
                            {
                              "x": 759,
                              "y": 1492
                            }
                          ]
                        },
                        "confidence": 0.35097945,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          }
                        },
                        "text": "N"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "confidence": 0.28691798,
        "height": 2250,
        "property": {
          "detectedLanguages": [
            {
              "confidence": 1,
              "languageCode": "az"
            }
          ]
        },
        "width": 3000
      }
    ],
    "text": "APARAN"
  },
  "imagePropertiesAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 450
            },
            {
              "x": 2250
            },
            {
              "x": 2250,
              "y": 2249
            },
            {
              "x": 450,
              "y": 2249
            }
          ]
        },
        "confidence": 0.4394531,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 375
            },
            {
              "x": 2625
            },
            {
              "x": 2625,
              "y": 2249
            },
            {
              "x": 375,
              "y": 2249
            }
          ]
        },
        "confidence": 0.3515625,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 150
            },
            {
              "x": 2850
            },
            {
              "x": 2850,
              "y": 2249
            },
            {
              "x": 150,
              "y": 2249
            }
          ]
        },
        "confidence": 0.29296875,
        "importanceFraction": 1
      }
    ],
    "dominantColors": {
      "colors": [
        {
          "color": {
            "blue": 240,
            "green": 199,
            "red": 172
          },
          "hex": "ACC7F0",
          "percent": 38.29227738185884,
          "percentRounded": 38,
          "pixelFraction": 0.21539824,
          "rgb": "172, 199,\n 240",
          "score": 0.3790408
        },
        {
          "color": {
            "blue": 39,
            "green": 21,
            "red": 14
          },
          "hex": "0E1527",
          "percent": 2.8955893493439544,
          "percentRounded": 3,
          "pixelFraction": 0.012625368,
          "rgb": "14, 21,\n 39",
          "score": 0.028662346
        },
        {
          "color": {
            "blue": 247,
            "green": 193,
            "red": 159
          },
          "hex": "9FC1F7",
          "percent": 36.30810029856942,
          "percentRounded": 36,
          "pixelFraction": 0.30713865,
          "rgb": "159, 193,\n 247",
          "score": 0.35940018
        },
        {
          "color": {
            "blue": 195,
            "green": 161,
            "red": 135
          },
          "hex": "87A1C3",
          "percent": 8.992755268754799,
          "percentRounded": 9,
          "pixelFraction": 0.14466077,
          "rgb": "135, 161,\n 195",
          "score": 0.08901589
        },
        {
          "color": {
            "blue": 227,
            "green": 171,
            "red": 138
          },
          "hex": "8AABE3",
          "percent": 4.239347023328359,
          "percentRounded": 4,
          "pixelFraction": 0.12359882,
          "rgb": "138, 171,\n 227",
          "score": 0.041963696
        },
        {
          "color": {
            "blue": 153,
            "green": 122,
            "red": 100
          },
          "hex": "647A99",
          "percent": 3.7223098316061263,
          "percentRounded": 4,
          "pixelFraction": 0.039056048,
          "rgb": "100, 122,\n 153",
          "score": 0.03684574
        },
        {
          "color": {
            "blue": 111,
            "green": 86,
            "red": 71
          },
          "hex": "47566F",
          "percent": 2.2313999660805335,
          "percentRounded": 2,
          "pixelFraction": 0.025663717,
          "rgb": "71, 86,\n 111",
          "score": 0.022087786
        },
        {
          "color": {
            "blue": 72,
            "green": 50,
            "red": 38
          },
          "hex": "263248",
          "percent": 1.5370830576190453,
          "percentRounded": 2,
          "pixelFraction": 0.011858407,
          "rgb": "38, 50,\n 72",
          "score": 0.015215005
        },
        {
          "color": {
            "blue": 24,
            "green": 16,
            "red": 11
          },
          "hex": "0B1018",
          "percent": 1.3477429759636033,
          "percentRounded": 1,
          "pixelFraction": 0.009793511,
          "rgb": "11, 16,\n 24",
          "score": 0.013340799
        },
        {
          "color": {
            "blue": 171,
            "green": 126,
            "red": 99
          },
          "hex": "637EAB",
          "percent": 0.43339484687533103,
          "percentRounded": 0,
          "pixelFraction": 0.00088495575,
          "rgb": "99, 126,\n 171",
          "score": 0.004290012
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "description": "Sky",
      "mid": "/m/01bqvp",
      "score": 0.9728962,
      "topicality": 0.9728962
    },
    {
      "description": "Water",
      "mid": "/m/0838f",
      "score": 0.97238916,
      "topicality": 0.97238916
    },
    {
      "description": "Bird",
      "mid": "/m/015p6",
      "score": 0.9558107,
      "topicality": 0.9558107
    },
    {
      "description": "Cloud",
      "mid": "/m/0csby",
      "score": 0.8735916,
      "topicality": 0.8735916
    },
    {
      "description": "Beak",
      "mid": "/m/01c4rd",
      "score": 0.85033685,
      "topicality": 0.85033685
    },
    {
      "description": "Fence",
      "mid": "/m/0blz9",
      "score": 0.84701633,
      "topicality": 0.84701633
    },
    {
      "description": "Body of water",
      "mid": "/m/03ktm1",
      "score": 0.84358436,
      "topicality": 0.84358436
    },
    {
      "description": "Line",
      "mid": "/m/03scnj",
      "score": 0.8156504,
      "topicality": 0.8156504
    },
    {
      "description": "Lake",
      "mid": "/m/04h4w",
      "score": 0.7923458,
      "topicality": 0.7923458
    },
    {
      "description": "Horizon",
      "mid": "/m/0d1n2",
      "score": 0.7770988,
      "topicality": 0.7770988
    },
    {
      "description": "Wire",
      "mid": "/m/083kv",
      "score": 0.6985837,
      "topicality": 0.6985837
    },
    {
      "description": "Wood",
      "mid": "/m/083vt",
      "score": 0.68167806,
      "topicality": 0.68167806
    },
    {
      "description": "Electricity",
      "mid": "/m/02lts",
      "score": 0.67379797,
      "topicality": 0.67379797
    },
    {
      "description": "City",
      "mid": "/m/01n32",
      "score": 0.669966,
      "topicality": 0.669966
    },
    {
      "description": "Landscape",
      "mid": "/m/025s3q0",
      "score": 0.661379,
      "topicality": 0.661379
    },
    {
      "description": "Ocean",
      "mid": "/m/05kq4",
      "score": 0.62725914,
      "topicality": 0.62725914
    },
    {
      "description": "Bridge",
      "mid": "/m/015kr",
      "score": 0.59902114,
      "topicality": 0.59902114
    },
    {
      "description": "Overhead power line",
      "mid": "/m/04w7nv",
      "score": 0.56075317,
      "topicality": 0.56075317
    },
    {
      "description": "Perching bird",
      "mid": "/m/0cjvf",
      "score": 0.5498451,
      "topicality": 0.5498451
    },
    {
      "description": "Raven",
      "mid": "/m/06j2d",
      "score": 0.54187953,
      "topicality": 0.54187953
    },
    {
      "description": "Fog",
      "mid": "/m/0g2z8",
      "score": 0.53191006,
      "topicality": 0.53191006
    },
    {
      "description": "Crow-like bird",
      "mid": "/m/015lbc",
      "score": 0.5233236,
      "topicality": 0.5233236
    },
    {
      "description": "Mountain",
      "mid": "/m/09d_r",
      "score": 0.5159388,
      "topicality": 0.5159388
    },
    {
      "description": "Sound",
      "mid": "/m/0223d3",
      "score": 0.512652,
      "topicality": 0.512652
    },
    {
      "description": "Sea",
      "mid": "/m/06npx",
      "score": 0.50419205,
      "topicality": 0.50419205
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.42460182,
            "y": 0.6002164
          },
          {
            "x": 0.5647111,
            "y": 0.6002164
          },
          {
            "x": 0.5647111,
            "y": 0.8365517
          },
          {
            "x": 0.42460182,
            "y": 0.8365517
          }
        ]
      },
      "mid": "/m/015p6",
      "name": "Bird",
      "score": 0.9248271
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
            "x": 748,
            "y": 1489
          },
          {
            "x": 829,
            "y": 1489
          },
          {
            "x": 829,
            "y": 1501
          },
          {
            "x": 748,
            "y": 1501
          }
        ]
      },
      "description": "APARAN",
      "locale": "az"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 830,
            "y": 1500
          },
          {
            "x": 749,
            "y": 1502
          },
          {
            "x": 749,
            "y": 1492
          },
          {
            "x": 830,
            "y": 1490
          }
        ]
      },
      "description": "APARAN"
    }
  ]
}

const photo = {
  id: 'iWdxtshU',
  src: bridgeBirdImg,
  squareSrc: bridgeBirdSquareImg,
  alt: 'bridge bird',
  vision: JSON.stringify(visionApi),
  width: 3000,
  height: 2250,
}

export const bridgeBirdPost = {
  id: 'pdvqiGtI',
  photos: [photo],
  description: '',
  postedDate: '2021-08-30T08:00:00.000+00:00',
  likes: 5843,
  location: '',
  tags: ['bird', 'water', 'sky']
}
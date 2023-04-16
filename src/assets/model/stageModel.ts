import stageImg from '../images/stage.webp';
import stageSquareImg from '../images/stage-square.webp';


const visionApi = {
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 1008
            },
            {
              "x": 3427
            },
            {
              "x": 3427,
              "y": 3023
            },
            {
              "x": 1008,
              "y": 3023
            }
          ]
        },
        "confidence": 0.28125,
        "importanceFraction": 0.91428566
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 604
            },
            {
              "x": 3628
            },
            {
              "x": 3628,
              "y": 3023
            },
            {
              "x": 604,
              "y": 3023
            }
          ]
        },
        "confidence": 0.24609375,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 403
            },
            {
              "x": 4031
            },
            {
              "x": 4031,
              "y": 3023
            },
            {
              "x": 403,
              "y": 3023
            }
          ]
        },
        "confidence": 0.20507811,
        "importanceFraction": 1
      }
    ]
  },
  "faceAnnotations": [
    {
      "angerLikelihood": "VERY_UNLIKELY",
      "blurredLikelihood": "VERY_UNLIKELY",
      "boundingPoly": {
        "vertices": [
          {
            "x": 3151,
            "y": 2063
          },
          {
            "x": 3243,
            "y": 2063
          },
          {
            "x": 3243,
            "y": 2170
          },
          {
            "x": 3151,
            "y": 2170
          }
        ]
      },
      "detectionConfidence": 0.5859375,
      "fdBoundingPoly": {
        "vertices": [
          {
            "x": 3153,
            "y": 2079
          },
          {
            "x": 3246,
            "y": 2079
          },
          {
            "x": 3246,
            "y": 2171
          },
          {
            "x": 3153,
            "y": 2171
          }
        ]
      },
      "headwearLikelihood": "VERY_UNLIKELY",
      "joyLikelihood": "VERY_UNLIKELY",
      "landmarkingConfidence": 0.003900295,
      "landmarks": [
        {
          "position": {
            "x": 3215.1147,
            "y": 2121.4866,
            "z": 0.00038433075
          },
          "type": "LEFT_EYE"
        },
        {
          "position": {
            "x": 3186.8374,
            "y": 2113.175,
            "z": -1.1617858
          },
          "type": "RIGHT_EYE"
        },
        {
          "position": {
            "x": 3218.0166,
            "y": 2113.526,
            "z": -1.2697709
          },
          "type": "LEFT_OF_LEFT_EYEBROW"
        },
        {
          "position": {
            "x": 3212.991,
            "y": 2113.0803,
            "z": 5.6303864
          },
          "type": "RIGHT_OF_LEFT_EYEBROW"
        },
        {
          "position": {
            "x": 3191.1082,
            "y": 2110.4307,
            "z": 4.861762
          },
          "type": "LEFT_OF_RIGHT_EYEBROW"
        },
        {
          "position": {
            "x": 3186.3186,
            "y": 2107.241,
            "z": -3.0841577
          },
          "type": "RIGHT_OF_RIGHT_EYEBROW"
        },
        {
          "position": {
            "x": 3200.392,
            "y": 2116.7827,
            "z": 4.9546633
          },
          "type": "MIDPOINT_BETWEEN_EYES"
        },
        {
          "position": {
            "x": 3197.811,
            "y": 2135.8093,
            "z": 10.476622
          },
          "type": "NOSE_TIP"
        },
        {
          "position": {
            "x": 3194.352,
            "y": 2143.8281,
            "z": 3.0290403
          },
          "type": "UPPER_LIP"
        },
        {
          "position": {
            "x": 3193.4148,
            "y": 2149.8389,
            "z": 0.18293893
          },
          "type": "LOWER_LIP"
        },
        {
          "position": {
            "x": 3207.0913,
            "y": 2147.4954,
            "z": -4.0238957
          },
          "type": "MOUTH_LEFT"
        },
        {
          "position": {
            "x": 3184.058,
            "y": 2143.3892,
            "z": -4.912491
          },
          "type": "MOUTH_RIGHT"
        },
        {
          "position": {
            "x": 3193.4968,
            "y": 2146.0535,
            "z": 0.63763857
          },
          "type": "MOUTH_CENTER"
        },
        {
          "position": {
            "x": 3195.7383,
            "y": 2135.4077,
            "z": -0.18290448
          },
          "type": "NOSE_BOTTOM_RIGHT"
        },
        {
          "position": {
            "x": 3195.8848,
            "y": 2135.8206,
            "z": 0.20647621
          },
          "type": "NOSE_BOTTOM_LEFT"
        },
        {
          "position": {
            "x": 3195.192,
            "y": 2138.663,
            "z": 3.957805
          },
          "type": "NOSE_BOTTOM_CENTER"
        },
        {
          "position": {
            "x": 3214.8176,
            "y": 2118.8975,
            "z": 1.8339552
          },
          "type": "LEFT_EYE_TOP_BOUNDARY"
        },
        {
          "position": {
            "x": 3214.49,
            "y": 2121.595,
            "z": -0.27654362
          },
          "type": "LEFT_EYE_RIGHT_CORNER"
        },
        {
          "position": {
            "x": 3214.1782,
            "y": 2123.9133,
            "z": -0.06415391
          },
          "type": "LEFT_EYE_BOTTOM_BOUNDARY"
        },
        {
          "position": {
            "x": 3213.9668,
            "y": 2121.3003,
            "z": -2.462111
          },
          "type": "LEFT_EYE_LEFT_CORNER"
        },
        {
          "position": {
            "x": 3187.1243,
            "y": 2110.6985,
            "z": 0.6937057
          },
          "type": "RIGHT_EYE_TOP_BOUNDARY"
        },
        {
          "position": {
            "x": 3187.6003,
            "y": 2114.0903,
            "z": -3.9011467
          },
          "type": "RIGHT_EYE_RIGHT_CORNER"
        },
        {
          "position": {
            "x": 3186.9329,
            "y": 2115.1057,
            "z": -1.2016022
          },
          "type": "RIGHT_EYE_BOTTOM_BOUNDARY"
        },
        {
          "position": {
            "x": 3187.485,
            "y": 2113.2957,
            "z": -1.0628841
          },
          "type": "RIGHT_EYE_LEFT_CORNER"
        },
        {
          "position": {
            "x": 3214.8655,
            "y": 2112.2864,
            "z": 4.2372417
          },
          "type": "LEFT_EYEBROW_UPPER_MIDPOINT"
        },
        {
          "position": {
            "x": 3188.042,
            "y": 2106.9766,
            "z": 2.9803588
          },
          "type": "RIGHT_EYEBROW_UPPER_MIDPOINT"
        },
        {
          "position": {
            "x": 3231.4502,
            "y": 2128.7778,
            "z": -33.06484
          },
          "type": "LEFT_EAR_TRAGION"
        },
        {
          "position": {
            "x": 3161.2168,
            "y": 2118.0925,
            "z": -34.8997
          },
          "type": "RIGHT_EAR_TRAGION"
        },
        {
          "position": {
            "x": 3201.4404,
            "y": 2110.8813,
            "z": 6.2849
          },
          "type": "FOREHEAD_GLABELLA"
        },
        {
          "position": {
            "x": 3192.2217,
            "y": 2161.978,
            "z": -5.3324614
          },
          "type": "CHIN_GNATHION"
        },
        {
          "position": {
            "x": 3220.5847,
            "y": 2152.5317,
            "z": -25.517714
          },
          "type": "CHIN_LEFT_GONION"
        },
        {
          "position": {
            "x": 3169.4683,
            "y": 2143.6643,
            "z": -27.583683
          },
          "type": "CHIN_RIGHT_GONION"
        },
        {
          "position": {
            "x": 3211.192,
            "y": 2138.3928,
            "z": -4.967431
          },
          "type": "LEFT_CHEEK_CENTER"
        },
        {
          "position": {
            "x": 3183.1902,
            "y": 2131.3923,
            "z": -6.3852406
          },
          "type": "RIGHT_CHEEK_CENTER"
        }
      ],
      "panAngle": -177.56984,
      "rollAngle": 11.19902,
      "sorrowLikelihood": "VERY_UNLIKELY",
      "surpriseLikelihood": "VERY_UNLIKELY",
      "tiltAngle": 8.682739,
      "underExposedLikelihood": "VERY_UNLIKELY"
    },
    {
      "angerLikelihood": "VERY_UNLIKELY",
      "blurredLikelihood": "VERY_UNLIKELY",
      "boundingPoly": {
        "vertices": [
          {
            "x": 2439,
            "y": 1999
          },
          {
            "x": 2538,
            "y": 1999
          },
          {
            "x": 2538,
            "y": 2113
          },
          {
            "x": 2439,
            "y": 2113
          }
        ]
      },
      "detectionConfidence": 0.5546875,
      "fdBoundingPoly": {
        "vertices": [
          {
            "x": 2454,
            "y": 2027
          },
          {
            "x": 2538,
            "y": 2027
          },
          {
            "x": 2538,
            "y": 2112
          },
          {
            "x": 2454,
            "y": 2112
          }
        ]
      },
      "headwearLikelihood": "VERY_UNLIKELY",
      "joyLikelihood": "VERY_UNLIKELY",
      "landmarkingConfidence": 0.004265312,
      "landmarks": [
        {
          "position": {
            "x": 2508.2065,
            "y": 2057.9368,
            "z": 0.0001850985
          },
          "type": "LEFT_EYE"
        },
        {
          "position": {
            "x": 2474.9224,
            "y": 2054.792,
            "z": 2.0277376
          },
          "type": "RIGHT_EYE"
        },
        {
          "position": {
            "x": 2507.4792,
            "y": 2044.7194,
            "z": -3.8295765
          },
          "type": "LEFT_OF_LEFT_EYEBROW"
        },
        {
          "position": {
            "x": 2504.9275,
            "y": 2045.6509,
            "z": 5.534615
          },
          "type": "RIGHT_OF_LEFT_EYEBROW"
        },
        {
          "position": {
            "x": 2479.494,
            "y": 2047.8591,
            "z": 6.9522533
          },
          "type": "LEFT_OF_RIGHT_EYEBROW"
        },
        {
          "position": {
            "x": 2473.781,
            "y": 2047.2937,
            "z": -0.19104913
          },
          "type": "RIGHT_OF_RIGHT_EYEBROW"
        },
        {
          "position": {
            "x": 2493.9258,
            "y": 2054.8916,
            "z": 6.842614
          },
          "type": "MIDPOINT_BETWEEN_EYES"
        },
        {
          "position": {
            "x": 2492.1445,
            "y": 2071.5317,
            "z": 15.196703
          },
          "type": "NOSE_TIP"
        },
        {
          "position": {
            "x": 2491.096,
            "y": 2084.0317,
            "z": 8.751927
          },
          "type": "UPPER_LIP"
        },
        {
          "position": {
            "x": 2492.254,
            "y": 2088.9631,
            "z": 6.615315
          },
          "type": "LOWER_LIP"
        },
        {
          "position": {
            "x": 2503.6357,
            "y": 2086.6443,
            "z": -0.021560105
          },
          "type": "MOUTH_LEFT"
        },
        {
          "position": {
            "x": 2479.5732,
            "y": 2086.4023,
            "z": 1.8154328
          },
          "type": "MOUTH_RIGHT"
        },
        {
          "position": {
            "x": 2491.9246,
            "y": 2087.4524,
            "z": 6.5829577
          },
          "type": "MOUTH_CENTER"
        },
        {
          "position": {
            "x": 2491.3555,
            "y": 2075.8372,
            "z": 4.74031
          },
          "type": "NOSE_BOTTOM_RIGHT"
        },
        {
          "position": {
            "x": 2491.547,
            "y": 2075.0442,
            "z": 3.8296905
          },
          "type": "NOSE_BOTTOM_LEFT"
        },
        {
          "position": {
            "x": 2491.2048,
            "y": 2077.8088,
            "z": 8.943069
          },
          "type": "NOSE_BOTTOM_CENTER"
        },
        {
          "position": {
            "x": 2508.2327,
            "y": 2054.978,
            "z": 1.6434366
          },
          "type": "LEFT_EYE_TOP_BOUNDARY"
        },
        {
          "position": {
            "x": 2507.1475,
            "y": 2058.0024,
            "z": 0.2414056
          },
          "type": "LEFT_EYE_RIGHT_CORNER"
        },
        {
          "position": {
            "x": 2508.0164,
            "y": 2060.2295,
            "z": 0.22175954
          },
          "type": "LEFT_EYE_BOTTOM_BOUNDARY"
        },
        {
          "position": {
            "x": 2507.1765,
            "y": 2058.1953,
            "z": -3.09341
          },
          "type": "LEFT_EYE_LEFT_CORNER"
        },
        {
          "position": {
            "x": 2475.253,
            "y": 2051.2412,
            "z": 3.6050076
          },
          "type": "RIGHT_EYE_TOP_BOUNDARY"
        },
        {
          "position": {
            "x": 2476.566,
            "y": 2054.631,
            "z": -0.6082666
          },
          "type": "RIGHT_EYE_RIGHT_CORNER"
        },
        {
          "position": {
            "x": 2475.0679,
            "y": 2056.237,
            "z": 2.2934515
          },
          "type": "RIGHT_EYE_BOTTOM_BOUNDARY"
        },
        {
          "position": {
            "x": 2475.5435,
            "y": 2055.1953,
            "z": 1.6682898
          },
          "type": "RIGHT_EYE_LEFT_CORNER"
        },
        {
          "position": {
            "x": 2507.973,
            "y": 2041.0282,
            "z": 2.871952
          },
          "type": "LEFT_EYEBROW_UPPER_MIDPOINT"
        },
        {
          "position": {
            "x": 2475.066,
            "y": 2043.6527,
            "z": 5.2026477
          },
          "type": "RIGHT_EYEBROW_UPPER_MIDPOINT"
        },
        {
          "position": {
            "x": 2524.5488,
            "y": 2064.8652,
            "z": -37.161224
          },
          "type": "LEFT_EAR_TRAGION"
        },
        {
          "position": {
            "x": 2451.3792,
            "y": 2063.6262,
            "z": -32.274403
          },
          "type": "RIGHT_EAR_TRAGION"
        },
        {
          "position": {
            "x": 2494.0737,
            "y": 2048.0464,
            "z": 7.411435
          },
          "type": "FOREHEAD_GLABELLA"
        },
        {
          "position": {
            "x": 2491.9822,
            "y": 2102.609,
            "z": 2.338747
          },
          "type": "CHIN_GNATHION"
        },
        {
          "position": {
            "x": 2516.7793,
            "y": 2089.1199,
            "z": -24.781378
          },
          "type": "CHIN_LEFT_GONION"
        },
        {
          "position": {
            "x": 2462.2637,
            "y": 2091.186,
            "z": -21.114342
          },
          "type": "CHIN_RIGHT_GONION"
        },
        {
          "position": {
            "x": 2506.8394,
            "y": 2076.8286,
            "z": -3.243355
          },
          "type": "LEFT_CHEEK_CENTER"
        },
        {
          "position": {
            "x": 2475.1318,
            "y": 2073.904,
            "z": -0.7041419
          },
          "type": "RIGHT_CHEEK_CENTER"
        }
      ],
      "panAngle": 176.13435,
      "rollAngle": 1.7934738,
      "sorrowLikelihood": "VERY_UNLIKELY",
      "surpriseLikelihood": "VERY_UNLIKELY",
      "tiltAngle": 0.97627765,
      "underExposedLikelihood": "UNLIKELY"
    },
    {
      "angerLikelihood": "VERY_UNLIKELY",
      "blurredLikelihood": "VERY_UNLIKELY",
      "boundingPoly": {
        "vertices": [
          {
            "x": 3839,
            "y": 2040
          },
          {
            "x": 3939,
            "y": 2040
          },
          {
            "x": 3939,
            "y": 2156
          },
          {
            "x": 3839,
            "y": 2156
          }
        ]
      },
      "detectionConfidence": 0.51171875,
      "fdBoundingPoly": {
        "vertices": [
          {
            "x": 3843,
            "y": 2050
          },
          {
            "x": 3955,
            "y": 2050
          },
          {
            "x": 3955,
            "y": 2160
          },
          {
            "x": 3843,
            "y": 2160
          }
        ]
      },
      "headwearLikelihood": "VERY_UNLIKELY",
      "joyLikelihood": "VERY_UNLIKELY",
      "landmarkingConfidence": 0.003840371,
      "landmarks": [
        {
          "position": {
            "x": 3907.824,
            "y": 2100.3357,
            "z": -0.00040872395
          },
          "type": "LEFT_EYE"
        },
        {
          "position": {
            "x": 3874.722,
            "y": 2099.6162,
            "z": 1.3285738
          },
          "type": "RIGHT_EYE"
        },
        {
          "position": {
            "x": 3908.016,
            "y": 2092.7158,
            "z": -2.8454928
          },
          "type": "LEFT_OF_LEFT_EYEBROW"
        },
        {
          "position": {
            "x": 3903.9094,
            "y": 2091.8396,
            "z": 5.703488
          },
          "type": "RIGHT_OF_LEFT_EYEBROW"
        },
        {
          "position": {
            "x": 3879.7053,
            "y": 2093.0876,
            "z": 6.5580497
          },
          "type": "LEFT_OF_RIGHT_EYEBROW"
        },
        {
          "position": {
            "x": 3872.1738,
            "y": 2091.1116,
            "z": -0.89772546
          },
          "type": "RIGHT_OF_RIGHT_EYEBROW"
        },
        {
          "position": {
            "x": 3891.968,
            "y": 2099.072,
            "z": 6.4836082
          },
          "type": "MIDPOINT_BETWEEN_EYES"
        },
        {
          "position": {
            "x": 3891.9626,
            "y": 2116.551,
            "z": 14.215329
          },
          "type": "NOSE_TIP"
        },
        {
          "position": {
            "x": 3890.7813,
            "y": 2126.541,
            "z": 7.4549584
          },
          "type": "UPPER_LIP"
        },
        {
          "position": {
            "x": 3891.735,
            "y": 2135.4087,
            "z": 5.132171
          },
          "type": "LOWER_LIP"
        },
        {
          "position": {
            "x": 3902.8628,
            "y": 2131.112,
            "z": -0.8048853
          },
          "type": "MOUTH_LEFT"
        },
        {
          "position": {
            "x": 3877.7346,
            "y": 2132.2092,
            "z": 0.27505216
          },
          "type": "MOUTH_RIGHT"
        },
        {
          "position": {
            "x": 3892.2036,
            "y": 2132.7078,
            "z": 5.21152
          },
          "type": "MOUTH_CENTER"
        },
        {
          "position": {
            "x": 3888.1384,
            "y": 2117.8481,
            "z": 3.6165717
          },
          "type": "NOSE_BOTTOM_RIGHT"
        },
        {
          "position": {
            "x": 3892.4382,
            "y": 2118.4285,
            "z": 3.0477517
          },
          "type": "NOSE_BOTTOM_LEFT"
        },
        {
          "position": {
            "x": 3890.6638,
            "y": 2120.9534,
            "z": 7.8041716
          },
          "type": "NOSE_BOTTOM_CENTER"
        },
        {
          "position": {
            "x": 3907.1423,
            "y": 2097.9126,
            "z": 1.6846051
          },
          "type": "LEFT_EYE_TOP_BOUNDARY"
        },
        {
          "position": {
            "x": 3905.8423,
            "y": 2100.6733,
            "z": 0.14482594
          },
          "type": "LEFT_EYE_RIGHT_CORNER"
        },
        {
          "position": {
            "x": 3907.2144,
            "y": 2102.9768,
            "z": 0.19303398
          },
          "type": "LEFT_EYE_BOTTOM_BOUNDARY"
        },
        {
          "position": {
            "x": 3907.4468,
            "y": 2100.518,
            "z": -2.9198413
          },
          "type": "LEFT_EYE_LEFT_CORNER"
        },
        {
          "position": {
            "x": 3874.145,
            "y": 2097.7761,
            "z": 3.042584
          },
          "type": "RIGHT_EYE_TOP_BOUNDARY"
        },
        {
          "position": {
            "x": 3874.0198,
            "y": 2099.9834,
            "z": -1.2268358
          },
          "type": "RIGHT_EYE_RIGHT_CORNER"
        },
        {
          "position": {
            "x": 3874.979,
            "y": 2102.452,
            "z": 1.5468091
          },
          "type": "RIGHT_EYE_BOTTOM_BOUNDARY"
        },
        {
          "position": {
            "x": 3877.5583,
            "y": 2100.9456,
            "z": 1.082419
          },
          "type": "RIGHT_EYE_LEFT_CORNER"
        },
        {
          "position": {
            "x": 3906.042,
            "y": 2091.3506,
            "z": 3.541932
          },
          "type": "LEFT_EYEBROW_UPPER_MIDPOINT"
        },
        {
          "position": {
            "x": 3874.6958,
            "y": 2089.7683,
            "z": 4.784913
          },
          "type": "RIGHT_EYEBROW_UPPER_MIDPOINT"
        },
        {
          "position": {
            "x": 3926.0542,
            "y": 2101.9207,
            "z": -36.638447
          },
          "type": "LEFT_EAR_TRAGION"
        },
        {
          "position": {
            "x": 3851.3777,
            "y": 2107.8037,
            "z": -33.025608
          },
          "type": "RIGHT_EAR_TRAGION"
        },
        {
          "position": {
            "x": 3891.8965,
            "y": 2092.3054,
            "z": 7.21791
          },
          "type": "FOREHEAD_GLABELLA"
        },
        {
          "position": {
            "x": 3892.0066,
            "y": 2149.6868,
            "z": 0.6204588
          },
          "type": "CHIN_GNATHION"
        },
        {
          "position": {
            "x": 3921.3723,
            "y": 2133.123,
            "z": -24.56659
          },
          "type": "CHIN_LEFT_GONION"
        },
        {
          "position": {
            "x": 3862.446,
            "y": 2135.1392,
            "z": -22.651703
          },
          "type": "CHIN_RIGHT_GONION"
        },
        {
          "position": {
            "x": 3907.6904,
            "y": 2119.931,
            "z": -3.6073253
          },
          "type": "LEFT_CHEEK_CENTER"
        },
        {
          "position": {
            "x": 3873.4092,
            "y": 2119.832,
            "z": -1.9289398
          },
          "type": "RIGHT_CHEEK_CENTER"
        }
      ],
      "panAngle": 177.48254,
      "rollAngle": 0.3576081,
      "sorrowLikelihood": "VERY_UNLIKELY",
      "surpriseLikelihood": "VERY_UNLIKELY",
      "tiltAngle": 2.780321,
      "underExposedLikelihood": "LIKELY"
    }
  ],
  "fullTextAnnotation": {
    "pages": [
      {
        "blocks": [
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 577,
                  "y": 1529
                },
                {
                  "x": 582,
                  "y": 1515
                },
                {
                  "x": 596,
                  "y": 1520
                },
                {
                  "x": 591,
                  "y": 1534
                }
              ]
            },
            "confidence": 0.75766224,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 577,
                      "y": 1529
                    },
                    {
                      "x": 582,
                      "y": 1515
                    },
                    {
                      "x": 596,
                      "y": 1520
                    },
                    {
                      "x": 591,
                      "y": 1534
                    }
                  ]
                },
                "confidence": 0.75766224,
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 577,
                          "y": 1529
                        },
                        {
                          "x": 582,
                          "y": 1515
                        },
                        {
                          "x": 596,
                          "y": 1520
                        },
                        {
                          "x": 591,
                          "y": 1534
                        }
                      ]
                    },
                    "confidence": 0.75766224,
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 577,
                              "y": 1529
                            },
                            {
                              "x": 582,
                              "y": 1515
                            },
                            {
                              "x": 596,
                              "y": 1520
                            },
                            {
                              "x": 591,
                              "y": 1534
                            }
                          ]
                        },
                        "confidence": 0.75766224,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          }
                        },
                        "text": "1"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 742,
                  "y": 1901
                },
                {
                  "x": 787,
                  "y": 1901
                },
                {
                  "x": 787,
                  "y": 1927
                },
                {
                  "x": 742,
                  "y": 1927
                }
              ]
            },
            "confidence": 0.66214764,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 742,
                      "y": 1901
                    },
                    {
                      "x": 787,
                      "y": 1901
                    },
                    {
                      "x": 787,
                      "y": 1927
                    },
                    {
                      "x": 742,
                      "y": 1927
                    }
                  ]
                },
                "confidence": 0.66214764,
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 742,
                          "y": 1901
                        },
                        {
                          "x": 787,
                          "y": 1901
                        },
                        {
                          "x": 787,
                          "y": 1927
                        },
                        {
                          "x": 742,
                          "y": 1927
                        }
                      ]
                    },
                    "confidence": 0.66214764,
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 742,
                              "y": 1902
                            },
                            {
                              "x": 764,
                              "y": 1902
                            },
                            {
                              "x": 764,
                              "y": 1927
                            },
                            {
                              "x": 742,
                              "y": 1927
                            }
                          ]
                        },
                        "confidence": 0.76672095,
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 773,
                              "y": 1901
                            },
                            {
                              "x": 787,
                              "y": 1901
                            },
                            {
                              "x": 787,
                              "y": 1926
                            },
                            {
                              "x": 773,
                              "y": 1926
                            }
                          ]
                        },
                        "confidence": 0.55757433,
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
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 1925,
                  "y": 1825
                },
                {
                  "x": 1948,
                  "y": 1825
                },
                {
                  "x": 1949,
                  "y": 1906
                },
                {
                  "x": 1926,
                  "y": 1906
                }
              ]
            },
            "confidence": 0.28211114,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 1925,
                      "y": 1825
                    },
                    {
                      "x": 1948,
                      "y": 1825
                    },
                    {
                      "x": 1949,
                      "y": 1906
                    },
                    {
                      "x": 1926,
                      "y": 1906
                    }
                  ]
                },
                "confidence": 0.28211114,
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 1925,
                          "y": 1825
                        },
                        {
                          "x": 1948,
                          "y": 1825
                        },
                        {
                          "x": 1949,
                          "y": 1906
                        },
                        {
                          "x": 1926,
                          "y": 1906
                        }
                      ]
                    },
                    "confidence": 0.28211114,
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 1925,
                              "y": 1825
                            },
                            {
                              "x": 1948,
                              "y": 1825
                            },
                            {
                              "x": 1949,
                              "y": 1906
                            },
                            {
                              "x": 1926,
                              "y": 1906
                            }
                          ]
                        },
                        "confidence": 0.28211114,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          }
                        },
                        "text": "म"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "confidence": 0.567307,
        "height": 3024,
        "width": 4032
      }
    ],
    "text": "1\nel\nम"
  },
  "imagePropertiesAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 1008
            },
            {
              "x": 3427
            },
            {
              "x": 3427,
              "y": 3023
            },
            {
              "x": 1008,
              "y": 3023
            }
          ]
        },
        "confidence": 0.28125,
        "importanceFraction": 0.91428566
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 604
            },
            {
              "x": 3628
            },
            {
              "x": 3628,
              "y": 3023
            },
            {
              "x": 604,
              "y": 3023
            }
          ]
        },
        "confidence": 0.24609375,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 403
            },
            {
              "x": 4031
            },
            {
              "x": 4031,
              "y": 3023
            },
            {
              "x": 403,
              "y": 3023
            }
          ]
        },
        "confidence": 0.20507811,
        "importanceFraction": 1
      }
    ],
    "dominantColors": {
      "colors": [
        {
          "color": {
            "blue": 158,
            "green": 156,
            "red": 161
          },
          "hex": "A19C9E",
          "percent": 26.904567262291394,
          "percentRounded": 27,
          "pixelFraction": 0.124837756,
          "rgb": "161, 156,\n 158",
          "score": 0.24102683
        },
        {
          "color": {
            "blue": 128,
            "green": 179,
            "red": 114
          },
          "hex": "72B380",
          "percent": 8.126192122808026,
          "percentRounded": 8,
          "pixelFraction": 0.0011209439,
          "rgb": "114, 179,\n 128",
          "score": 0.072799176
        },
        {
          "color": {
            "blue": 19,
            "green": 15,
            "red": 25
          },
          "hex": "190F13",
          "percent": 5.544172955805183,
          "percentRounded": 6,
          "pixelFraction": 0.32035398,
          "rgb": "25, 15,\n 19",
          "score": 0.04966794
        },
        {
          "color": {
            "blue": 180,
            "green": 146,
            "red": 160
          },
          "hex": "A092B4",
          "percent": 0.8974499608417811,
          "percentRounded": 1,
          "pixelFraction": 0.0015929204,
          "rgb": "160, 146,\n 180",
          "score": 0.008039881
        },
        {
          "color": {
            "blue": 119,
            "green": 82,
            "red": 96
          },
          "hex": "605277",
          "percent": 0.7016427473966568,
          "percentRounded": 1,
          "pixelFraction": 0.006312684,
          "rgb": "96, 82,\n 119",
          "score": 0.0062857256
        },
        {
          "color": {
            "blue": 193,
            "green": 192,
            "red": 196
          },
          "hex": "C4C0C1",
          "percent": 25.740679105587898,
          "percentRounded": 26,
          "pixelFraction": 0.07439528,
          "rgb": "196, 192,\n 193",
          "score": 0.23060004
        },
        {
          "color": {
            "blue": 124,
            "green": 121,
            "red": 126
          },
          "hex": "7E797C",
          "percent": 13.424447870978955,
          "percentRounded": 13,
          "pixelFraction": 0.14247787,
          "rgb": "126, 121,\n 124",
          "score": 0.120264046
        },
        {
          "color": {
            "blue": 231,
            "green": 230,
            "red": 233
          },
          "hex": "E9E6E7",
          "percent": 9.038163686364548,
          "percentRounded": 9,
          "pixelFraction": 0.022477876,
          "rgb": "233, 230,\n 231",
          "score": 0.08096915
        },
        {
          "color": {
            "blue": 150,
            "green": 201,
            "red": 135
          },
          "hex": "87C996",
          "percent": 5.641607102183703,
          "percentRounded": 6,
          "pixelFraction": 0.0005309734,
          "rgb": "135, 201,\n 150",
          "score": 0.050540812
        },
        {
          "color": {
            "blue": 92,
            "green": 88,
            "red": 93
          },
          "hex": "5D585C",
          "percent": 3.9810771857418494,
          "percentRounded": 4,
          "pixelFraction": 0.16796461,
          "rgb": "93, 88,\n 92",
          "score": 0.035664815
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "description": "Architecture",
      "mid": "/m/03nfmq",
      "score": 0.8526798,
      "topicality": 0.8526798
    },
    {
      "description": "Sky",
      "mid": "/m/01bqvp",
      "score": 0.8375131,
      "topicality": 0.8375131
    },
    {
      "description": "Entertainment",
      "mid": "/m/02jjt",
      "score": 0.8365684,
      "topicality": 0.8365684
    },
    {
      "description": "Electricity",
      "mid": "/m/02lts",
      "score": 0.82544136,
      "topicality": 0.82544136
    },
    {
      "description": "Visual effect lighting",
      "mid": "/m/0h8n2vs",
      "score": 0.7662174,
      "topicality": 0.7662174
    },
    {
      "description": "Technology",
      "mid": "/m/07c1v",
      "score": 0.7478218,
      "topicality": 0.7478218
    },
    {
      "description": "Fun",
      "mid": "/m/0ds99lh",
      "score": 0.74673456,
      "topicality": 0.74673456
    },
    {
      "description": "Space",
      "mid": "/m/06wqb",
      "score": 0.74627507,
      "topicality": 0.74627507
    },
    {
      "description": "Event",
      "mid": "/m/081pkj",
      "score": 0.73859024,
      "topicality": 0.73859024
    },
    {
      "description": "Darkness",
      "mid": "/m/01kyr8",
      "score": 0.7133577,
      "topicality": 0.7133577
    },
    {
      "description": "Music venue",
      "mid": "/m/07b2m8",
      "score": 0.7107098,
      "topicality": 0.7107098
    },
    {
      "description": "Ceiling",
      "mid": "/m/03gfsp",
      "score": 0.7057386,
      "topicality": 0.7057386
    },
    {
      "description": "Crowd",
      "mid": "/m/03qtwd",
      "score": 0.7041871,
      "topicality": 0.7041871
    },
    {
      "description": "Magenta",
      "mid": "/m/0ckc5",
      "score": 0.7005702,
      "topicality": 0.7005702
    },
    {
      "description": "City",
      "mid": "/m/01n32",
      "score": 0.68765366,
      "topicality": 0.68765366
    },
    {
      "description": "Performing arts",
      "mid": "/m/05qjc",
      "score": 0.680379,
      "topicality": 0.680379
    },
    {
      "description": "Midnight",
      "mid": "/m/01kv7h",
      "score": 0.67325556,
      "topicality": 0.67325556
    },
    {
      "description": "Public event",
      "mid": "/g/116c3n66l",
      "score": 0.6647532,
      "topicality": 0.6647532
    },
    {
      "description": "Tree",
      "mid": "/m/07j7r",
      "score": 0.6580243,
      "topicality": 0.6580243
    },
    {
      "description": "Audience",
      "mid": "/m/033lpr",
      "score": 0.6539246,
      "topicality": 0.6539246
    },
    {
      "description": "Night",
      "mid": "/m/01d74z",
      "score": 0.6275747,
      "topicality": 0.6275747
    },
    {
      "description": "Metal",
      "mid": "/m/04t7l",
      "score": 0.62654066,
      "topicality": 0.62654066
    },
    {
      "description": "Leisure",
      "mid": "/m/04g3r",
      "score": 0.59816253,
      "topicality": 0.59816253
    },
    {
      "description": "Music",
      "mid": "/m/04rlf",
      "score": 0.59729135,
      "topicality": 0.59729135
    },
    {
      "description": "Stage",
      "mid": "/m/04_5hy",
      "score": 0.5841524,
      "topicality": 0.5841524
    },
    {
      "description": "Concert",
      "mid": "/m/01jddz",
      "score": 0.5807486,
      "topicality": 0.5807486
    },
    {
      "description": "Performance",
      "mid": "/m/01gq53",
      "score": 0.5776924,
      "topicality": 0.5776924
    },
    {
      "description": "Tourist attraction",
      "mid": "/m/0pgl9",
      "score": 0.5403502,
      "topicality": 0.5403502
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.74348,
            "y": 0.6839974
          },
          {
            "x": 0.82523257,
            "y": 0.6839974
          },
          {
            "x": 0.82523257,
            "y": 0.963298
          },
          {
            "x": 0.74348,
            "y": 0.963298
          }
        ]
      },
      "mid": "/m/01g317",
      "name": "Person",
      "score": 0.853303
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.16169144,
            "y": 0.6225237
          },
          {
            "x": 0.2970929,
            "y": 0.6225237
          },
          {
            "x": 0.2970929,
            "y": 0.9863283
          },
          {
            "x": 0.16169144,
            "y": 0.9863283
          }
        ]
      },
      "mid": "/m/01g317",
      "name": "Person",
      "score": 0.84556603
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.5932155,
            "y": 0.68160266
          },
          {
            "x": 0.66689557,
            "y": 0.68160266
          },
          {
            "x": 0.66689557,
            "y": 0.95915693
          },
          {
            "x": 0.5932155,
            "y": 0.95915693
          }
        ]
      },
      "mid": "/m/01g317",
      "name": "Person",
      "score": 0.83990705
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.0018329149,
            "y": 0.6543807
          },
          {
            "x": 0.096996754,
            "y": 0.6543807
          },
          {
            "x": 0.096996754,
            "y": 0.99092126
          },
          {
            "x": 0.0018329149,
            "y": 0.99092126
          }
        ]
      },
      "mid": "/m/01g317",
      "name": "Person",
      "score": 0.8257207
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.4849042,
            "y": 0.6588349
          },
          {
            "x": 0.5581824,
            "y": 0.6588349
          },
          {
            "x": 0.5581824,
            "y": 0.9518172
          },
          {
            "x": 0.4849042,
            "y": 0.9518172
          }
        ]
      },
      "mid": "/m/01g317",
      "name": "Person",
      "score": 0.8238397
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.35898122,
            "y": 0.68201095
          },
          {
            "x": 0.43115413,
            "y": 0.68201095
          },
          {
            "x": 0.43115413,
            "y": 0.98260945
          },
          {
            "x": 0.35898122,
            "y": 0.98260945
          }
        ]
      },
      "mid": "/m/01g317",
      "name": "Person",
      "score": 0.80262405
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.101147674,
            "y": 0.70437336
          },
          {
            "x": 0.17834465,
            "y": 0.70437336
          },
          {
            "x": 0.17834465,
            "y": 0.9900345
          },
          {
            "x": 0.101147674,
            "y": 0.9900345
          }
        ]
      },
      "mid": "/m/01g317",
      "name": "Person",
      "score": 0.8005238
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.54465884,
            "y": 0.6835575
          },
          {
            "x": 0.59706527,
            "y": 0.6835575
          },
          {
            "x": 0.59706527,
            "y": 0.930674
          },
          {
            "x": 0.54465884,
            "y": 0.930674
          }
        ]
      },
      "mid": "/m/01g317",
      "name": "Person",
      "score": 0.7874246
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.92555946,
            "y": 0.6616964
          },
          {
            "x": 0.99665546,
            "y": 0.6616964
          },
          {
            "x": 0.99665546,
            "y": 0.8693966
          },
          {
            "x": 0.92555946,
            "y": 0.8693966
          }
        ]
      },
      "mid": "/m/01g317",
      "name": "Person",
      "score": 0.76998836
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.6868234,
            "y": 0.6472506
          },
          {
            "x": 0.7363786,
            "y": 0.6472506
          },
          {
            "x": 0.7363786,
            "y": 0.8167195
          },
          {
            "x": 0.6868234,
            "y": 0.8167195
          }
        ]
      },
      "mid": "/m/01g317",
      "name": "Person",
      "score": 0.680067
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
            "x": 577,
            "y": 1514
          },
          {
            "x": 1949,
            "y": 1514
          },
          {
            "x": 1949,
            "y": 1927
          },
          {
            "x": 577,
            "y": 1927
          }
        ]
      },
      "description": "1\nel\nम",
      "locale": "und"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 577,
            "y": 1529
          },
          {
            "x": 582,
            "y": 1515
          },
          {
            "x": 596,
            "y": 1520
          },
          {
            "x": 591,
            "y": 1534
          }
        ]
      },
      "description": "1"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 742,
            "y": 1901
          },
          {
            "x": 787,
            "y": 1901
          },
          {
            "x": 787,
            "y": 1927
          },
          {
            "x": 742,
            "y": 1927
          }
        ]
      },
      "description": "el"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 1925,
            "y": 1825
          },
          {
            "x": 1948,
            "y": 1825
          },
          {
            "x": 1949,
            "y": 1906
          },
          {
            "x": 1926,
            "y": 1906
          }
        ]
      },
      "description": "म"
    }
  ]
}

const photo = {
  id: 'ZUXklnjA',
  src: stageImg,
  squareSrc: stageSquareImg,
  alt: 'stage',
  vision: JSON.stringify(visionApi),
  width: 4032,
  height: 3024,
}

export const stagePost = {
  id: 'hfOUDUGo',
  photos: [photo],
  description: '',
  postedDate: '2021-10-28T08:00:00.000+00:00',
  likes: 10012,
  location: '',
  tags: ['person', 'electricity', 'entertainment']
}
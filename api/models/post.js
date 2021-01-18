const mongoose = require('mongoose');
const { isDate } = require('util');

const PostSchema = new mongoose.Schema({
  description: {
    type: String,
    default: ''
  },
  likes: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  location: {
    type: String,
    default: ''
  },
  photos: [{
    src: String,
    squareSrc: String,
    alt: String,
    vision: String,
    make: String,
    xyResolution: Number,
    orientation: String,
    exposureTime: String,
    apertureValue: Number,
    iso: Number,
    dateTimeOriginal: Date,
    brightnessValue: Number,
    subjectDistance: String,
    flash: String,
    focalLength: String,
    fov: String,
    exifImageWidth: Number,
    exifImageHeight: Number,
    digitalZoomRatio: Number,
    focalLengthIn35mmFormat: String,
    subjectDistanceRange: String,
    gpsAltitude: String,
    gpsLatitude: String,
    gpsLongitude: String,
    gpsDateTime: Date,
    circleOfConfusion: String,
    hyperfocalDistance: String,
    lightValue: Number,
  }],
  tags: [String],
  postedDate: {
    type: Date,
  },
  published: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Post', PostSchema);

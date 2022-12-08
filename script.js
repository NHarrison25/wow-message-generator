const classes = [];
const ratings = ['the best', 'great', 'good', 'average', 'bad', 'terrible', 'the worst'];

//
const createClass = (name, feature) => {
  _name: name,
  _feature: feature,
  set name(str) {
    if (typeof str === 'string') {
      this._name = str;
    } else {
      return 'Class name must be a string';
    }
  },
  get name() {
    return this._name;
  },
  set feature(str) {
    if (typeof str === 'string') {
      this._feature = str;
    } else {
      return 'Class feature must be a string';
    }
  },
  get feature() {
    return this._feature;
  }
}

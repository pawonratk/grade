export default class BMI {
  bmiCalculate(weight,height) {
    var wh = weight / (height ** 2);
    return wh;
  }
  bmiClassification(wh,region)
  {
    var a = '';
    if (region == 'asia') {
      if (wh <= 18.5) {
        a = 'Under weight';
      } else if ((wh > 18.5) && (wh < 25)) {
        a = 'Normal weight';
      } else if ((wh > 24.9) && (wh < 30)) {
        a = 'Overweight';
      } else if(wh>29.9) {
        a = 'Obesity';
      }
    } else {
      if (wh <= 19.5) {
        a = 'Under weight';
      } else if ((wh > 19.5) && (wh < 35)) {
        a = 'Normal weight';
      } else if ((wh > 34.9) && (wh < 40)) {
        a = 'Overweight';
      } else if(wh>39.9) {
        a = 'Obesity';
      }
    }
    return a;
  }
}
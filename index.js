const grades = [];
const gradesLength = 12;
for (let i = 0; i < gradesLength; i++) {
    let randomNumber = Math.random() * 100;
    grades.push(Math.round(randomNumber));
    }
    console.log(grades);
    document.querySelector(".one").innerHTML = grades;

    const getAverage = (numbers) => {
        let sum = 0;
        for (let i = 0; i < numbers.length; i += 1) {
          sum += numbers[i];
        }
        return sum / numbers.length;
      };
      console.log(getAverage(grades));
      document.querySelector(".two").innerHTML = getAverage(grades);

      const maxValue = Math.max.apply(null, grades);
      console.log(maxValue);
      document.querySelector(".three").innerHTML = maxValue;

      const minValue = Math.min.apply(null, grades);
      console.log(minValue);
      document.querySelector(".four").innerHTML = minValue;
      


const sortedGrades = grades.filter(function(e){
    return parseInt(e)>=60
});
const finalGrades = sortedGrades.length;
console.log(finalGrades);
document.querySelector(".five").innerHTML = finalGrades;

const sortedGrades2 = grades.filter(function(e){
    return parseInt(e)<60
});
const finalGrades2 = sortedGrades2.length;
console.log(finalGrades2);
document.querySelector(".six").innerHTML = finalGrades2;


function newGrade(grades) {
    let textG = '';
    let result = [];
    for (i = 0; i < grades.length; i++) {
      textG = '';
      if (grades[i] >= 80) {
        textG = "A";
      } else if (grades[i] >= 60&&grades[i]<=79) {
        textG = "B";
      } else if (grades[i] >=40&&grades[i]<=59) {
        textG = "C";
      } else if (grades[i] >= 20&&grades<=39) {
        textG = "D";
      } else if (grades[i]<20) {
        textG = "E";
      }
      result.push(textG);
    }
    return result;
  }

  console.log(newGrade(grades));
  document.querySelector(".seven").innerHTML = newGrade(grades);
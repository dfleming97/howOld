const howOld = (age, year) => {
    const yearDifference = year - 2023;
    const newAge = age + yearDifference;
    const yearsBefore = Math.abs(newAge);
    if (newAge < 0) {
      return 'The year ' + year + ' was ' + yearsBefore + ' years before you were born';
    } else if (newAge > age) {
      return 'You will be ' + newAge + ' in the year ' + year;
    } else if (newAge === age) {
      return 'You are ' + newAge + ' this year';
    } else {
      return 'You were ' + newAge + ' in the year ' + year;
    }
  };
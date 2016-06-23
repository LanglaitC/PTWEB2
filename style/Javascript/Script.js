
var formButton1 = document.getElementById('formButton1'),
    formButton2 = document.getElementById('formButton2'),
    formButton3 = document.getElementById('formButton3'),
    textForm1 = document.getElementById('textForm1'),
    textForm2 = document.getElementById('textForm2'),
    textForm3 = document.getElementById('textForm3'),
    bigCircle1 = document.getElementById('bigCircle1'),
    bigCircle2 = document.getElementById('bigCircle2'),
    bigCircle3 = document.getElementById('bigCircle3'),
    codeSkills = document.getElementById('codeSkills'),
    designSkills = document.getElementById('designSkills'),
    languageSkills = document.getElementById('languageSkills'),
    bigCircleDiv1= document.getElementById('bigCircleDiv1');

    formButton1.addEventListener('click', function() {
           contentForm1.style.display = 'block';
           contentForm2.style.display = 'none';
           contentForm3.style.display = 'none';
      });

    formButton2.addEventListener('click', function() {
              contentForm1.style.display = 'none';
              contentForm2.style.display = 'block';
              contentForm3.style.display = 'none';
      });

    formButton3.addEventListener('click', function() {
          contentForm1.style.display = 'none';
          contentForm2.style.display = 'none';
          contentForm3.style.display = 'block';
      });

    bigCircle1.addEventListener('click', function() {
      if (getComputedStyle(codeSkills).display == 'none') {
      codeSkills.style.display = 'block';
      designSkills.style.display = 'none';
      languageSkills.style.display = 'none';
    } else {
      codeSkills.style.display = 'none';
    }
    });

    bigCircle2.addEventListener('click', function() {
      if (getComputedStyle(designSkills).display == 'none') {
      codeSkills.style.display = 'none';
      designSkills.style.display = 'block';
      languageSkills.style.display = 'none';
    } else {
      designSkills.style.display = 'none';
    }
    });

    bigCircle3.addEventListener('click', function() {
      if (getComputedStyle(languageSkills).display == 'none') {
      codeSkills.style.display = 'none';
      designSkills.style.display = 'none';
      languageSkills.style.display = 'block';
    } else {
      languageSkills.style.display = 'none';
    }
    });

    if (getComputedStyle(codeSkills).display == 'none' || codeSkills.style.display == 'none') {
    bigCircleDiv1.className += " animated infinite bounce";
  }

    

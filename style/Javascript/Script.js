
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
    bigCircleDiv1= document.getElementById('bigCircleDiv1'),
    button1 = document.getElementById('button1'),
    button2 = document.getElementById('button2'),
    button3 = document.getElementById('button3');

    formButton1.addEventListener('click', function() {
           contentForm1.style.display = 'block';
           contentForm2.style.display = 'none';
           contentForm3.style.display = 'none';
           button1.style.backgroundColor = 'black';
           button2.style.backgroundColor = '#FF9800';
           button3.style.backgroundColor = '#FF9800';
      });

    formButton2.addEventListener('click', function() {
              contentForm1.style.display = 'none';
              contentForm2.style.display = 'block';
              contentForm3.style.display = 'none';
              button1.style.backgroundColor = '#FF9800';
              button2.style.backgroundColor = 'black';
              button3.style.backgroundColor = '#FF9800';
      });

    formButton3.addEventListener('click', function() {
          contentForm1.style.display = 'none';
          contentForm2.style.display = 'none';
          contentForm3.style.display = 'block';
          button1.style.backgroundColor = '#FF9800';
          button2.style.backgroundColor = '#FF9800';
          button3.style.backgroundColor = 'black';
      });

      $("#bigCircleDiv1").click(function(){
        $("#primarySkills div").removeClass("animated");
    });

    bigCircle1.addEventListener('click', function() {
      if (getComputedStyle(codeSkills).display == 'none') {
      codeSkills.style.display = 'block';
      designSkills.style.display = 'none';
      languageSkills.style.display = 'none';
      bigCircle1.style.color = 'white';
      bigCircle2.style.color = 'black';
      bigCircle3.style.color = 'black';
    } else {
      codeSkills.style.display = 'none';
    }
    });

    bigCircle2.addEventListener('click', function() {
      if (getComputedStyle(designSkills).display == 'none') {
      codeSkills.style.display = 'none';
      designSkills.style.display = 'block';
      languageSkills.style.display = 'none';
      bigCircle1.style.color = 'black';
      bigCircle2.style.color = 'white';
      bigCircle3.style.color = 'black';
    } else {
      designSkills.style.display = 'none';
    }
    });

    bigCircle3.addEventListener('click', function() {
      if (getComputedStyle(languageSkills).display == 'none') {
      codeSkills.style.display = 'none';
      designSkills.style.display = 'none';
      languageSkills.style.display = 'block';
      bigCircle1.style.color = 'black';
      bigCircle2.style.color = 'black';
      bigCircle3.style.color = 'white';
    } else {
      languageSkills.style.display = 'none';
    }
    });

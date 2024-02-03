// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
  ]
};

function setNameCodeCourse(course){
  document.querySelector('#courseName').textContent = course.name
  document.querySelector('#courseCode').textContent = course.code
}

function outputSections(course){
  let tbody = document.querySelector('#sections')
  course.sections.forEach(section => {
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.textContent = section.sectionNum
    tr.appendChild(td)
    td = document.createElement('td')
    td.textContent = section.roomNum
    tr.appendChild(td)
    td = document.createElement('td')
    td.textContent = section.enrolled
    tr.appendChild(td)
    td = document.createElement('td')
    td.textContent = section.days
    tr.appendChild(td)
    td = document.createElement('td')
    td.textContent = section.instructor
    tr.appendChild(td)
    tbody.appendChild(tr)
    
  })
}

outputSections(aCourse)
setNameCodeCourse(aCourse)
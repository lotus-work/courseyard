// suggestion
const suggestion = document.getElementById("insert");
suggestion.addEventListener('click', e => {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var title = document.getElementById('title').value;
    var courseLink = document.getElementById('courseLink').value;
    var courseDesc = document.getElementById('courseDesc').value;
    var tags = document.getElementById('tags').value;
    return db.collection('suggestion').doc(email).set({
        UserName: name,
        UserEmail: email,
        CourseTitle: title,
        CourseLink: courseLink,
        CourseDesc: courseDesc,
        CourseTags: tags
    }).then(() => {
        alert('We have recived your suggestion. Thank You !');
        location = "suggest-a-course.html";

    }).catch(err => {
        console.log(err.message);
    })
})
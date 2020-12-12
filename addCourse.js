var title, author, courseLink, courseDesc, tags;

function Ready() {

    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    courseLink = document.getElementById('courseLink').value;
    courseDesc = document.getElementById('courseDesc').value;
    tags = document.getElementById('tags').value;
}


// signup
const addCourse = document.getElementById("insert");
addCourse.addEventListener('click', e => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const courseLink = document.getElementById('courseLink').value;
    const courseDesc = document.getElementById('courseDesc').value;
    const tags = document.getElementById('tags').value;
    // console.log(name, email, password);

    return db.collection('course').doc(tags).set({
        CourseTitle: title,
        CourseAuthor: author,
        CourseLink: courseLink,
        CourseDesc: courseDesc,
        CourseTags: tags
    }).then(() => {
        alert('Course successfully added');
        location = "addData.html";

    }).catch(err => {
        console.log(err.message);
    })
})


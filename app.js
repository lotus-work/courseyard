function readData() {
    var CourseTitle, CourseTags, CourseDesc, CourseAuthor, CourseLink, content;

    db.collection("course")

        .get()
        .then(snap => {
            snap.forEach(doc => {


                content = '';
                CourseTitle = '';
                CourseTags = '';
                CourseDesc = '';
                CourseAuthor = '';
                CourseLink = '';
                CourseTitle = doc.data().CourseTitle;
                CourseTags = doc.data().CourseTags;
                CourseDesc = doc.data().CourseDesc;
                CourseAuthor = doc.data().CourseAuthor;
                CourseLink = doc.data().CourseLink;

                VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

                results = CourseLink.match(VID_REGEX);
                video = (results === null) ? results : results[1];

                //VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/; 

                content += '<div class="col-md-4">' +
                    '<div class="card mb-4 shadow-sm">' +
                    '<img src="' + 'https://i1.ytimg.com/vi/' + video + '/maxresdefault.jpg' + '" width="100%" height="225" alt="">' +
                    ' <div class="card-body">' +
                    '  <div class="d-flex justify-content-between align-items-center">' +
                    ' <div class="btn-group">' +
                    ' <button type="button" class="btn btn-sm btn-outline-success">' + CourseTags + '</button>' +
                    '</div></div>' +
                    '<p class="title" id="courseTitle">' + CourseTitle + '</p>' +
                    '<p class="author">by <strong>' + CourseAuthor + '</strong></p>' +
                    '<p class="desc">' + CourseDesc + '</p>' +
                    ' <div class="d-flex justify-content-between align-items-center">' +
                    '<div class="btn-group">' +
                    '<a href=" ' + CourseLink + '" target="_blank"><button type="button" class="btn btn-sm btn-outline-success">Learn More</button></a>' + '</div>' +

                    '</div></div></div></div>';

                $('#fields').append(content);
                console.log(doc.data().CourseTitle);
            });
        });
}
document.getElementById("resetSearch").style.display = "none";

function resetSearch() {
    location.reload();
}
document.getElementById("loader").style.display = "none";

function loadSearch() {

    document.getElementById("fields").style.display = "none";

    document.getElementById("loader").style.display = "block";
    myVar = setTimeout(searchCourse, 3000);
}
// Search data 
function searchCourse() {

    document.getElementById("fields").style.display = "none";
    document.getElementById("loader").style.display = "none";
    document.getElementById("resetSearch").style.display = "block";
    document.getElementById("clickSearch").style.display = "none";
    var courseName = document.getElementById("inputSearch").value;
    document.getElementById("searchResultText").innerHTML = "Search Result for " + " ' " + courseName + " '";
    var CourseTitle, CourseTags, CourseDesc, CourseAuthor, CourseLink, content;

    db.collection("course")
        .where("CourseTags", "==", courseName)
        .get()
        .then(snap => {

            snap.forEach(doc => {

                content = '';
                CourseTitle = '';
                CourseTags = '';
                CourseDesc = '';
                CourseAuthor = '';
                CourseLink = '';
                CourseTitle = doc.data().CourseTitle;
                CourseTags = doc.data().CourseTags;
                CourseDesc = doc.data().CourseDesc;
                CourseAuthor = doc.data().CourseAuthor;
                CourseLink = doc.data().CourseLink;

                VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

                results = CourseLink.match(VID_REGEX);
                video = (results === null) ? results : results[1];

                //VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/; 

                content += '<div class="col-md-4">' +
                    '<div class="card mb-4 shadow-sm">' +
                    '<img src="' + 'https://i1.ytimg.com/vi/' + video + '/maxresdefault.jpg' + '" width="100%" height="225" alt="">' +
                    ' <div class="card-body">' +
                    '  <div class="d-flex justify-content-between align-items-center">' +
                    ' <div class="btn-group">' +
                    ' <button type="button" class="btn btn-sm btn-outline-success">' + CourseTags + '</button>' +
                    '</div></div>' +
                    '<p class="title" id="courseTitle">' + CourseTitle + '</p>' +
                    '<p class="author">by <strong>' + CourseAuthor + '</strong></p>' +
                    '<p class="desc">' + CourseDesc + '</p>' +
                    ' <div class="d-flex justify-content-between align-items-center">' +
                    '<div class="btn-group">' +
                    '<a href=" ' + CourseLink + '" target="_blank"><button type="button" class="btn btn-sm btn-outline-success">Learn More</button></a>' + '</div>' +

                    '</div></div></div></div>';

                $('#searchFields').append(content);
                console.log(doc.data().CourseTitle);
            });

        });
}
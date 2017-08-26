document.getElementById('issueinputForm').addEventListener('submit', saveIssue);

function fetchIssues(){
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issueslist = document.getElementById('issueList');

  issueList = innerHTML = '';
  for(var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

    issueslist.innerHTML += '<div class="well">'+
                            '<h6>Issues ID: ' +id+ '</h6>' +
                            '<p><span class="label-info">'+ status +'</span></p>'+
                            '<h3>' + desc+ '</h3>'+
                            '<p><span class="glyphicon glyphicon-time"></span>'+ severity +'</p>'+
                            '<p><span class="glyphicon glyphicon-user"></span>' +assignedTo+'</p>'+
                            '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>'+
                            '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                            '</div>';
  }
}

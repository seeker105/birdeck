console.log("Hello");

$(document).ready(function(){
  console.log("Hello");

  // VERB(called METHOD): GET
  // URL: https://turing-birdie.herokuapp.com/api/v1/posts
  $.ajax({
    method: "GET",
    // url: "https://turing-birdie.herokuapp.com/api/v1/posts",
    url: "http://192.168.30.33:3000/api/v1/posts.json",
    datatype: "JSON",
    success: function (posts){
      console.table(posts)
      $(posts).each(function(index, post){
        appendFunction(post)
      })
    }
  })//,
  // error: function(errorResponse){
  //   console.log(errorResponse);
  // }


  $("#create-post").on('click', function(){
    var postDescription = $("#post-description").val()
    $.ajax({
      method: "POST",
      // url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
      url: "http://192.168.30.33:3000/api/v1/posts.json",
      dataType: "JSON",
      data: {post: {description: postDescription}},
      success: function(newPost){
        appendFunction(newPost)
      }
    })
  })

  function appendFunction(post){
    $("#latest-posts").append(
      "<div class='post' contenteditable='true' data-post-id'" + post.id + "'>" + post.description + "</div>"
    )
  }

  $("button[name=button-fetch]").on('click', function(){
    $.ajax({
      method: "GET",
      // url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
      url: "http://192.168.30.33:3000/api/v1/posts.json",
      dataType: "JSON",
      success: function(posts){
        $("#latest-posts").html("")
        console.table("posts")
        $(posts).each(function(index,post){
          appendFunction(post);
        })
      }
    })
  })



  $("button[name=button-update]").on('click', function(){
    $.ajax({
      method: "GET",
      // url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
      url: "http://192.168.30.33:3000/api/v1/posts.json",
      dataType: "JSON",
      success: function(posts){
        $("#latest-posts").html("")
        console.table("posts")
        $(posts).each(function(index,post){
          appendFunction(post);
        })
      }
    })
    $(".post").each(function(index,post){
      debugger
      var content = post.description
      var id = post.id
      $.ajax({
        method: "PUT",
        // url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
        url: "http://192.168.30.33:3000/api/v1/posts.json",
        dataType: "JSON",
        success: function(posts){
        }
      })
    })
  })






});

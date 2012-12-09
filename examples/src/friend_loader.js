$(function(){
  jQuery.fn.addFriendList = function(){
    var that = this;
    $.ajax({
      url:          'friends',
      type:         'GET',
      contentType:  'application/json',
      dataType:     'json',
      success: function(html){
              $(that).html(html);
           }
    });
  }
});

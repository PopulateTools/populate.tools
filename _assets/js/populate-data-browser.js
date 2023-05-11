$(document).ready(function() {

  // Populate Data Browser
  // ToDo: Extract this code to its own files/repository

  $(".pdb_data_list_series a").click(function(e) {
    e.preventDefault();

    $('.pdb_dataset_series').removeClass('slide-out-left');
    $('.p_data_browser').removeClass('slide-in-left');

    $('.p_data_browser').addClass('slide-out-left');
    $('.pdb_dataset_series').addClass('slide-in-left');
  });

  $('.back_to_browse').click(function(e) {
    e.preventDefault();
    $('.p_data_browser').removeClass('slide-out-left');
    $('.pdb_dataset_series').removeClass('slide-in-left');

    $('.pdb_dataset_series').addClass('slide-out-left');
    $('.p_data_browser').addClass('slide-in-left');
  });

  // create social networking pop-ups
  (function() {
    // link selector and pop-up window size
    var Config = {
        Link: "a.share",
        Width: 500,
        Height: 500
    };
    // add handler links
    var slink = document.querySelectorAll(Config.Link);
    for (var a = 0; a < slink.length; a++) {
        slink[a].onclick = PopupHandler;
    }
    // create popup
    function PopupHandler(e) {
        e = (e ? e : window.event);
        var t = (e.target ? e.target : e.srcElement);
        if(t.tagName !== "A"){
          t = t.parentElement;
        }
        // popup position
        var
            px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
            py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);
        // open popup
        var popup = window.open(t.href, "social",
            "width="+Config.Width+",height="+Config.Height+
            ",left="+px+",top="+py+
            ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
        if (popup) {
            popup.focus();
            if (e.preventDefault) e.preventDefault();
            e.returnValue = false;
        }
        return !!popup;
    }
  }());


  $('.menu-story-cue a').click(function(e) {
    e.preventDefault();
  });

});
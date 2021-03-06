function populate_iframe()
{
  chrome.tabs.getSelected(null, function(tab) {
    var settings = new Store("settings", {});
    var options = settings.toObject();
    var base_url;
    console.log(options);
    base_url = options['base_url'];
    if(base_url == null)
    {
      document.getElementById('configure_me').setAttribute('style','display:block');
      document.getElementById('source').setAttribute('style','display:none');
    } else {
      document.getElementById('configure_me').setAttribute('style','display:none');
      document.getElementById('source').setAttribute('style','display:block');
      var url = tab.url;
      var title = tab.title || url;
      var if_url = base_url + '/index.php?post=' + encodeURIComponent(url)+'&title=' + encodeURIComponent(title)+'&source=shiny_shaarli';
      document.getElementById('source').setAttribute('src', if_url);
    }
  });
}

window.onload = function() {
  populate_iframe();
}
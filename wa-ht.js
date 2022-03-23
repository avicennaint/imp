    var url = 'https://avicennaint.com/imp/js/wa-imp.js';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
  "enabled":true,
  "chatButtonSetting":{
      "ctaText":"",
  },
  "brandSetting":{
      "messageText":"*ref:({{page_link}}) Merhaba, saç ekimi hakkında detaylı bilgi ve fiyat alabilir miyim?",
      "phoneNumber":"905413606120"
  }
};
    s.onload = function() {
        var link=window.location.href;
        var idlink=link.split("=");
        console.log(idlink[1]);
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);

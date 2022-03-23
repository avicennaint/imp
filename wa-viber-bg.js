    var url = 'https://avicennaint.com/imp/js/wa-imp-bg.js';
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
      "messageText":"*ref:({{page_link}}) Здравейте! Може ли някой да ми съдейства?",
      "phoneNumber":"905417615241"
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

    var url = 'https://avicennaint.com/imp/js/viber-imp-bg.js';
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
      "messageText":"*ref:({{page_link}}) Здравейте! Може ли някой да ми съдейства?",
      "phoneNumber":"905417615241"
  }
};
    s.onload = function() {
        var link=window.location.href;
        var idlink=link.split("=");
        console.log(idlink[1]);
        CreateViberChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);

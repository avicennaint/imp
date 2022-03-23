function CreateViberChatWidget(option = {
    brandSetting: {
        messageText: "",
        phoneNumber: ""
    },

    enabled: false
}) {
    if (option.enabled == 'false'){
        return;
    }

    if(window.jQuery){
        initWidget();
    }else{
        var script = document.createElement("SCRIPT");
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
        script.type = 'text/javascript';
        script.onload = function() {
            initWidget();
        };
    }
    function initWidget(){
        var link=window.location.href;
        var idlink=link.split("=");
        console.log(idlink[1]);
        
        if (option.brandSetting.messageText) {
            option.brandSetting.messageText = option.brandSetting.messageText.replaceAll("{{page_link}}", encodeURIComponent(idlink[1]));
        }
        jQuery('body').append(`<div id="viber_chat_widget">
            <div id="viber-widget-send-button">
                    <a role="button" target="_blank" href="viber://chat?number=%2B905417615241"><img src="https://avicennaint.com/wp-content/uploads/2021/07/viber-btn-70.png"/>
                    </a>
            </div>
        </div>`);
    }
    
        var styles = `
        #viber_chat_widget{
            display: ${option.enabled?"block":"none"}
        }
        #viber-widget-send-button {
  top: 90%;
  left: 5%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  transition: all 0.3s ease;
  
    opacity: .9;

            position: fixed !important;
            z-index: 16000160 !important;
            cursor: pointer;
            display: flex;
            align-items: center;

        }
        #viber_chat_widget {display: none;}
@media screen and (max-width: 768px) {
#viber_chat_widget {display: block;}
}
        }
    `

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.getElementsByTagName("head")[0].appendChild(styleSheet);

}
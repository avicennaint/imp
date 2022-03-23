function CreateWhatsappChatWidget(option = {
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
        jQuery('body').append(`<div id="whatsapp_chat_widget">
            <div id="wa-widget-send-button">
                    <a role="button" target="_blank" href="https://api.whatsapp.com/send?phone=${option.brandSetting.phoneNumber.replace(/\+/g, "")}&text=${option.brandSetting.messageText?option.brandSetting.messageText:""}"><img src="https://avicennaint.com/wp-content/uploads/2022/02/wa-btn-r-70-imp.webp"/>
                    </a>
            </div>
        </div>`);
    }
    
        var styles = `
        #whatsapp_chat_widget{
            display: ${option.enabled?"block":"none"}
        }
        #wa-widget-send-button {
  top: 90%;
  right: 5%;
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
#whatsapp_chat_widget {display: none;}
@media screen and (max-width: 768px) {
#whatsapp_chat_widget {display: block;}
}
        }
    `

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.getElementsByTagName("head")[0].appendChild(styleSheet);

}

    /*
     * @Name: Notification-js
     * @Type: Javascript Library
     * @Author: CreamGod45
     * @Lang: JavaScript
     * @Version: v2.0
    */

    /*
     *
     * notice_api() push messages to windows Notification Box
     * 
     * @param string $_title Title
     * @param string $_body  Body
     * @param string $_icon  Icon
     * @param string $_badge Badge
     * @param string $_image Image
     * 
     * @return bool 
     * 
     */

    function notice_api(_$title,_$body,_$icon,_$badge,_$image){
       if(window.Notification && Notification.permission !== "denied") {
           Notification.requestPermission(function(_status) {
               var n = new Notification(_$title, { 
                   body: _$body,
                   icon: _$icon,
                   image: _$image
               }); 
           });
           return true;
       }else{
           return false;
       }
    }

     
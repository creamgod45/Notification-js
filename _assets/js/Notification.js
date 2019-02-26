
    /*
     * @Name: Notification-js
     * @Type: Javascript Library
     * @Author: CreamGod45
     * @Lang: JavaScript
    */

    /*
     *
     * notice_api() push messages to windows Notification Box
     * 
     * @param string $_title Title
     * @param string $_body  Body
     * 
     * @return bool 
     * 
     */

     function notice_api(_$title,_$body){
        if(window.Notification && Notification.permission !== "denied") {
            Notification.requestPermission(function(_status) {
                var n = new Notification(_$title, { body: _$body }); 
            });

            return true;
        }else{
            return false;
        }
     }
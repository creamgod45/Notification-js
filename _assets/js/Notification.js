
    /*
     *
     *
     * 
     * 
     * 
     * 
     *  
     */

     function notice_api(_$title,_$body){
        if(window.Notification && Notification.permission !== "denied") {
            Notification.requestPermission(function(_status) {
                var n = new Notification(_$title, { body: _$body }); 
            });
        }
     }
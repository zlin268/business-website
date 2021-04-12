
  //i did try the scrollFire function but somehow it just don' work.
    function scroll(){
            var t = window.scrollY;
            var aboutimg =document.getElementById("aboutimg");
            var m = -0.25;
            var b = 0;
            newY=m*t +b;
            aboutimg.style.backgroundPositionY = newY +"px";
        }
    function scrollFire(){
     
            var t =window.scrollY;
            var nav = document.getElementById("nav");
        
            
            var l1 = document.getElementById("l2");
            var l2 = document.getElementById("l2");
            var l3 = document.getElementById("l3");
            var l4 = document.getElementById("l4");
            
            var s1 = document.getElementById("s1");
            var s2 = document.getElementById("s2");
            var s3 = document.getElementById("s3");
            var s4 = document.getElementById("s4");
            
            var t1 = s1.offsetTop;
            var t2 = s2.offsetTop;
            var t3 = s3.offsetTop;
            var t4 = s4.offsetTop;

            if(t >t4){
                l4.style.borderBottomColor = "gold";
            }else if(t>t3){
                l3.style.borderBottomColor = "gold";
            }else if(t>t2) {
                l2.style.borderBottomColor = "gold";
            }else if(t>t1){
                l1.style.borderBottomColor = "gold";
            }
            l1.style.borderBottomColor = "black";
            l2.style.borderBottomColor = "black";
            l3.style.borderBottomColor = "black";
            l4.style.borderBottomColor = "black";
            
            var sfire = document.getElementById("sfire");
            if(t>2400){
                sfire.style.transform = "scale(2,2)"
            }
    }
            
        //contact section some helper methods
        function isNumber (ch) {

                if (ch >= 48 && ch <= 57) { // Digits
                    return true;
                } else { // Anything else
                    return false;
                }
            }
         function isLetter (ch) {

                if (ch >= 65 && ch <= 90) { // Capital letters
                    return true;
                } else if (ch >= 97 && ch <= 122) { // Lowercase letters
                    return true;
                } else { // Anything else
                    return false;
                }
            }     
        //check name length and number 
          function checkName() {
            var namebox = document.getElementById("name");
            var name = namebox.value; 
         
              
              
            if (name.length > 7) {
                if(isNaN(name)){
                    // Valid.
                 namebox.style.borderColor = "green";
                }
                
                  
            }else{
                 // Invalid.
                namebox.style.borderColor = "red";
            }
            
          }
           //check email form
                function checkEmail () {
                var emailbox = document.getElementById("email");
                var email = emailbox.value;

                var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                
                if (pattern.test(email)) {
                    // Valid.
                    emailbox.style.borderColor = "green";
                    
                } else {
                    // Invalid.
                    emailbox.style.borderColor = "red";
                    
                }

            }
            // for hidden productID box
             function updatepID() {
                
                 var reasonBox = document.getElementById("reasonBox");
                
                var opts = reasonBox.options;
                var si = reasonBox.selectedIndex;
                var sel = opts[si];
                
            
                hideBox();
                     
                 if (sel.index == 3) {
          
                    showBox();
                    
                }
             }
                // use to show product box
                function showBox () {
                var pIDLabel = document.getElementById("pIDLabel");
                var pID = document.getElementById("pID");
                
                pIDLabel.className = "visible";
                pID.className = "visible";
            }
                //hide product box
                function hideBox () {
                var pIDLabel = document.getElementById("pIDLabel");
                var pID = document.getElementById("pID");
                
                pIDLabel.className = "hidden";
                pID.className = "hidden";
    
            }
           //check product ID
            function checkPcode () {
                var pBox = document.getElementById("pID");
                var pCode = pBox.value;

                var c0 = pCode.charCodeAt(0);
                var c1 = pCode.charCodeAt(1);
                var c2 = pCode.charCodeAt(2);
                var c3 = pCode.charCodeAt(3);
                var c4 = pCode.charCodeAt(4);
            
                //simple alogrithm
                if (pCode.length ==5 && isLetter(c0) && isLetter(c1) && isNumber(c2) && isNumber(c3) && isNumber(c4)) {
                    // Valid.
                    pBox.style.borderColor = "green";
                    
                } else {
                    // Invalid.
                    pBox.style.borderColor = "red";
                }
                }
            
            // count the text words
            function updateCharCount(){    
                var msg =document.getElementById("msgBox").value;
            var charCount = msg.length;
            var charMsg = document.getElementById("char_msg");
            charMsg.innerHTML =charCount + " /30"
            if( charCount<30){
                if(charCount>10){
                charMsg.style.color = "green";
                }
            }else{
                charMsg.style.color = "red";
            }
            }
            

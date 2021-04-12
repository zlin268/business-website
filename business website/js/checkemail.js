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
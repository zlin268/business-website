function checkName() {
                var namebox = document.getElementById("name");
                var name = namebox.value;
                
                if (name.length > 7) {
                    // Valid.
                    namebox.style.borderColor = "green";
                    
                } else {
                    // Invalid.
                    namebox.style.borderColor = "red";
                    
                }

            }
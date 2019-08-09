let a = 0;

        function test() {
            a += 1;
            document.getElementById("abc").innerText = a;
        }

        function callServer() {
            window.fetch("http://localhost:8000", {method: "GET"}) //thực hiện lệnh get trên đường link kia//
                .then(function(response) {return response.json();
                })
                .then(function(data) {document.getElementsByClassName("search-box")[0].value = data;
                });
        }
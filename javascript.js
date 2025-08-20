// 1.Input Validation
function Validateform()
{
    let name = document.getElementById("name").value ;
    if (name ===""){
        alert("name is required!");
        return false;
    }
    return true;
    }
    // 2. function with parameter
    function greetUser(name){
        alert("Hello," + name + "!");
        }
        greetUser("THABO");
        // 3.Conditional Function
        function checkService(service){
            if (service === "Driling machine"){
                console.log("Driling machine takes 30 minutes");
                }else{
                    console.log("Hammer takes 10 minutes");
                    }
                    } 
                    // 4.Loop Example
                    function listServices(){
                        const services = ["Driling machine", "Hammer", "Building"];
                        for (let i = 0; i < services.length; i ++ ){
                            console.log("Service: " + services[i]);
                            }
                            }
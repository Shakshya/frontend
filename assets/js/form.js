// information to reach API
const API = "https://new-shakshya.herokuapp.com/api";


// selecting page elements
const title = document.querySelector("#title");
const maintext = document.querySelector("#maintext");
const link = document.querySelector("#link");

const submit1 = document.querySelector("#submit1");
const submit2 = document.querySelector("#submit2");

//function for para
const forPara = () => {
  const data = { title: title.value, maintext: maintext.value };

  fetch("https://new-shakshya.herokuapp.com/api", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Success:", data);
      modalConfirm(data);
      //alert(data);
    })
    .catch((error) => {
        alert(error);
      console.error("Error:", error);
    });
};

// function for link
const forLink = () => {
  const endPoint = API + "?link=" + link.value;

  fetch(endPoint)
    .then((response) => {
      console.log(typeof response);
     return response.text()
    })
    .then((data) => {
        modalConfirm(data);
      console.log(data);
    //   alert(data);
    })
    .catch((error) => {
        alert(error);
      console.error("Error:", error);
    });
};

// calling of functions 
const checkLink = (event) => {
  event.preventDefault();
  forLink();
};

const checkPara = (event) => {
  event.preventDefault();
  forPara();
};

var modalConfirm = function(data){
  
    /*
    $("#btn-confirm").on("click",
     function()
     {
        if(data == "fake")
        {
            callback("This is looking Like Fake News")
        }
        else
        {
            callback("This is looking Like Real News")
        }
        $("#mi-modal").modal('show');
    }

    );*/

    //new code

    if(data.substring(1,5) == "fake")
    {
  
        $("#myModalLabel").html("Appears to be Fake");
        //callback("Not sure, but appears to be Fake")
    }
    else
    {
      $("#myModalLabel").html("Appears to be Real");
        //callback("Not sure, but appears to be Real")
    }
    $("#mi-modal").modal('show');
  
   // end
    
    $("#modal-btn-no").on("click", function(){
      $("#mi-modal").modal('hide');
    });

  };
  

  //just for check
  /*
  modalConfirm("fake",function(message){
   $("#myModalLabel").html(message);
  });*/
  

//actions after click

submit1.addEventListener("click", checkPara);
submit2.addEventListener("click", checkLink);

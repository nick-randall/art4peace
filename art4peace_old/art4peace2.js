
    window.onscroll = function() {
        stickyScroll(); 
        fadeTextandNavBar()
        highlightNavElement();}
    window.onresize = function() {remeasureTitlePhoto()};
    
    var currentLanguage;

    if (currentLanguage == null) setLanguage ('en');
    
    function remeasureTitlePhoto(){

        textTop = document.getElementById("title-photo").offsetHeight;
        textHeight = text.clientHeight;
        fadeText();
    }
    var header = document.getElementById("header-container");
    var sticky = header.offsetTop - 10;

    function stickyScroll() {

      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    var text = document.getElementById("main-text");
    var textTop = document.getElementById("title-photo").offsetHeight;
    var textHeight = text.clientHeight;
    var bottomscrollpoint = (window.innerHeight + window.pageYOffset);
    var textFade = (bottomscrollpoint - textTop)/textHeight;
    var headerFade = 0;
    var home = document.getElementById("home");
    var homeButton = document.getElementById("home-button");
    var about = document.getElementById("about");
    var aboutButton = document.getElementById("about-button");
    
    function fadeTextandNavBar(){
    textTop = document.getElementById("title-photo").offsetHeight;
      bottomscrollpoint = (window.innerHeight + window.pageYOffset);
      fadeText(textTop, bottomscrollpoint);
      fadeNavBar(textTop, bottomscrollpoint);
    }
    

    function fadeText(textTop, bottomscrollpoint){
      if (bottomscrollpoint > textTop)
          textFade = (bottomscrollpoint - textTop-140)/textHeight;
      text.style.color = `rgba(200, 200, 200, ${textFade})`
    }
   
    function fadeNavBar(textTop, bottomscrollpoint){
      if (bottomscrollpoint > textTop)
          headerFade = (bottomscrollpoint/1000);
      //text.style.color = `rgba(255, 255, 255, ${textFade})`
      header.style.background = `rgba(255, 255, 255, ${headerFade})`      
    }
    function highlightNavElement(){
      homeTop = home.getBoundingClientRect().top;
      aboutTop = about.getBoundingClientRect().top;
      homeBottom = text.getBoundingClientRect().bottom;
      console.log("homeTop " + homeTop);
      if (window.pageYOffset > homeTop && window.pageYOffset < homeBottom)
      homeButton.style.background = 'red'
      else homeButton.style.background = 'white'

    }

    function setLanguage(language){
        var textBlockList = (document.getElementsByClassName("text-block"));
        for (i=0; i<textBlockList.length; i++){
            if (textBlockList[i].lang == language){
                textBlockList[i].classList.remove('hidden');  
                currentLanguage = language;}
            else textBlockList[i].classList.add('hidden'); 

            
        }

    }

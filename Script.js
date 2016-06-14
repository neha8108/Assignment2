function myFunction() {

   var query = document.getElementById('name').value;
   var typeWanted = 'movie';

   $.ajax({
       type: "GET",
       url: "http://www.omdbapi.com/?",
       data: {
           t: query,
           type: typeWanted
       },
       success: function (response) {


           console.log(response);

           var images = document.getElementsByTagName('img');
           var l = images.length;
           for (var i = 0; i < l; i++) {
               images[0].parentNode.removeChild(images[0]);
           }

           var im = document.createElement('img');
           im.setAttribute('src', response.Poster);
           document.body.appendChild(im);


           $("#title").html("Title: "+response.Title);
           $("#year").html("Title: "+response.Year);
           $("#Release date").html("Title: "+response.Released);

           
       },
   });

}


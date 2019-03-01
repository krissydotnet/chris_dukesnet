$(document).ready(function () {
    console.log("ready!");
    /* Load drop down list */
    var options = [
        {
            "name": "Raleway",
            "value": 1,
            "code": "'Raleway', sans-serif",
            "weight": "bold"
        },
        {
            "name": "Oswald",
            "value": 2,
            "code": "'Oswald', sans-serif",
            "weight": "bold"
        },
        {
            "name": "Roboto Slab",
            "value": 3,
            "code": "'Roboto Slab', sans-serif",
            "weight": "bold"
        },
        {
            "name": "Noto Sans",
            "value": 4,
            "code": "'Noto Sans', sans-serif",
            "weight": "bold"
        },
        {
            "name": "Fjalla One",
            "value": 5,
            "code": "'Fjalla One', sans-serif",
            "weight": "bold"
        },
        {
            "name": "Dosis",
            "value": 6,
            "code": "'Dosis', sans-serif",
            "weight": "bold"
        },
        {
            "name": "Catamaran",
            "value": 7,
            "code": "'Catamaran', sans-serif",
            "weight": "bold"
        }
    ];
    var h1 = $('.my-name');
    h1.css("font-family", options[0].code);
    var h2 = $('.my-info');
    h2.css("font-family", options[0].code);
    
    let header1= $('#header1');
    let header2=$('#header2');
    $.each(options, function (key, entry) {
        header1.append($('<option></option>').attr('value', entry.value).text(entry.name));
        header2.append($('<option></option>').attr('value', entry.value).text(entry.name));
      });

      $( "#header1" ).change(function() {
        
        var value = header1.prop('selectedIndex');
        console.log(options[value].code)
        h1.css("font-family", options[value].code);
      });
      $( "#header2" ).change(function() {
       
        var value = header2.prop('selectedIndex');
        h2.css("font-family", options[value].code);
      });
     


});



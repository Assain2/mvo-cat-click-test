$(function() {

// Features used in Cat object
  var features = {
    names: ['Catty', 'Catsy', 'Kitty', 'Cattat', 'Kitten', 'Cattini'],
    pictures: ['http://img2.timeinc.net/health/img/web/2013/03/slides/cat-allergies-400x400.jpg',
              'https://d20suvt5sog3wj.cloudfront.net/wp-content/uploads/2017/01/ourfriends4ever_cat_kitten_purring-1-400x400.jpg?x10150',
              'http://redalertpolitics.com/files/2013/06/Hamilton-the-hipster-cat1-400x400.jpg',
              'https://d20suvt5sog3wj.cloudfront.net/wp-content/uploads/2017/01/ourfriends4ever_cat_snow_outdoor-1-400x400.jpg?x10150',
              'https://www.snowflakerescue.org/media/cat-tear-400x400.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sW-1MqO86nzMrQ1fsf_e1ecU2FyxnEGjj4gwIawMvi08ZoiA'
            ]
  }

// Utilities that other functions refer to
  var utilities = {
    // Function that is used to shuffle elements from 'features' arrays
    shuffle: function (array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }
      return array;
    },

    catsArr: []
  }

// Cat object
  var Cat = function(name, img, id){
    this.name = name
    this.img = img
    this.id = id
    this.clicks = 0;
  };

// Function that transfers new Cat properties to DOM
  Cat.prototype.moveToDom = function() {
    var catList = $('.cat-list');
    catList.append(
      $('<li>').attr('id', this.id).append(
          $('<img>').attr('src', this.img)
        ));

      $('#' + this.id).append(
        $('<h3>').text(this.name),
        $('<p>').text('Clicks: ' + this.clicks)
        );

        // Event listener for Cat cards
      $('#' + this.id).click(function() {
        var clicked = $(this);
        var idNum = clicked.prop('id');

        if (clicked.siblings('li').hasClass('selected')) {
          catList.find('li').removeClass('selected');
          clicked.addClass('selected');
        } else if (clicked.hasClass('selected')) {
          utilities.catsArr[idNum].clicks++;
          clicked.children('p').text('Clicks: ' + utilities.catsArr[idNum].clicks);
        } else if (!(clicked.hasClass('selected'))) {
          clicked.addClass('selected');
        }

    });
  };

// Function that initiates all functions and renders the DOM
  (function init(){
    utilities.shuffle(features.names);
    utilities.shuffle(features.pictures);
    for (var i = 0; i < features.names.length; i++) {
      var currentName = features.names[i];
      var currentPic = features.pictures[i];
      var currentId = i.toString();
      utilities.catsArr.push(new Cat(currentName, currentPic, currentId));
      utilities.catsArr[i].moveToDom();
    }
  })();

});

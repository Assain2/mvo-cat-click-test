/* ======== DATA ======== */

var data = {
  currentCat: null,
  Cat: function(name, img, id) {
    this.name = name
    this.img = img
    this.id = id
    this.clickTrack = 0;
  },

   names: ['Catty', 'Catsy', 'Kitty', 'Cattat', 'Kitten', 'Cattini'],
   pictures: ['http://img2.timeinc.net/health/img/web/2013/03/slides/cat-allergies-400x400.jpg',
              'https://d20suvt5sog3wj.cloudfront.net/wp-content/uploads/2017/01/ourfriends4ever_cat_kitten_purring-1-400x400.jpg?x10150',
              'http://redalertpolitics.com/files/2013/06/Hamilton-the-hipster-cat1-400x400.jpg',
              'https://d20suvt5sog3wj.cloudfront.net/wp-content/uploads/2017/01/ourfriends4ever_cat_snow_outdoor-1-400x400.jpg?x10150',
              'https://www.snowflakerescue.org/media/cat-tear-400x400.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sW-1MqO86nzMrQ1fsf_e1ecU2FyxnEGjj4gwIawMvi08ZoiA'
            ],
  catsArr: []
};

/* ======== OCTOPUS ======== */

var octopus = {
  // Initiate new Cat instances
  init: function() {
    for (var i = 0; i < data.names.length; i++) {
      var currentName = data.names[i];
      var currentPic = data.pictures[i];
      var currentId = i.toString();
      data.catsArr.push(new data.Cat(currentName, currentPic, currentId))
      // Call render function to draw new cat Cards
      view.render(data.catsArr[i].id, data.catsArr[i].img, data.catsArr[i].name, data.catsArr[i].clickTrack);
    }
  },

  // Set the clicked cat card to use in other functions
  setCurrentCat: function(cat) {
    data.currentCat = cat;
  },

  // Increment the click number of the currently selected cat card
  incrementClicks: function(id, cat) {
    if (data.currentCat !== data.catsArr[id]) {
      this.setCurrentCat(cat)
    } else if (data.currentCat.img === data.catsArr[id].img) {
      data.currentCat.clickTrack++;
    }
  },

  // Feature the currently selected cat card
  highlight: function(element, parent, newClass) {
    if (!parent.children().hasClass(newClass)) {
      element.addClass(newClass);
    } else if (parent.children().hasClass(newClass)) {
      parent.children().removeClass(newClass);
      element.addClass(newClass);
    }
  },

  // Update the data to the screen
  update: function(chunk, newText) {
    chunk.text(newText + data.currentCat.clickTrack);
  }
};

/* ======== VIEW ======== */

var view = {
  // Initial data render to the screen
  render: function(id, img, name, clicks) {
    var catList = $('.cat-list');
    var clicked = $(this);
    var theClass = 'selected';

    // Create cat cards nodes in the cat list UL
    catList.append(
      $('<li>').attr('id', id).append(
          $('<img>').attr('src', img)
        ));

      $('#' + id).append(
        $('<h3>').text(name),
        $('<p>').text('Clicks: ' + clicks)
        );

      // Add event listeners to each cat card
      $('#' + id).click(function(){
        var clicked = $(this);
        var theText = 'Clicks: ';
        var clickPar = clicked.find('p');
        octopus.incrementClicks(id, data.catsArr[id]);
        octopus.highlight(clicked, catList, theClass);
        octopus.update(clickPar, theText);
      });
  },
};

// Initialize the app
octopus.init();

/* ======== DATA ======== */

var data = {
  Cat: function(name, img, id) {
    this.name = name
    this.img = img
    this.id = id
    this.clicks = 0;
    this.selected = false;
  },

   names: ['Catty', 'Catsy', 'Kitty', 'Cattat', 'Kitten', 'Cattini'],
   pictures: ['http://img2.timeinc.net/health/img/web/2013/03/slides/cat-allergies-400x400.jpg',
              'https://d20suvt5sog3wj.cloudfront.net/wp-content/uploads/2017/01/ourfriends4ever_cat_kitten_purring-1-400x400.jpg?x10150',
              'http://redalertpolitics.com/files/2013/06/Hamilton-the-hipster-cat1-400x400.jpg',
              'https://d20suvt5sog3wj.cloudfront.net/wp-content/uploads/2017/01/ourfriends4ever_cat_snow_outdoor-1-400x400.jpg?x10150',
              'https://www.snowflakerescue.org/media/cat-tear-400x400.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sW-1MqO86nzMrQ1fsf_e1ecU2FyxnEGjj4gwIawMvi08ZoiA'
            ]

};


/* ======== OCTOPUS ======== */

var octopus = {
  createCat: function(){
    for (var i = 0; i < data.names.length; i++) {
      var currentName = data.names[i];
      var currentPic = data.pictures[i];
      var currentId = i.toString();
      view.catsArr.push(new Cat(currentName, currentPic, currentId));
      view.structure(this.id, this.img, this.name, this.clicks);
    }
  }
};

/* ======== VIEW ======== */

var view = {
  structure: function(id, img, name, clicks) {
    var catList = $('.cat-list');

    catList.append(
      $('<li>').attr('id', id).append(
          $('<img>').attr('src', img)
        ));

      $('#' + id).append(
        $('<h3>').text(name),
        $('<p>').text('Clicks: ' + clicks)
        );
  },
  catsArr: []
};

octopus.createCat();

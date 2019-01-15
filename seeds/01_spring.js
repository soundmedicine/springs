
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "spring"; ALTER SEQUENCE spring_id_seq RESTART WITH 2;')
    .then(function () {
      let springs = [{
        id: 1,
        name: 'Glenwood Hot Springs',
        description: 'Largest hot springs establishment in Colorado, right off I-70.',
        location: 'Glenwood Springs, CO',
        access_rating: 4,
        url: 'https://www.hotspringspool.com/'
      },{
        id: 2,
        name: 'Radium Hot Springs',
        description: 'Undeveloped hot springs off the Colorado River. Multiple trailheads off of Trough Road, south of Kremmling, north of Silverthorne.',
        location: 'Radium, CO',
        access_rating: 0,
        url: 'https://www.uncovercolorado.com/hot-springs/radium-hot-springs/'
      }, {
        id: 3,
        name: 'Iron Mountain Hot Springs',
        description: 'Newest hot springs establishment in Glenwood Springs.',
        location: 'Glenwood Springs, CO',
        access_rating: 1,
        url: 'https://www.ironmountainhotsprings.com/'
      }, {
        id: 4,
        name: 'Penny Hot Springs',
        description: 'Undeveloped hot springs on Avalanche Creek, right off Highway 133.',
        location: 'Carbondale, CO',
        access_rating: 0,
        url: 'https://www.uncovercolorado.com/hot-springs/penny-hot-springs/'
      }]
      return knex('spring').insert(springs);
    });
};

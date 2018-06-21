
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(() => knex('posts').del())
    .then(() => knex('users').del())
    .then(() => {
      return knex('users').insert([
        {id: 1, email: 'noel@michelada.io', full_name: 'Noel Escobedo'},
        {id: 2, email: 'david@michelada.io', full_name: 'David Padilla'},
        {id: 3, email: 'alexis@michelada.io', full_name: 'Alexis Navarro'}
      ]).then(() => {
        return knex('posts').insert([
          {
            id: 1,
            thumbnailUrl: 'https://instagram.fbna1-1.fna.fbcdn.net/vp/31c45306e6ca815b8c59940aed10cedc/5B2D3C88/t51.2885-19/11201517_887808411287357_1307163552_a.jpg',
            imageUrl: 'https://instagram.fbna1-1.fna.fbcdn.net/vp/557a29d3526bc7f813c2a784d82de7d3/5B4E3E05/t51.2885-15/e35/26065916_2007800899433580_5879937492399947776_n.jpg',
            likes: 2,
            user_id: 1
          },
          {
            id: 2,
            thumbnailUrl: 'https://instagram.fbna1-1.fna.fbcdn.net/vp/31c45306e6ca815b8c59940aed10cedc/5B2D3C88/t51.2885-19/11201517_887808411287357_1307163552_a.jpg',
            imageUrl: 'https://instagram.fbna1-1.fna.fbcdn.net/vp/557a29d3526bc7f813c2a784d82de7d3/5B4E3E05/t51.2885-15/e35/26065916_2007800899433580_5879937492399947776_n.jpg',
            likes: 10,
            user_id: 3
          }
        ]);
      }).then(() => {
        return knex('comments').insert([
          {id: 1, post_id: 1, text: 'Primer comentario!', user_id: 2},
          {id: 2, post_id: 1, text: 'Segundo comentario :(', user_id: 3},
          {id: 3, post_id: 1, text: 'Hola hackers', user_id: 3},
        ]);
      });
    })
};


exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('posts', function(t) {
      t.increments('id').primary();
      t.text('thumbnailUrl');
      t.text('imageUrl');
      t.integer('likes');
      t.integer('user_id').references('users.id');
      t.timestamps();
    })
    .createTable('comments', function(t) {
      t.increments('id').primary();
      t.text('text');
      t.integer('post_id').references('posts.id');
      t.integer('user_id').references('users.id');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('comments')
    .dropTableIfExists('posts');
};

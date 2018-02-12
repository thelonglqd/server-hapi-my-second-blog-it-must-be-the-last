import { User, Post, Like, Comment, Group } from '../models/';

const seed = async () => {
  const user1 = await User.create({
    username: 'admin',
    password: '123456',
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
  });

  const user2 = await User.create({
    username: 'longntp',
    password: '123456',
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
  });

  const adminGroup = await Group.create({
    name: 'admins',
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
  });

  const friendGroup = await Group.create({
    name: 'friends',
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
  });

  user1.addGroup(adminGroup);
  user2.addGroup(adminGroup);
  user2.addGroup(friendGroup);

  await Promise.all([
    Post.create({
      content: 'seeded post',
      user_id: 1,
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    }),
    Comment.create({
      content: 'comment for seeded post',
      user_id: 1,
      post_id: 1,
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    }),
    Like.bulkCreate([
      {
        type: 'Post',
        user_id: 1,
        post_id: 1,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
      {
        type: 'Comment',
        user_id: 1,
        comment_id: 1,
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      },
    ]),
  ]);
};

export default seed;

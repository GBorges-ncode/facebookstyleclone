import React, { Component } from 'react';

import Posts from './Posts';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Jack Sparow",
          avatar: "https://www.californiaherald.com/wp-content/uploads/2020/03/jack-sparrow.jpg",
        },
        date: "2019 Dez 01",
        content: "Did anyone watched the new Pirates of Caribbean movie, yet?",
        comments: [
          {
            id: 1,
            author: {
              name: "Obi-wan Kenobi",
              avatar: "https://i1.sndcdn.com/avatars-000076940968-lkv6qt-t500x500.jpg",
            },
            content: "Sorry, I don't like pirates !"
          },
          {
            id: 2,
            author: {
              name: "Yoda",
              avatar: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125",
            },
            content: "Excellent the movie is !"
          },
        ]
      },
      {
        id: 2,
        author: {
          name: "Elon Musk",
          avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/75/755f87b22d0cf6f2dacd7e259d4b0023f17d8571_full.jpg",
        },
        date: "2019 Dez 03",
        content: "Anyone looking to buy a new car?",
        comments: [
          {
            id: 1,
            author: {
              name: "Tony Stark",
              avatar: "https://imagens.canaltech.com.br/celebridades/78.400.jpg",
            },
            content: "I am!"
          },
          {
            id: 2,
            author: {
              name: "Tony Stark",
              avatar: "https://imagens.canaltech.com.br/celebridades/78.400.jpg",
            },
            content: "Not eletric though !"
          },
          {
            id: 3,
            author: {
              name: "Bill Gates",
              avatar: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
            },
            content: "Ouch !"
          }
          
        ]
      },
      {
        id: 3,
        author: {
          name: "Linus",
          avatar: "https://avatars.sched.co/6/28/9047161/avatar.jpg?4a3",
        },
        date: "2019 Dez 15",
        content: "@Bill Gates, can I have a Windows 11 beta version before Christmas?",
        comments: [
          {
            id: 1,
            author: {
              name: "Bill Gates",
              avatar: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
            },
            content: "Are you serious right now?"
          },
          {
            id: 2,
            author: {
              name: "Mark",
              avatar: "https://www.smartinsights.com/wp-content/uploads/2018/11/Mark-Zuckerberg.jpg",
            },
            content: "OMG !!!"
          }
          
        ]
      },
    ],
  }

  render () {
    const { posts } = this.state;

    return (
      <div className="postlist">  
        {posts.map(post => (
          <Posts key={post.id} {...post} />
        ))}
      </div>
      
    );
  }
}

export default PostList;
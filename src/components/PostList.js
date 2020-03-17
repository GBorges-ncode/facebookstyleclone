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
          name: "Anakin",
          avatar: "https://pm1.narvii.com/6925/f2111932b97267eeacf3ffc0f783961a5543f5der1-1400-1400v2_hq.jpg",
        },
        date: "2019 Dez 03",
        content: "I'm so nervous right now, please help?",
        comments: [
          {
            id: 1,
            author: {
              name: "Obi-wan Kenobi",
              avatar: "https://i1.sndcdn.com/avatars-000076940968-lkv6qt-t500x500.jpg",
            },
            content: "Panicking Skywalker !!!"
          },
          {
            id: 2,
            author: {
              name: "Chewbacca",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ34hzt2vupJJopu9UyEy2cPs0ZVvsfy3U6YusVAa65vz7Nq4Hg",
            },
            content: "AAARARRRGWWWH!!!"
          },
          {
            id: 3,
            author: {
              name: "Han Solo",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi1xwsHfl6vhUmUGGDLMf4dxy-Umm5XLV1KLo_ActS4p_jmwnf",
            },
            content: "Not funny, chewie!"
          }
          
        ]
      },
      {
        id: 3,
        author: {
          name: "Trooper",
          avatar: "https://vignette.wikia.nocookie.net/pt.starwars/images/4/46/Stormtrooper_Anovos.png/revision/latest/top-crop/width/360/height/450?cb=20170103164542",
        },
        date: "2019 Dez 15",
        content: "@Start Wars producers. Why did the movies come out 4, 5, 6, 1, 2, 3?",
        comments: [
          {
            id: 1,
            author: {
              name: "Yoda",
              avatar: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125",
            },
            content: "In charge of scheduling, I was!"
          },
          {
            id: 2,
            author: {
              name: "Rey",
              avatar: "https://avatarfiles.alphacoders.com/120/120620.jpg",
            },
            content: "OMG, Is it true?"
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
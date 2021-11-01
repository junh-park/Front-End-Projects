import React from 'react';
import Tweet from "./Tweet";

const Tweets = () => {
    const tweets = [
        {name: 'jun', tweet: 'react react'},
        {name:'media', tweet: 'whats up guys'},
        {name: 'hellohl', tweet: 'whats going on, siren is rining'}
    ];

    return (
    <section>
        <h1>Hi App, I have {tweets.length} tweets</h1>
        {
        tweets.map(tweet => (
            <Tweet key={tweet.name} name={tweet.name} tweet={tweet.tweet}/>           
        ))
        }
    </section>
    );
};

export default Tweets;
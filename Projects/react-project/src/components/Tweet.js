import React from 'react';

const Tweet = (props) => (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.tweet}</h1>
    </div>
);

export default Tweet;
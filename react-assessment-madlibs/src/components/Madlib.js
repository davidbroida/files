import React from 'react';

const Madlib = ({ id, noun, noun2, adjective, color }) => {
  let randInt = Math.floor(Math.random() * 3);

  if (id === '') {
    return null;
  } else if (randInt === 0) {
    return (
      <div>
        <p>
          <b>
            Once upon a time there was a very happy {noun} who was walking through the {noun2} and
            came across another very {adjective} {noun} who had a full head of {color} colored hair!
          </b>
        </p>
      </div>
    );
  } else if (randInt === 1) {
    return (
      <div>
        <p>
          <b>
            Hundreds of years ago in a land far away there was a {noun} who was madly in love with a{' '}
            {noun2}. One day the {noun} finally met the {noun} who turned out to be an incredibly{' '}
            {adjective} {noun}. The two of them built a {color} house together and lived happily
            ever after.
          </b>
        </p>
      </div>
    );
  } else if (randInt === 2) {
    return (
      <div>
        <p>
          <b>
            Four score and 7 years ago a {noun} decided to on on a road trip with his favorite{' '}
            {noun2}. Half way through the trip the two came across a really {adjective} place that
            was a beautiful color of {color}, so they decided to end their trip and write a story
            about it. This is that story.
          </b>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <b>
            The most entertaining thing that any {noun} can possibly to is find a {noun2} and make a{' '}
            {adjective} story about it! Step get a {color} colored pen and start writing your heart
            out like I am doing right now!
          </b>
        </p>
      </div>
    );
  }
};

export default Madlib;

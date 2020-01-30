import React from 'react';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className='Home container'>
        <h1>Home</h1>
        <p>
          Imagine, if you will, a world in which the Battle of Hastings in 1066 was won not by William the Bastard but by Harold Godwinson,
           and the Norman Conquest of England therefore never happened.
        </p>
        <p>
          Anglish is the name given to the way the English language may have looked without the extensive influence of French words.
            We choose words of Anglo-Saxon origin over those of French, Latin or Greek wherever possible (particularly where those words were borrowed into
             the language after 1066 or so), and often revive words from the past that were forced out of the language in favor of such borrowings.
        </p>
        <p>
          So, say 'split' instead of 'divide', 'birdlore' instead of 'ornithology', and even 'frith' instead of 'peace'.  Our Old English forebears will thank you for it.
        </p>
      </div>
    );
  }
}

export default Home;

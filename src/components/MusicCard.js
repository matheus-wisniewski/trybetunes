import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { music } = this.props;
    const { trackNumber, trackName, previewUrl } = music;
    return (
      <main>
        <div key={ trackNumber }>
          <h3>{trackName}</h3>
        </div>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
      </main>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.object,
}.isRequired;

export default MusicCard;

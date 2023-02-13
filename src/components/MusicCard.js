import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  state = {
    loading: false,
    checked: false,
  };

  handleChange = async () => {
    const { music } = this.props;
    this.setState({
      loading: true,
    });
    await addSong(music);
    this.setState({
      loading: false,
      checked: true,
    });
  };

  render() {
    const { music } = this.props;
    const { trackNumber, trackName, previewUrl, trackId } = music;
    const { loading, checked } = this.state;
    return (
      <main>
        <div key={ trackNumber }>
          <h3>{trackName}</h3>
        </div>

        <label htmlFor={ trackId } data-testid={ `checkbox-music-${trackId}` }>
          Favorita
          <input
            type="checkbox"
            id={ trackId }
            checked={ checked }
            onChange={ this.handleChange }
          />
        </label>
        { loading && <Loading />}

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

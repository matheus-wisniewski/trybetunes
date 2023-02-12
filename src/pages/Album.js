import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  state = {
    songsList: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const fetchMusics = await getMusics(id);
    this.setState({
      songsList: fetchMusics,
    });
  }

  render() {
    const { songsList } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-album">
          { songsList.length > 0 && (
            <>
              <h1 data-testid="artist-name">{songsList[0].artistName}</h1>
              <h1 data-testid="album-name">{songsList[0].collectionName}</h1>

              <section>
                {songsList.filter((e, index) => index !== 0).map((music) => (
                  <MusicCard key={ music.trackId } music={ music } />
                ))}
              </section>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Album;

Album.propTypes = {
  id: PropTypes.string,
}.isRequired;

import React from 'react';


import { fetchImages } from 'services/api';
import { SearchBar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import { Loader } from './Loader/Loader'
import {Modal} from './Modal/Modal'


export class App extends React.Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalHits: null,
    error: null,
    isLoading: false,
    showModal: false,
    modalImage: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      try {
        const { page, query } = this.state;
        this.setState({ isLoading: true });
        const { hits, totalHits } = await fetchImages(query, page);
        if (totalHits < 1) {
          this.setState({
            error: `${query} не найдено. Измените запрос.`,
          });
        } else {
          this.setState({
            error: null,
          });
        }

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...hits],
            totalHits: totalHits,
          };
        });
      } catch (error) {
        this.setState({
          error: 'Что-то пошло не так...',
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = event => {
    if (event.target.elements.query.value === this.state.query) {
      return;
    }

    this.setState({
      query: event.target.elements.query.value,
      images: [],
    });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  showModal = largeImage => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal,
        modalImage: largeImage,
      };
    });
  };

  render() {
    const { error, images, modalImage } = this.state;
    const lastPage = Math.ceil(this.state.totalHits / 12) > this.state.page;

    return (
      <div>
        <SearchBar
          handleSubmit={event => {
            this.handleSubmit(event);
          }}
        />
        {images && <ImageGallery images={images} />}

        {images.length > 0 && lastPage && (
          <Button onClickLoadMore={this.loadMore} />
        )}

        {error && <p style={{ color: 'red' }}> {error} </p>}

        {this.state.isLoading && <Loader />}

        {this.state.showModal && (
          <Modal showModal={this.showModal} largeImage={modalImage} />
        )}
      </div>
    );
  }
}

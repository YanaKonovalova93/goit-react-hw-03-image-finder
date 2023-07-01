import React, { Component } from 'react';
import { Input, ButtonLabel, Button, Form, SearchbarBox } from './Searchbar.styled';


export class SearchBar extends Component {
  state = {
    inputQuery: '',
  };

  changeInput(event) {
    this.setState({
      inputQuery: event.target.value,
    });
  }

  inputSubmit(event) {
    event.preventDefault();

    if (event.target.elements.query.value.trim() === '') {
      return;
    }

    this.props.handleSubmit(event);

    this.setState({ inputQuery: '' });
  }

  render() {
    return (
      <SearchbarBox>
        <Form
          onSubmit={event => {
            this.inputSubmit(event);
          }}
        >
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            name="query"
            value={this.state.inputQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={e => {
              this.changeInput(e);
            }}
          />
        </Form>
      </SearchbarBox>
    );
  }
}

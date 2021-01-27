import { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
      author {
        name
        age
      }
    }
  }
`;

class BookList extends Component {
  render() {
    let { books } = this.props.data;
    return (
      <div>
        <h1>BookList</h1>
        {books ? (
          <div>
            {books.map((book) => {
              return <p key={book.id}>{book.name}</p>;
            })}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

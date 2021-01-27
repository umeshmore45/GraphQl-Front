import Head from "next/head";
import BookList from "../component/BookList";
import styles from "../styles/Home.module.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//apollo client setup

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

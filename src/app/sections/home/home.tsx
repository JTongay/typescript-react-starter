import { Typography } from '@material-ui/core';
import * as React from 'react';
import { useFetch } from 'react-hooks-fetch';
import './home.scss';

const HomeData: React.FC = () => {
  const { data, error } = useFetch('https://pokeapi.co/api/v2/pokemon/ditto/');
  if (error) {
    // Set up your error boundary and throw that error here
    return <p>you dun goofed</p>;
  }
  if (!data) {
    return null;
  }
  return <span>{data.name}</span>;
};

const Home: React.FC<any> = (props) => {
  return (
    <section className="home-section">
      <Typography variant="h1" color="primary">
        Booyah
      </Typography>
      <React.StrictMode>
        <React.Suspense fallback={<span>loading...</span>}>
          <HomeData />
        </React.Suspense>
      </React.StrictMode>
    </section>
  );
};

export default Home;

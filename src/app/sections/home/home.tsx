import { Typography } from '@material-ui/core';
import useAxios from 'axios-hooks';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import './home.scss';

const HomeData: React.FC = () => {
  const [{ data, loading, error }, refetch] = useAxios('https://pokeapi.co/api/v2/pokemon/ditto/');
  if (loading) {
    return <span>loading...</span>;
  }
  if (error) {
    // Set up your error boundary and throw that error here
    return null;
  }
  return (
    <React.Fragment>
      <button onClick={refetch}>Refresh!</button>
      <span>{data.name}</span>
    </React.Fragment>
  );
};

const Home: React.FC<any> = (props) => {
  // console.log(useAxios);
  return (
    <section className="home-section">
      <Typography variant="h1" color="primary">
        Booyah
      </Typography>
      <HomeData />
      <React.Suspense fallback={<span>loading...</span>}>
        <HomeData />
      </React.Suspense>
    </section>
  );
};

export default Home;

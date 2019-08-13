import { Typography } from '@material-ui/core';
import * as React from 'react';
import { useFetch } from 'react-hooks-fetch';
import * as SocketIOClient from 'socket.io-client';

const LoginData: React.FC = () => {
  const { data, error } = useFetch('http://localhost:4200/test');
  if (error) {
    // Set up your error boundary and throw that error here
    throw Error();
  }
  if (!data) {
    return null;
  }
  return <span>{data.message}</span>;
  // throw Error();
};

const Login: React.FC<any> = (props) => {
  const socket = SocketIOClient('http://localhost:4200');
  const [data, setData] = React.useState();
  React.useEffect(() => {
    socket.on('test', (res: any) => setData(res));
  });
  return (
    <section className="home-section">
      <Typography variant="h1" color="primary">
        Login
      </Typography>
      <React.StrictMode>
        {data
          ? <p>Got data from socket! {data.hello}</p>
          : <p>Loading...</p>
        }
        <React.Suspense fallback={<span>loading...</span>}>
          <LoginData />
        </React.Suspense>
      </React.StrictMode>
    </section>
  );
};

export default Login;

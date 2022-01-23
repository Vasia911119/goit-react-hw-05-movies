import Template from 'react-loader-spinner';
import React from 'react';
import { LoaderWraper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWraper>
      <Template
        type="Puff"
        color="#00BFFF"
        height={150}
        width={150}
        timeout={1000}
      />
    </LoaderWraper>
  );
};

export default Loader;
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Parallax } from 'react-parallax';

const img =
  'https://images.unsplash.com/photo-1517936401693-1dbb51e467c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const ParallaxBanner = () => {
  return (
    <div className="">
      <Parallax
        bgImage={img}
        bgImageStyle={{ objecFit: 'cover', objectPosition:'center' }}
        strength={300}>
        <div className="flex h-60 items-center justify-center">
          <div className="absolute space-y-4 text-center">
            <h2 className="font-logo text-4xl font-bold text-white">Cook with the best Chef's</h2>
            <a
              href="#meetChef"
              className="inline-block rounded-md bg-green-600 px-10 py-3 text-center text-white hover:bg-secondary">
              Try it out
            </a>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxBanner;

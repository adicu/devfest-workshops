/* eslint-disable max-len */
import React from 'react';

function Banner() {
  const banner = {
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    alignItems: 'center',
  };
  const bannerStuff = {
    display: 'flex',
    alignItems: 'center',
  };
  const oldMan = {
    width: '30%',
    marginRight: '20px',
  };
  const allText = {
    flex: 1,
    paddingRight: '20px',
  };
  const slogan = {
    paddingRight: '20px',
    width: '80%',
  };
  const sloganTitle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };
  const sloganText = {
    fontSize: '16px',
    paddingBottom: '20px',
  };
  const minibox = {
    display: 'flex',
    alignItems: 'center',
  };
  const join = {
    flex: 0.35,
    fontSize: '18px',
    backgroundColor: 'green',
    color: 'white',
    padding: '5px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline',
  };
  const browse = {
    fontSize: '14px',
    marginLeft: '20px',
    alignItems: 'center',
    fontWeight: 'bold',
  };
  return (
    <div style={banner}>
      <div style={bannerStuff}>
        <div style={allText}>
          <div style={slogan}>
            <h1 style={sloganTitle}>Meet your next favorite movie.</h1>
            <p style={sloganText}>The best discoveries come from people who share your taste. FlickPicks lets you make and share lists of movies with like-minded moviegoers from around the world. </p>
          </div>
          <div style={minibox}>
            <button type="button" style={join}>Join the Community</button>
            <p style={browse}>or browse community lists</p>
          </div>
        </div>
        <img src="oldguyfromup.jpg" alt="the old guy from up sitting in a sofa with his walker standing next to him" style={oldMan} />
      </div>
    </div>
  );
}

export default Banner;

import React, { Fragment, useEffect, useState } from 'react';
import './MovieDetail.css';
import { useParams } from 'react-router-dom';

import BookMovie from '../BookMovie/BookMovie';
import AlertMsg from '../AlertMsg/AlertMsg';

export default function MovieDetail() {
  const [movie, setMovie] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  return (
    <Fragment>
      <div className='alert'>{submitted && <AlertMsg />}</div>
      <div className='movie_detail'>
        <img
          className='movie_card_img'
          src={movie.image && movie.image.original}
          alt=''
        />
        <div className='details'>
          <h1>{movie.name}</h1>
          <div
            className='summary'
            dangerouslySetInnerHTML={{ __html: movie.summary }}
          />

          <div>
            Genres :{' '}
            <div className='genre'>
              {movie.genres
                ? movie.genres.map((genres) => (
                    <span key={genres}>{genres}</span>
                  ))
                : ''}
            </div>
          </div>

          <div className='buttons'>
            <BookMovie movie={movie} setSubmitted={setSubmitted} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

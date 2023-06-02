import React, { useState } from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import NotFoundImgSrc from '../../lib/img-not-found.jpg';

export default function MovieCard({ movie }) {
  const [loading, setLoading] = useState(true);
  //   const summarySliced = movie.show.summary
  //     ? movie.show.summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + ' ...'
  //     : 'No Description';

  setTimeout(() => {
    setLoading(false);
  }, 1500);
  return (
    <>
      {loading ? (
        <div className='movie_card'>
          <SkeletonTheme baseColor='#202020' highlightColor='#444'>
            <Skeleton />
          </SkeletonTheme>
        </div>
      ) : (
        <div className='movie_card'>
          <div className='movie_img'>
            <img
              className='card_img'
              src={
                movie.show.image
                  ? movie.show.image.original
                  : { NotFoundImgSrc }
              }
              alt=''
            />
          </div>

          <div className='bottom'>
            <h4>{movie.show.name}</h4>
            {movie.show.genres.map((genre, i) => {
              return (
                <span key={i} className='genre'>
                  {genre}
                </span>
              );
            })}

            <Link to={`movies/${movie.show.id}`} className='link'>
              <div className='d-flex'>
                <Button type='submit' variant='danger' bg='red' size='md'>
                  Book now
                </Button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

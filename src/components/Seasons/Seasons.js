const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Seasons: {seasons.length}</p>
      <p>
        Episodes:{' '}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>

      <div>
        {seasons.map((season) => (
          <div className='season-item' key={season.id}>
            <div className='left'>
              <p>Season {season.number}</p>
              <p>Episodes : {season.episodeOrder}</p>
            </div>
            <div className='right'>
              <strong>
                Aired : {season.premiereDate} - {season.endDate}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;

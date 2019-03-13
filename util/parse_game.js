module.exports = ({ data }) => {
  const { 
    league,
    away_team,
    home_team,
    away_period_scores,
    home_period_scores,
    event_information
  } = data;

  const away_results = [];
  const home_results = [];
  const results_headers = [];

  if (league === "MLB") {
    away_results.push(
      data.away_batter_totals.runs,
      data.away_batter_totals.hits,
      data.away_errors
    );
    home_results.push(
      data.home_batter_totals.runs,
      data.home_batter_totals.hits,
      data.home_errors
    );
    results_headers.push('R', 'H', 'E');
  } else {
    away_results.push(data.away_totals.points);
    home_results.push(data.home_totals.points);
    results_headers.push('T');
  }

  return {
    cache_expiration: Date.now() + 15000,
    updated: Date.now(),
    league,
    away_team,
    home_team,
    away_period_scores,
    home_period_scores,
    away_results,
    home_results,
    results_headers,
    event_information
  };
};

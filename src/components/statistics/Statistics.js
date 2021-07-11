import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section class="statistics">
    {title ? <h2 class="title">Upload stats</h2> : null}
    <ul class="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li class="item" key={id}>
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;

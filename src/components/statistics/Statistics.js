import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const colors = [
  { color: '#FFFFFF' },
  { color: '#2196F3' },
  { color: '#4CAF50' },
  { color: '#FF9800' },
  { color: '#009688' },
  { color: '#795548' },
];

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>Upload stats</h2>}
    <ul className={styles.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={styles.item}
          style={{ background: colors.map(({ color }) => color) }}
          key={id}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
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

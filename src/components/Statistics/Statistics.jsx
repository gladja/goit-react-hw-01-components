import PropTypes from 'prop-types';
import {Section} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  console.log(stats);
  return (
    <Section className='statistics'>
      {title.length > 0 && (
        <h2 className='title'>{title}</h2>
      )}

      <ul className='stat-list'>
        {stats.map(itm =>(
          <li className='item' key={itm.id}>
            <span className='label'>{itm.label}</span>
            <span className='percentage'>{itm.percentage}%</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

Statistics.protoType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

import PropTypes from 'prop-types';
import { Section, List, Item, Label, Percentage, Title } from './Statistics.styled';
import {randomColor} from '../../helpers/randomColor'

export const Statistics = ({ title, stats }) => {
  return (
    <Section className='statistics'>
      {title && (
        <Title>{title}</Title>
      )}

      <List>
        {stats.map(itm =>(
          <Item color={randomColor()} key={itm.id}>
            <Label>{itm.label}</Label>
            <Percentage >{itm.percentage}%</Percentage>
          </Item>
        ))}
      </List>
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

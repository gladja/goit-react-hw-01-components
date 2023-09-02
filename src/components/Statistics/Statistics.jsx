import PropTypes from 'prop-types';
import { Section, List, Item, Label, Percentage, Title } from './Statistics.styled';
import {RandomColor} from './RandomColor'

export const Statistics = ({ title, stats }) => {
  return (
    <Section className='statistics'>
      {title.length > 0 && (
        <Title>{title}</Title>
      )}

      <List>
        {stats.map(itm =>(
          <Item color={RandomColor()} key={itm.id}>
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

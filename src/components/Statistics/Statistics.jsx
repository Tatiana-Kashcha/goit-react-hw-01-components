import * as s from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <s.Section>
      <s.Container>
        {title && <h2>{title}</h2>}
        <s.List>
          {stats.map(stat => (
            <s.ListItems
              key={stat.id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <s.Id>{stat.id}</s.Id>
              <s.Label>{stat.label}</s.Label>
              <s.Percentage>{stat.percentage}%</s.Percentage>
            </s.ListItems>
          ))}
        </s.List>
      </s.Container>
    </s.Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

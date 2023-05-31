import * as s from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <s.Section>
      <s.Container>
        {title && <h2>{title}</h2>}
        <s.List>
          {stats.map(({ id, label, percentage }) => (
            <s.ListItems
              key={id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <s.Label>{label}</s.Label>
              <s.Percentage>{percentage}%</s.Percentage>
            </s.ListItems>
          ))}
        </s.List>
      </s.Container>
    </s.Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape({
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  }),
};

/**
 * Генерує рандомне число, та перетворює його на значення кольору у форматі hex
 * @returns значення кольору у форматі hex
 */
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

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
              // Перший варіант отримання кольору фону
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
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
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
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

import * as s from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <s.Container>
      <s.Table>
        <s.Thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </s.Thead>

        <s.Tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <s.Type>{type}</s.Type>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </s.Tbody>
      </s.Table>
    </s.Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

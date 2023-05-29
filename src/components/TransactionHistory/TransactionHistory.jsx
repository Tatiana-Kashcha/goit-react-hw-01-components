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
          {items.map(item => (
            <tr key={item.id}>
              <s.Type>{item.type}</s.Type>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </s.Tbody>
      </s.Table>
    </s.Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import * as s from './TransactionHistory.styled';

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

<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>;

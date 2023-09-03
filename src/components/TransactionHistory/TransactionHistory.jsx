import PropTypes from 'prop-types';
import { Table, Thead, Row, Type, Currency, Amount } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
      <Thead>
        <Type>Type</Type>
        <th>Amount</th>
        <Currency>Currency</Currency>
      </Thead>
      </thead>

      <tbody>
      {items.map(itm => (
        <Row key={itm.id}>
          <td>{itm.type}</td>
          <Amount>{itm.amount}</Amount>
          <td>{itm.currency}</td>
        </Row>
      ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ).isRequired,
};

import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';
import { SectionTitle } from './Statistics.styled';

export class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <SectionTitle>Statistics</SectionTitle>
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

import React, { FC } from 'react';

type Props = {
  message: string;
  onRetry: () => void;
};

const FetchError: FC<Props> = ({ message, onRetry }) => (
  <div>
    <p>Could not fetch todos. {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

export default FetchError;

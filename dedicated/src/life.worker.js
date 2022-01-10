onmessage = ({ data: { question } }) => {
  postMessage({
    answer: 42,
  });
};

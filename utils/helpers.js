module.exports = {
  format_date: (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
};

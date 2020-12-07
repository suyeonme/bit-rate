const Dropdown = ({ currencyList, setCurrency }) => {
  return (
    <select onChange={e => setCurrency(e.target.value)}>
      {currencyList.map((c, i) => (
        <option key={i} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

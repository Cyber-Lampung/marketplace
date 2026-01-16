const Button = ({ className, type, value }) => {
  return (
    <button className={className} type={type}>
      {value}
    </button>
  );
};

export default Button;

import './ForcastItem.css';

export const ForcastItem = (props) => {
  return (
    <div className="forcast-item-wrapper">
      <div>
        <props.data.icon size={32} color="#f1f3f5" />
      </div>
      <div className="parameter-value">{props.data.value}</div>
      <div>{props.data.parameter}</div>
    </div>
  );
};

export default ForcastItem;

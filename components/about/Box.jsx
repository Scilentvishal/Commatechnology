const Box = (props) => {
  return (
    <div className={`${props.class} text-left p-5 rounded`}>
      <h5 className="lg:text-2xl text-xl text-white font-mono font-black">
        {props.icon} {props.title}
      </h5>
      <p>{props.text}</p>
    </div>
  );
};

export default Box;

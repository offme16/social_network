import cla from "./FormsControls.module.css";

export const Textarea = (props) => {
  const hasError = props.meta.error && props.meta.touched;
  return (
    <div className={hasError ? cla.error : ""}>
      <textarea {...props.input} />
      {hasError && (
        <div className={cla.error__span}>
          <span>{props.meta.error}</span>
        </div>
      )}
    </div>
  );
};

export const Input = (props) => {
  const hasError = props.meta.error && props.meta.touched;
  return (
    <div className={hasError ? cla.error : ""}>
      <input {...props.input} />
      {hasError && (
        <div className={cla.error__span}>
          <span>{props.meta.error}</span>
        </div>
      )}
    </div>
  );
};

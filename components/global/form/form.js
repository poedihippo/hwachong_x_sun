import classes from "./form.module.css";
import Select from "react-select";

export function TextForm(props) {
  const { placeholder, label, name, type, setValue, value, required } = props;
  return (
    <div className={classes.text_form}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classes.form}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      />
    </div>
  );
}

export function RadioForm(props) {
  const { count, setValue, value } = props;

  return (
    <div className={classes.radio_font}>
      <p style={{ textAlign: "start", marginBottom: "1rem" }}>Gender</p>
      <div style={{ display: "flex" }}>
        {count &&
          count.map((data, idx) => {
            return (
              <div key={idx} style={{ margin: "0 1rem" }}>
                <input
                  type="radio"
                  id={data.name}
                  name="gender"
                  value={data.name}
                  onChange={(e) => setValue(e.target.value)}
                />
                <lable htmlFor="male">{data.name}</lable>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export function SelectForm(props) {
  const { data, placeholder, label, setValue } = props;

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#c4c4c4" : "#000000",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: 41,
    }),
    container: (provided) => ({
      ...provided,
      marginTop: 8,
    }),
  };

  return (
    <div className={classes.select_form}>
      <label>{label}</label>
      <Select
        options={data}
        styles={customStyles}
        placeholder={<div>{placeholder}</div>}
        onChange={(selectedOption) => setValue(selectedOption.value)}
        id="long-value-select"
        instanceId="long-value-select"
      />
    </div>
  );
}

// selected disabled hidden

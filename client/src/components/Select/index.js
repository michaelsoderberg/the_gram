import React from "react";
import "./styles.css";

const Option = props => <option className="Option" {...props} key={props.value} />;
const Select = props => <select className="Select" {...props} />;

export { Option };
export default Select;


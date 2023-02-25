import { FC,  useEffect, useState } from "react";
import ReactSelect from "react-select";
import "./style.css";

type SearchProps = {
  onSearchChange: (e: any) => void;
};

export const Search: FC<SearchProps> = ({ onSearchChange }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
      .then((res) => res.json())
      .then(({ data }) => setOptions(data));
  }, []);

  const option = options?.map((data: any) => ({
    label: data.city,
    value: data.city,
  }));
  console.log(option);
  return (
    <div className="search">
      <ReactSelect
        options={option}
        className="header-box__search__input"
        onChange={onSearchChange}
      />
    </div>
  );
};

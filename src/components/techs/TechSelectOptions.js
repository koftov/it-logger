import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechs } from "../../actions/techActions";

const TechSelectOptions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechs());
  }, [dispatch]);

  const { techs, loading } = useSelector((state) => state.tech);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

export default TechSelectOptions;

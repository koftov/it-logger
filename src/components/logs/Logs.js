import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../actions/logActions";

const Logs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogs());
  }, [dispatch]);

  const { logs, loading } = useSelector((state) => state.log);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show...</p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

export default Logs;

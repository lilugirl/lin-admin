import React from "react";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <>
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Featured />
        <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
      </div>
      {/* <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table />
      </div> */}
    </>
  );
};

export default Home;

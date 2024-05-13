import React from "react";
import RehabDurationChart from "../features/dashboard/RehabDurationChart";
import Row from "../ui/Row";
import Card from "../ui/Card";
import OverallProgressChart from "../features/dashboard/OverallProgressChart";
import CustomersChart from "../features/dashboard/CustomersChart";
import RehabAtHomeChart from "../features/dashboard/RehabAtHomeChart";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Row type="horizontal">
        <Card>
          <h3>Rehab duration</h3>
          <RehabDurationChart />
        </Card>
        <Card>
          <h3>Overall Progress</h3>
          <OverallProgressChart />
        </Card>
      </Row>

      <Row type="horizontal">
        <Card>
          <h3>Customers</h3>
          <CustomersChart />
        </Card>
        <Card>
          <h3>Rehab At Home</h3>
          <RehabAtHomeChart />
        </Card>
      </Row>
    </>
  );
};

export default Dashboard;

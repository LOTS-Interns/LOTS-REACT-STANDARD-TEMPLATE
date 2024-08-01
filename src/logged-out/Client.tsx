import React from "react";
import Card from "./components/Card/Card";
import NewUsers from "./components/NewUser/newUsers";
import Table from "./components/Table/Table";


function Client() {
  return (
    <>
      <h1>Analytics</h1>
 <div className="analyse">

     <Card title="Total Sales" value="$65,024" percentage="+81%" styleClass="sales" />
    <Card title="Site Visit" value="24,981" percentage="-48%" styleClass="visits" />
    <Card title="Searches" value="14,147" percentage="+21%" styleClass="searches" />
</div>

      <NewUsers
        users={[
          {
            name: "Jack",
            imageSrc: "/images/profile-2.jpg",
            timeAgo: "54 Min Ago",
          },
          {
            name: "Amir",
            imageSrc: "/images/profile-3.jpg",
            timeAgo: "3 Hours Ago",
          },
          {
            name: "Ember",
            imageSrc: "/images/profile-4.jpg",
            timeAgo: "6 Hours Ago",
          },
          { name: "More", imageSrc: "/images/plus.png", timeAgo: "New User" },
        ]}
      />

      <Table
        headings={["Course Name", "Course Number", "Payment", "Status"]}
        data={[
          {
            courseName: "Course 1",
            courseNumber: "001",
            payment: "Paid",
            status: "Completed",
          },
          {
            courseName: "Course 2",
            courseNumber: "002",
            payment: "Pending",
            status: "In Progress",
          },
          {
            courseName: "Course 3",
            courseNumber: "003",
            payment: "Paid",
            status: "Completed",
          },
        ]}
      />
    </>
  );
}

export default Client;

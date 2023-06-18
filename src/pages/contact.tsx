import { Timeline } from "antd";
import React from "react";
const Contact = () => {
    return (  <>
   <div className="w-1/4">
        <h2>What will happen next?</h2>
        <p>We will get back to you within 24 hours</p>
        <p>You are a step closer to building great software</p>
<div className="mt-40">
        <Timeline
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
  </div>
   </div>
    </>);
}
 
export default Contact;
import { useState, useEffect } from "react";
import JobListing from "../JobListing";

import axios from "axios";

export default function CandidateHome({user}) {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        console.log(process.env.REACT_APP_BACKENDURI)
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKENDURI}/api/candidate/joblist`
        );

        if (data.success) {
          const list = data.jobs;
          // console.log(list[0]);
          list.reverse();
          setJobList(list);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getList();
  }, []);
  return (
    <>
      <JobListing JobList={jobList} user={user}/>
    </>
  );
}

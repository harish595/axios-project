import React, { useState } from "react";
import MainContent from "./MainContent";
import Search from "./Search";
import Axios from "../apis/AxiosGitContext";
const AxiosHome = () => {
  let [user, setUser] = useState("");
  let [repos, setRepos] = useState([]);
  let [loading, setLoading] = useState(false);

  ////function
  let onTermsubmit = async term => {
    try {
      let client_id = "Iv1.90a96202dd82221f";
      let client_secret = "bc2975aa74416a1e55010190624ba18d444c074a";
      let users = await Axios.get(
        `/users/${term}?Client_id${client_id}&Client_secret${client_secret}`
      );
      console.log(users);
      let ReposData = await Axios.get(
        `/users/${term}/repos?Client_id${client_id}&Client_secret${client_secret}`
      );
      setLoading(true);
      setUser(users.data);
      setRepos(ReposData.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <section id="mainSec">
      <article>
        <Search onTermsubmit={onTermsubmit} user={user} loading={loading} />
        <MainContent user={user} loading={loading} repos={repos} />
      </article>
    </section>
  );
};

export default AxiosHome;

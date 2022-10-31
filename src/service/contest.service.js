import axios from "axios";

const CONTEST_URL = "http://localhost:8082/";

class ContestService {
  addContest(contest) {
    // add the necessary axios here. hint: use axios.post
    return axios.post(CONTEST_URL + "contest", contest);
  }
  listContest() {
    // add the necessary axios here. hint: use axios.get
    return axios.get(CONTEST_URL + "contest");
  }
}

export default new ContestService();

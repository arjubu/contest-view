import axios from "axios";

const CONTEST_URL = "http://localhost:8001/contest/";

class ContestService {
  addContest(contest) {
    return axios.post(CONTEST_URL + "createContest", contest, null);
  }
  listContest() {
    return axios.get(CONTEST_URL + "contestList", null);
  }

  deleteContest(contestId) {
    return axios.delete(`${CONTEST_URL}deleteContest/${contestId}`);
  }
  editContest(contest) {
    return axios.put(`${CONTEST_URL}editContest`, contest);
  }
}

export default new ContestService();

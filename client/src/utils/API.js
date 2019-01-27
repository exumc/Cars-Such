import axios from "axios";

export default {
    getAllMembers: function() {
        return axios.get("/api/members");
    },

    addNewMember: function(member) {
        return axios.post("/api/new", member);
    }
};
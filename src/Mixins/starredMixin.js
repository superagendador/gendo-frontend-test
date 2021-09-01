import axios from "axios";
export default {
    
    methods: {
        getStarred() {
          const { url, client_id, client_secret, count, sort } = this.github;
          axios
            .get(
              `${url}/Rudson-50/starred?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
            )
            .then(({ data }) => (this.starreds = data));
        },
      },
      
      created() {
        this.getStarred();
      },
}
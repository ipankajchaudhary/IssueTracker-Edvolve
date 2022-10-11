import axios from "axios";

export const fetchdata = () => {
  const options = {
    method: "GET",
    url: "https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues?per_page=125",
    headers: {'Accept': 'application/vnd.github.v3+json', Authorization: "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" },
  };
  return axios.request(options);
};

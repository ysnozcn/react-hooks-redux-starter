import axios from "axios";
import { API_BASE } from "../config/evn";

export function API(method, url, data, params, callback) {
  axios({
    method: method,
    url: `${API_BASE}/${url}`,
    data: data,
    params: params,
  })
    .then(result => {
      if (result.status === 200) {
        callback(result.data);
      }
    })
    .catch(error => {
      console.log(error);

      // window.location.href = "/dashboard";
      // if (error.response.status === 401) {

      // }
    });
}

export function API_IMAGE(method, url, data, params, callback) {
  const formData = new FormData();
  formData.append("_method", method);

  for (var item in data) {
    if (item === "imageitem") {

      if (data[item] && data[item][0] instanceof File) {
        formData.append("imageitem_data", data[item][0])
      } else {
        formData.append("imageitem_data", data[item])
      }

    } else {
      formData.append(item, data[item]);
    }
  }


  axios({
    method: method === "PUT" ? "POST" : method,
    url: `${API_BASE}/${url}`,
    data: formData,
    params: params
  })
    .then(result => {
      if (result.status === 200) {
        callback(result.data);
      }
    })
    .catch(error => {
      alert(error.response.status)
    });
}
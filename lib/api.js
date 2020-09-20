/**
 * @ Author: caophuong1018
 * @ Create Time: 2020-09-20 15:49:31
 * @ Modified by: caophuong1018
 * @ Modified time: 2020-09-20 16:03:48
 * @ Description: A small tool to fetch data from remote resource
 */

import axios from "axios";
import CONFIG from "../config";
const dataFetcher = () =>
  axios.create({
    baseURL: CONFIG.baseURL,
    timeout: CONFIG.timeout,
    headers: CONFIG.headers,
  });

export default dataFetcher;

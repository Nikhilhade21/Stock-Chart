import axios from "axios"

const TOKEN = "ckoo391r01qlsp8vvod0ckoo391r01qlsp8vvodg"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})

import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance

/* instance sert à dire que si on écrit instance.get ('/foo-bar')
ça revient à dire https://api.themoviedb.org/3/foo-bar */
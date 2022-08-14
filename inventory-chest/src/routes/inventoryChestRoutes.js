const routes = (app) => {
    app.route("/chest")
        .get((req, res) =>
            res.send("GET request successfull"))
        .post((req, res) => 
            res.send("POST request successfull"))
    app.route("/chest/:chestID")
        .put((req, res) => 
            res.send("PUT request successfull"))
        .delete((req, res) => 
            res.send("DELETE request successfull"))
} 

export default routes
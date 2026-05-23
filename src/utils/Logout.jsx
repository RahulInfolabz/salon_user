import cookie from "js-cookie";

function Logout() {
    try {
        cookie.remove("token");
        alert("Logout Successful.")
        window.location.href = "/login";
    } catch (e) {
        window.location.href = "/";
    }
}

export default Logout;
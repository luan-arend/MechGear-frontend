const API_URL = "http://localhost:8080";

export const api = {
  async request(endpoint, method = "GET", data = null, token = null) {
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const options = {
      method,
      headers,
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Erro na requisição");
    }

    return responseData;
  },

  login(username, password) {
    return this.request("/login", "POST", { username, password });
  },

  /*getClientes(token) {
    return this.request("/clientes", "GET", null, token);
  },

  createCliente(clienteData, token) {
    return this.request("/clientes", "POST", clienteData, token);
  },

  updateCliente(id, clienteData, token) {
    return this.request(`/clientes/${id}`, "PUT", clienteData, token);
  },

  deleteCliente(id, token) {
    return this.request(`/clientes/${id}`, "DELETE", null, token);
  },

  getDashboardData(token) {
    return this.request("/dashboard", "GET", null, token);
  },*/
};
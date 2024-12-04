const api = (() => {
  const BASE_URL = 'https://instamemo-api.vercel.app';

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  function putAccessToken(accessToken) {
    localStorage.setItem('accessToken', accessToken);
  }

  async function register({ name, email, password }) {
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return message;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { accessToken },
    } = responseJson;

    return accessToken;
  }

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data } = responseJson;

    return data;
  }

  async function getAllActiveMemo() {
    const response = await _fetchWithAuth(`${BASE_URL}/memo/active-memo`);

    const responseJson = await response.json();

    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data;
  }

  async function getAllArchivedMemo() {
    const response = await _fetchWithAuth(`${BASE_URL}/memo/archived-memo`);

    const responseJson = await response.json();

    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data;
  }

  async function createMemo(payload) {
    try {
      const response = await _fetchWithAuth(`${BASE_URL}/memo/add-memo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseJson = await response.json();
      const { status, message, data } = responseJson;

      if (status !== 'success') {
        throw new Error(message || 'An error occurred while creating the memo.');
      }

      return data;
    } catch (error) {
      throw new Error(error.message || 'Failed to create memo.');
    }
  }

  async function getDetailMemo(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/memo/${id}`);

    const responseJson = await response.json();

    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return data;
  }

  async function deleteMemo(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/memo/${id}`, {
      method: 'DELETE',
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message || 'Failed to delete memo.');
    }

    return message;
  }

  async function editMemo(id, payload) {
    const response = await _fetchWithAuth(`${BASE_URL}/memo/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseJson = await response.json();

    const { status, message, data } = responseJson;

    if (status !== 'success') {
      throw new Error(message || 'Failed to update memo.');
    }

    return data;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllActiveMemo,
    getAllArchivedMemo,
    createMemo,
    getDetailMemo,
    deleteMemo,
    editMemo,
  };
})();

export default api;

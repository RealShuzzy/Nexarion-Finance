export function logout() {
  localStorage.removeItem('token');
  if (window.electronAPI) {
    window.electronAPI.logout();
  } else {
    window.location.hash = '/login';
    window.location.reload();
  }
}
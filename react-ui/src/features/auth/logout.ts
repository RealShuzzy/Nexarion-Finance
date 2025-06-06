export function logout() {
  localStorage.removeItem('auth');

  if (window.electronAPI) {
    window.electronAPI.logout();
  } else {
    window.location.hash = '/login';
    window.location.reload();
  }
}
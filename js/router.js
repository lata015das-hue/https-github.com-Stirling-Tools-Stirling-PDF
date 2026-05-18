// ==========================
// Simple Hash-Based Router
// ==========================

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    window.addEventListener('hashchange', () => this.resolve());
  }

  add(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  resolve() {
    const hash = window.location.hash.slice(1) || '/';
    
    // Check exact match
    if (this.routes[hash]) {
      this.currentRoute = hash;
      this.routes[hash]();
      return;
    }

    // Check parametric routes
    for (const [pattern, handler] of Object.entries(this.routes)) {
      const regex = new RegExp('^' + pattern.replace(/:([^/]+)/g, '([^/]+)') + '$');
      const match = hash.match(regex);
      if (match) {
        this.currentRoute = hash;
        handler(...match.slice(1));
        return;
      }
    }

    // Default: home
    if (this.routes['/']) {
      this.routes['/']();
    }
  }

  navigate(path) {
    window.location.hash = path;
  }

  start() {
    this.resolve();
  }
}

const router = new Router();

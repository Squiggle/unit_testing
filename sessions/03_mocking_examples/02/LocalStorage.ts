export class LocalStorage {
  storage: { [key: string]: string } = {};

  getItem(key: string) {
    return this.storage[key];
  }

  setItem(key: string, value: string) {
    this.storage[key] = value;
  }

  removeItem(key: string) {
    delete this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}

/* usage:
test('this test depends on content in localStorage', () => {
  const fakeStorage = new LocalStorage();
  localStorage.setItem('idToken', 'abcd');
  window.localStorage = fakeStorage;
  
  // test...
}
*/
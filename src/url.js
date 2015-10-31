const default_hash = "QmSS3dUE5oKdyDNvpGsYCXgm2mBW4fSDzC5B3NDf7DR8VR"

var url = class URL {
  constructor(_window) {
    this._window = _window
    this.isLocalMode = this._localIsSet()
    this.setHash(default_hash)
  }
  setHash(new_hash) {
    this.hash = new_hash
    this._window.location.hash = '#' + this.hash
  }
  toggleLocalMode() {
    this.isLocalMode = !this.isLocalMode
    if(this.isLocalMode) {
      this._window.location.search = '?local'
    } else {
      this._window.location.search = ''
    }
  }
  // Not for use outside
  _localIsSet() {
    return this._window.location.search === '?local'
  }
}

export default url
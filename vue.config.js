module.exports = {
  devServer: {
    before (app) {
      app.get('/api/list', (req, res) => {
        res.json([
          { id: 1, name: 'tom', version: '1.0' },
          { id: 2, name: 'jerry', version: '2.0' }
        ])
      })
    }
  }
}

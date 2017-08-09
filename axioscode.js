'https://api.coinmarketcap.com/v1/ticker/?limit=10





class App extends Component {

  constructor() {
    super()
    this.state = {
      loaded: false,
      coinData: {},
      sortBy: 'id',
      asc: true,
    }
    this.fetchData = this.fetchData.bind(this)
  }
  fetchData() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(response => {
        this.setState({
          loaded: true,
          coinData: response.data
        })
        console.log('updated')
      })
  }

  // Fetch Data in the beginning and set interval
  componentDidMount() {
    // Load initial Data, otherwise there would be a gap till loaded
    this.fetchData()
    // update Data every 5 seconds
    this.updateData = setInterval(
      () => this.fetchData(),
      5000
    )
  }
  
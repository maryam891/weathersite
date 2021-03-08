module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Weathersite-project/#/'
    : '/',
    pwa: {
        background_color: 'lightblue',
        manifestOptions: {

            name: 'weathersite',
            themeColor: 'blue',


        },



    }
}
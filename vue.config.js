module.exports = { 
   pwa: {
        manifestOptions: {
        background_color: 'lightblue',
       },

            name: 'weathersite',
            themeColor: 'blue',
WorkBoxOptions:{
    runtimeCaching:[
 {
 handler:'NetworkFirst',
 options:{
 networkTimeoutSeconds:5
 },
 urlPattern:'https://weatherapi-com.p.rapidapi.com/forecast.json?q='
 }
     ]
 }
     }
}
